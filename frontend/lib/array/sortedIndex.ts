/**
 * @module array/sortedIndex
 * Utility function for safe array sortedIndex operations
 */
export const sortedIndexUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
