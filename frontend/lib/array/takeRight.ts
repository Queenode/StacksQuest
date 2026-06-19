/**
 * @module array/takeRight
 * Utility function for safe array takeRight operations
 */
export const takeRightUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
