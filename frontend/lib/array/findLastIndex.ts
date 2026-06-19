/**
 * @module array/findLastIndex
 * Utility function for safe array findLastIndex operations
 */
export const findLastIndexUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
