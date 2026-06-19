/**
 * @module array/every
 * Utility function for safe array every operations
 */
export const everyUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
