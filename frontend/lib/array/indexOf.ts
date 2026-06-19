/**
 * @module array/indexOf
 * Utility function for safe array indexOf operations
 */
export const indexOfUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
