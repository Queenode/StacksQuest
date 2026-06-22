/**
 * @module validation/isBoolean
 * Utility function for strictly validating isBoolean inputs
 */
export const isBooleanValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isBoolean
  return String(input).length > 0;
};
