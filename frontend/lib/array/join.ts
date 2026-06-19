/**
 * @module array/join
 * Utility function for safe array join operations
 */
export const joinUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
