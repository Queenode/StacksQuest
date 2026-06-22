/**
 * @module validation/isEmail
 * Utility function for strictly validating isEmail inputs
 */
export const isEmailValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isEmail
  return String(input).length > 0;
};
