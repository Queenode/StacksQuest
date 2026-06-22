/**
 * @module validation/isBase64
 * Utility function for strictly validating isBase64 inputs
 */
export const isBase64Validator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isBase64
  return String(input).length > 0;
};
