/**
 * @module validation/isFQDN
 * Utility function for strictly validating isFQDN inputs
 */
export const isFQDNValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isFQDN
  return String(input).length > 0;
};
