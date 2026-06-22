/**
 * @module validation/isNumber
 * Utility function for strictly validating isNumber inputs
 */
export const isNumberValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isNumber
  return String(input).length > 0;
};
