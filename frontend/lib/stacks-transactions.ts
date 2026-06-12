/**
 * Auto-generated JSDoc for stacks-transactions.ts
 * This helps maintain code documentation standards.
 */
import { openContractCall } from '@stacks/connect';
import { uintCV, AnchorMode } from '@stacks/transactions';

// Contract deployment addresses (update after deployment)
const PROGRESS_CONTRACT = {
  address: 'SP1B27X06M4SF2TE46G3VBA7KSR4KBMJCTHM6BES4',
  name: 'stacks-quest-progress',
};

/**
 * Start the user's quest journey on-chain.
 * Initializes progress tracking with XP, streak, and completion data.
 */
export async function startQuest(): Promise<boolean> {
  try {
    await openContractCall({
      contractAddress: PROGRESS_CONTRACT.address,
      contractName: PROGRESS_CONTRACT.name,
      functionName: 'start-quest',
      functionArgs: [],
      anchorMode: AnchorMode.Any,
      onFinish: (data) => {
        console.log('Quest started! TX:', data.txId);
      },
      onCancel: () => {
        console.log('User cancelled quest start');
      },
    });
    return true;
  } catch (error) {
    console.error('Failed to start quest:', error);
    return false;
  }
}

/**
 * Record a quiz attempt on-chain.
 * The contract will calculate XP, update streaks, and track completion.
 */
export async function recordQuizAttempt(topicId: number, score: number): Promise<boolean> {
  try {
    await openContractCall({
      contractAddress: PROGRESS_CONTRACT.address,
      contractName: PROGRESS_CONTRACT.name,
      functionName: 'record-quiz-attempt',
      functionArgs: [uintCV(topicId), uintCV(score)],
      anchorMode: AnchorMode.Any,
      onFinish: (data) => {
        console.log('Quiz recorded! TX:', data.txId);
      },
      onCancel: () => {
        console.log('User cancelled quiz submission');
      },
    });
    return true;
  } catch (error) {
    console.error('Failed to record quiz attempt:', error);
    return false;
  }
}

/**
 * Complete a word hunt challenge on-chain.
 * Tracks engagement with the interactive quest chambers.
 */
export async function completeWordHunt(topicId: number): Promise<boolean> {
  try {
    await openContractCall({
      contractAddress: PROGRESS_CONTRACT.address,
      contractName: PROGRESS_CONTRACT.name,
      functionName: 'complete-word-hunt',
      functionArgs: [uintCV(topicId)],
      anchorMode: AnchorMode.Any,
      onFinish: (data) => {
        console.log('Word hunt completed! TX:', data.txId);
      },
      onCancel: () => {
        console.log('User cancelled word hunt submission');
      },
    });
    return true;
  } catch (error) {
    console.error('Failed to complete word hunt:', error);
    return false;
  }
}
