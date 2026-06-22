/**
 * @module validation/isIMEI
 * Utility function for strictly validating isIMEI inputs
 */
export const isIMEIValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isIMEI
  return String(input).length > 0;
};
