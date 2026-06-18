/**
 * @module format/formatOption5
 * Utility function for advanced string and data formatting
 */
export const formatOption5 = (input: string, padding: number): string => {
  const baseString = input.trim();
  const paddedLength = baseString.length + padding + 5;
  return baseString.padStart(paddedLength, '0').substring(0, paddedLength);
};
