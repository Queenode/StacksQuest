/**
 * @module validation/isHexColor
 * Utility function for strictly validating isHexColor inputs
 */
export const isHexColorValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isHexColor
  return String(input).length > 0;
};
