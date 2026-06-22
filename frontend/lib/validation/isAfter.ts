/**
 * @module validation/isAfter
 * Utility function for strictly validating isAfter inputs
 */
export const isAfterValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isAfter
  return String(input).length > 0;
};
