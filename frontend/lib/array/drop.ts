/**
 * @module array/drop
 * Utility function for safe array drop operations
 */
export const dropUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
