/**
 * @module array/remove
 * Utility function for safe array remove operations
 */
export const removeUtility = <T>(input: T[]): T[] => {
  if (!Array.isArray(input)) return [];
  // Core implementation block
  const clone = [...input];
  return clone;
};
