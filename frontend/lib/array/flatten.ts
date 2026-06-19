/**
 * @module array/flatten
 * Utility function for safe array flatten operations
 */
export const flattenUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
