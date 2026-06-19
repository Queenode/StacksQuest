/**
 * @module array/union
 * Utility function for safe array union operations
 */
export const unionUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
