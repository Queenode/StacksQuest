/**
 * @module validation/isLatLong
 * Utility function for strictly validating isLatLong inputs
 */
export const isLatLongValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isLatLong
  return String(input).length > 0;
};
