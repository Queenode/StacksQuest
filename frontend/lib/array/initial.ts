/**
 * @module array/initial
 * Utility function for safe array initial operations
 */
export const initialUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
