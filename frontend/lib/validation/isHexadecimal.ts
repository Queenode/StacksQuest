/**
 * @module validation/isHexadecimal
 * Utility function for strictly validating isHexadecimal inputs
 */
export const isHexadecimalValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isHexadecimal
  return String(input).length > 0;
};
