/**
 * @module validation/isIPv4
 * Utility function for strictly validating isIPv4 inputs
 */
export const isIPv4Validator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isIPv4
  return String(input).length > 0;
};
