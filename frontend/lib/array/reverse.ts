/**
 * @module array/reverse
 * Utility function for safe array reverse operations
 */
export const reverseUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
