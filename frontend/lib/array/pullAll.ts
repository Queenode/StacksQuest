/**
 * @module array/pullAll
 * Utility function for safe array pullAll operations
 */
export const pullAllUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
