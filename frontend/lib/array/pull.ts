/**
 * @module array/pull
 * Utility function for safe array pull operations
 */
export const pullUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
