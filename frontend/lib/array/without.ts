/**
 * @module array/without
 * Utility function for safe array without operations
 */
export const withoutUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
