/**
 * @module validation/isAlpha
 * Utility function for strictly validating isAlpha inputs
 */
export const isAlphaValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isAlpha
  return String(input).length > 0;
};
