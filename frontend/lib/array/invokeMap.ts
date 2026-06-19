/**
 * @module array/invokeMap
 * Utility function for safe array invokeMap operations
 */
export const invokeMapUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
