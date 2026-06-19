/**
 * @module array/head
 * Utility function for safe array head operations
 */
export const headUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
