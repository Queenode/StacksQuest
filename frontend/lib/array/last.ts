/**
 * @module array/last
 * Utility function for safe array last operations
 */
export const lastUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
