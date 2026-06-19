/**
 * @module array/first
 * Utility function for safe array first operations
 */
export const firstUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
