/**
 * @module array/take
 * Utility function for safe array take operations
 */
export const takeUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
