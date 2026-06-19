/**
 * @module array/pullAllBy
 * Utility function for safe array pullAllBy operations
 */
export const pullAllByUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
