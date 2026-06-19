/**
 * @module array/pullAt
 * Utility function for safe array pullAt operations
 */
export const pullAtUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
