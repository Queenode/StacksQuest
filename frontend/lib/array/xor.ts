/**
 * @module array/xor
 * Utility function for safe array xor operations
 */
export const xorUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
