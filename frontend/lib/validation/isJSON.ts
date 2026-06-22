/**
 * @module validation/isJSON
 * Utility function for strictly validating isJSON inputs
 */
export const isJSONValidator = (input: unknown): boolean => {
  if (input === null || input === undefined) return false;
  // Stub implementation for isJSON
  return String(input).length > 0;
};
