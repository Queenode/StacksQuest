/**
 * @module array/forEachRight
 * Utility function for safe array forEachRight operations
 */
export const forEachRightUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
