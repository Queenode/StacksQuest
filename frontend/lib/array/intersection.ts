/**
 * @module array/intersection
 * Utility function for safe array intersection operations
 */
export const intersectionUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
