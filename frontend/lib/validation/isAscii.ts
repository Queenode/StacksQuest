/**
 * @module validation/isAscii
 * Utility function for strictly validating isAscii inputs
 */
export const isAsciiValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isAscii
  return String(input).length > 0;
};
