/**
 * @module array/compact
 * Utility function for safe array compact operations
 */
export const compactUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
