import { callReadOnlyFunction, cvToJSON, uintCV, principalCV } from '@stacks/transactions';

// Contract deployment addresses (update after deployment)
const PROGRESS_CONTRACT = {
  address: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  name: 'stacks-quest-progress',
};

const NFT_CONTRACT = {
  address: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  name: 'stacks-quest-nft',
};

const NETWORK_URL = 'https://api.mainnet.hiro.so';

/**
 * Fetch a user's overall quest progress from the on-chain contract.
 */
export async function getUserProgress(userAddress: string) {
  try {
    const result = await callReadOnlyFunction({
      contractAddress: PROGRESS_CONTRACT.address,
      contractName: PROGRESS_CONTRACT.name,
      functionName: 'get-user-progress',
      functionArgs: [principalCV(userAddress)],
      senderAddress: userAddress,
      network: NETWORK_URL as any,
    });
    return cvToJSON(result);
  } catch (error) {
    console.error('Failed to fetch user progress:', error);
    return null;
  }
}

/**
 * Fetch a user's progress for a specific topic.
 */
export async function getTopicProgress(userAddress: string, topicId: number) {
  try {
    const result = await callReadOnlyFunction({
      contractAddress: PROGRESS_CONTRACT.address,
      contractName: PROGRESS_CONTRACT.name,
      functionName: 'get-topic-progress',
      functionArgs: [principalCV(userAddress), uintCV(topicId)],
      senderAddress: userAddress,
      network: NETWORK_URL as any,
    });
    return cvToJSON(result);
  } catch (error) {
    console.error('Failed to fetch topic progress:', error);
    return null;
  }
}

/**
 * Check if a specific topic is unlocked for the user.
 */
export async function isTopicUnlocked(userAddress: string, topicId: number) {
  try {
    const result = await callReadOnlyFunction({
      contractAddress: PROGRESS_CONTRACT.address,
      contractName: PROGRESS_CONTRACT.name,
      functionName: 'is-topic-unlocked',
      functionArgs: [principalCV(userAddress), uintCV(topicId)],
      senderAddress: userAddress,
      network: NETWORK_URL as any,
    });
    return cvToJSON(result);
  } catch (error) {
    console.error('Failed to check topic unlock status:', error);
    return false;
  }
}

/**
 * Check if the user has achieved Fortress Master status.
 */
export async function isFortressMaster(userAddress: string) {
  try {
    const result = await callReadOnlyFunction({
      contractAddress: PROGRESS_CONTRACT.address,
      contractName: PROGRESS_CONTRACT.name,
      functionName: 'is-fortress-master',
      functionArgs: [principalCV(userAddress)],
      senderAddress: userAddress,
      network: NETWORK_URL as any,
    });
    return cvToJSON(result);
  } catch (error) {
    console.error('Failed to check fortress master status:', error);
    return false;
  }
}

/**
 * Fetch the user's leaderboard entry.
 */
export async function getLeaderboardEntry(userAddress: string) {
  try {
    const result = await callReadOnlyFunction({
      contractAddress: PROGRESS_CONTRACT.address,
      contractName: PROGRESS_CONTRACT.name,
      functionName: 'get-leaderboard-entry',
      functionArgs: [principalCV(userAddress)],
      senderAddress: userAddress,
      network: NETWORK_URL as any,
    });
    return cvToJSON(result);
  } catch (error) {
    console.error('Failed to fetch leaderboard entry:', error);
    return null;
  }
}

/**
 * Fetch the user's achievement NFTs.
 */
export async function getUserAchievements(userAddress: string) {
  try {
    const result = await callReadOnlyFunction({
      contractAddress: NFT_CONTRACT.address,
      contractName: NFT_CONTRACT.name,
      functionName: 'get-user-achievements',
      functionArgs: [principalCV(userAddress)],
      senderAddress: userAddress,
      network: NETWORK_URL as any,
    });
    return cvToJSON(result);
  } catch (error) {
    console.error('Failed to fetch user achievements:', error);
    return null;
  }
}

/**
 * Check if user has a specific topic badge NFT.
 */
export async function hasTopicBadge(userAddress: string, topicId: number) {
  try {
    const result = await callReadOnlyFunction({
      contractAddress: NFT_CONTRACT.address,
      contractName: NFT_CONTRACT.name,
      functionName: 'has-topic-badge',
      functionArgs: [principalCV(userAddress), uintCV(topicId)],
      senderAddress: userAddress,
      network: NETWORK_URL as any,
    });
    return cvToJSON(result);
  } catch (error) {
    console.error('Failed to check topic badge:', error);
    return false;
  }
}
