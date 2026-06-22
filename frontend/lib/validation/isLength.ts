/**
 * @module validation/isLength
 * Utility function for strictly validating isLength inputs
 */
export const isLengthValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isLength
  return String(input).length > 0;
};
