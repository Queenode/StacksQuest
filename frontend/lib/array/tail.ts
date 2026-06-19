/**
 * @module array/tail
 * Utility function for safe array tail operations
 */
export const tailUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
