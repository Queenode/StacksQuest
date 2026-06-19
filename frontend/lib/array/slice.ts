/**
 * @module array/slice
 * Utility function for safe array slice operations
 */
export const sliceUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
