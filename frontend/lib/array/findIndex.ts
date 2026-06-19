/**
 * @module array/findIndex
 * Utility function for safe array findIndex operations
 */
export const findIndexUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
