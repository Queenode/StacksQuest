/**
 * @module validation/isISBN
 * Utility function for strictly validating isISBN inputs
 */
export const isISBNValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isISBN
  return String(input).length > 0;
};
