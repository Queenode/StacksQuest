;; Stacks Quest Progress Tracking Contract
;; Tracks user learning progress, quiz scores, and topic completion

;; Error codes
(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-TOPIC-NOT-FOUND (err u101))
(define-constant ERR-ALREADY-COMPLETED (err u102))
(define-constant ERR-INVALID-SCORE (err u103))
(define-constant ERR-TOPIC-LOCKED (err u104))
(define-constant ERR-QUEST-NOT-STARTED (err u105))

;; Contract owner
(define-data-var contract-owner principal tx-sender)

;; Total topics in the quest
(define-constant TOTAL-TOPICS u15)

;; Minimum passing score (70%)
(define-constant PASSING-SCORE u70)

;; XP Rewards
(define-constant XP-PER-TOPIC u100)
(define-constant XP-PERFECT-SCORE u50)

;; Data maps

;; Track topic completion for each user
(define-map user-topic-completion
  { user: principal, topic-id: uint }
  { 
    completed: bool,
    completion-time: uint,
    quiz-score: uint,
    attempts: uint
  }
)

;; Track overall user progress
(define-map user-progress
  principal
  {
    topics-completed: uint,
    total-score: uint,
    total-xp: uint,
    streak-count: uint,
    quest-started: uint,
    last-active-day: uint,
    fortress-master: bool
  }
)

;; Topic metadata
(define-map topic-data
  uint
  {
    title: (string-ascii 100),
    required-score: uint,
    active: bool
  }
)

;; Leaderboard: track top performers
(define-map leaderboard-entry
  principal
  {
    rank: uint,
    total-topics: uint,
    average-score: uint,
    completion-date: uint
  }
)

;; Read-only functions

;; Get user's progress for a specific topic
(define-read-only (get-topic-progress (user principal) (topic-id uint))
  (default-to 
    { completed: false, completion-time: u0, quiz-score: u0, attempts: u0 }
    (map-get? user-topic-completion { user: user, topic-id: topic-id })
  )
)

;; Get user's overall progress
(define-read-only (get-user-progress (user principal))
  (default-to
    { topics-completed: u0, total-score: u0, total-xp: u0, streak-count: u0, quest-started: u0, last-active-day: u0, fortress-master: false }
    (map-get? user-progress user)
  )
)

;; Check if topic is unlocked for user
(define-read-only (is-topic-unlocked (user principal) (topic-id uint))
  (if (is-eq topic-id u1)
    true ;; First topic always unlocked
    (let ((prev-topic (get-topic-progress user (- topic-id u1))))
      (get completed prev-topic)
    )
  )
)

;; Check if user has completed all topics
(define-read-only (is-fortress-master (user principal))
  (let ((progress (get-user-progress user)))
    (is-eq (get topics-completed progress) TOTAL-TOPICS)
  )
)

;; Get leaderboard entry
(define-read-only (get-leaderboard-entry (user principal))
  (map-get? leaderboard-entry user)
)

;; Public functions

;; Initialize user progress (called when user enters fortress)
(define-public (start-quest)
  (let ((current-progress (map-get? user-progress tx-sender)))
    (asserts! (is-none current-progress) ERR-ALREADY-COMPLETED)
    (ok (map-set user-progress tx-sender {
      topics-completed: u0,
      total-score: u0,
      total-xp: u0,
      streak-count: u1,
      quest-started: burn-block-height,
      last-active-day: burn-block-height,
      fortress-master: false
    }))
  )
)

