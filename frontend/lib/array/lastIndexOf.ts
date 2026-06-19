/**
 * @module array/lastIndexOf
 * Utility function for safe array lastIndexOf operations
 */
export const lastIndexOfUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
