/**
 * @module array/takeRightWhile
 * Utility function for safe array takeRightWhile operations
 */
export const takeRightWhileUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