;; Record quiz attempt (called when user takes quiz)
(define-public (record-quiz-attempt (topic-id uint) (score uint))
  (let (
    (current-topic (get-topic-progress tx-sender topic-id))
    (current-progress (get-user-progress tx-sender))
    (is-unlocked (is-topic-unlocked tx-sender topic-id))
    (is-newly-completed (and (>= score PASSING-SCORE) (not (get completed current-topic))))
    (xp-reward (if is-newly-completed 
                 (+ XP-PER-TOPIC (if (is-eq score u100) XP-PERFECT-SCORE u0))
                 u0))
    ;; Simple streak logic: if active today (simplified for demo as 'new block')
    (new-streak (if (> burn-block-height (+ (get last-active-day current-progress) u144))
                  (+ (get streak-count current-progress) u1)
                  (get streak-count current-progress)))
  )
    ;; Validate
    (asserts! (and (>= topic-id u1) (<= topic-id TOTAL-TOPICS)) ERR-TOPIC-NOT-FOUND)
    (asserts! (<= score u100) ERR-INVALID-SCORE)
    (asserts! (not (is-eq (get last-active-day current-progress) u0)) ERR-QUEST-NOT-STARTED)
    (asserts! is-unlocked ERR-TOPIC-LOCKED)
    
    ;; Update topic completion
    (map-set user-topic-completion 
      { user: tx-sender, topic-id: topic-id }
      {
        completed: (or (get completed current-topic) (>= score PASSING-SCORE)),
        completion-time: (if (>= score PASSING-SCORE) burn-block-height (get completion-time current-topic)),
        quiz-score: (if (> score (get quiz-score current-topic)) score (get quiz-score current-topic)),
        attempts: (+ (get attempts current-topic) u1)
      }
    )
    
    ;; Update overall progress
    (let ((updated-progress {
      topics-completed: (+ (get topics-completed current-progress) (if is-newly-completed u1 u0)),
      total-score: (+ (get total-score current-progress) (if is-newly-completed score u0)),
      total-xp: (+ (get total-xp current-progress) xp-reward),
      streak-count: new-streak,
      quest-started: (get quest-started current-progress),
      last-active-day: burn-block-height,
      fortress-master: (is-eq (+ (get topics-completed current-progress) (if is-newly-completed u1 u0)) TOTAL-TOPICS)
    }))
      (map-set user-progress tx-sender updated-progress)
      
      ;; Update leaderboard
      (map-set leaderboard-entry tx-sender {
        rank: u0, ;; Rank calculation usually happens off-chain or via a separate process
        total-topics: (get topics-completed updated-progress),
        average-score: (/ (get total-score updated-progress) (if (is-eq (get topics-completed updated-progress) u0) u1 (get topics-completed updated-progress))),
        completion-date: burn-block-height
      })
      
      (ok { 
        passed: (>= score PASSING-SCORE), 
        newly-completed: is-newly-completed,
        xp-earned: xp-reward,
        streak: new-streak
      })
    )
  )
)

;; Complete word hunt (called when user finishes quest chamber)
(define-public (complete-word-hunt (topic-id uint))
  (let (
    (current-topic (get-topic-progress tx-sender topic-id))
    (is-unlocked (is-topic-unlocked tx-sender topic-id))
  )
    ;; Validate
    (asserts! (and (>= topic-id u1) (<= topic-id TOTAL-TOPICS)) ERR-TOPIC-NOT-FOUND)
    (asserts! is-unlocked ERR-TOPIC-LOCKED)
    
    ;; Mark word hunt as attempted (doesn't affect completion, just tracks engagement)
    (ok true)
  )
)

;; Admin function: Update contract owner
(define-public (set-contract-owner (new-owner principal))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (var-set contract-owner new-owner)
    (ok true)
  )
)

;; Initialize topics (called once by admin)
(define-public (initialize-topics)
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    
    ;; Set up all 15 topics
    (map-set topic-data u1 { title: "Introduction to Stacks", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u2 { title: "Clarity Smart Contracts", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u3 { title: "Proof of Transfer (PoX)", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u4 { title: "Bitcoin Fundamentals", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u5 { title: "Stacking Mechanism", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u6 { title: "Bitcoin Mining", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u7 { title: "Blockchain Consensus", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u8 { title: "Cryptography Basics", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u9 { title: "Decentralization", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u10 { title: "Smart Contract Security", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u11 { title: "Bitcoin Wallets", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u12 { title: "Layer 2 Solutions", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u13 { title: "DeFi on Stacks", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u14 { title: "NFTs and Digital Assets", required-score: PASSING-SCORE, active: true })
    (map-set topic-data u15 { title: "The Future of Bitcoin", required-score: PASSING-SCORE, active: true })
    
    (ok true)
  )
)
