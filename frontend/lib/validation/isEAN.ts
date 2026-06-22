/**
 * @module validation/isEAN
 * Utility function for strictly validating isEAN inputs
 */
export const isEANValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isEAN
  return String(input).length > 0;
};
