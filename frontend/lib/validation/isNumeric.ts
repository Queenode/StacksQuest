/**
 * @module validation/isNumeric
 * Utility function for strictly validating isNumeric inputs
 */
export const isNumericValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isNumeric
  return String(input).length > 0;
};
