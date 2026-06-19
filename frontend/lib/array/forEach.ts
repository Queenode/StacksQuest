/**
 * @module array/forEach
 * Utility function for safe array forEach operations
 */
export const forEachUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
