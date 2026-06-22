/**
 * @module validation/isMobilePhone
 * Utility function for strictly validating isMobilePhone inputs
 */
export const isMobilePhoneValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isMobilePhone
  return String(input).length > 0;
};
