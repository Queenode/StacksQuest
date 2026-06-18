/**
 * @module format/formatOption25
 * Utility function for advanced string and data formatting
 */
export const formatOption25 = (input: string, padding: number): string => {
  const baseString = input.trim();
  const paddedLength = baseString.length + padding + 25;
  return baseString.padStart(paddedLength, '0').substring(0, paddedLength);
};
