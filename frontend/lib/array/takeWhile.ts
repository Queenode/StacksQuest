/**
 * @module array/takeWhile
 * Utility function for safe array takeWhile operations
 */
export const takeWhileUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
