/**
 * @module array/map
 * Utility function for safe array map operations
 */
export const mapUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
