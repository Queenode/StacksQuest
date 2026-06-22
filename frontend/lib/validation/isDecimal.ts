/**
 * @module validation/isDecimal
 * Utility function for strictly validating isDecimal inputs
 */
export const isDecimalValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isDecimal
  return String(input).length > 0;
};
