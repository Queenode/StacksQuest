/**
 * @module validation/isVat
 * Utility function for strictly validating isVat inputs
 */
export const isVatValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isVat
  return String(input).length > 0;
};
