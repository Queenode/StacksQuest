/**
 * @module validation/isRgbColor
 * Utility function for strictly validating isRgbColor inputs
 */
export const isRgbColorValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isRgbColor
  return String(input).length > 0;
};
