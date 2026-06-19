/**
 * @module array/dropRight
 * Utility function for safe array dropRight operations
 */
export const dropRightUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
