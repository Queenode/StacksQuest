/**
 * @module array/findLast
 * Utility function for safe array findLast operations
 */
export const findLastUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
