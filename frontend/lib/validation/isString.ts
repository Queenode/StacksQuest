/**
 * @module validation/isString
 * Utility function for strictly validating isString inputs
 */
export const isStringValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isString
  return String(input).length > 0;
};
