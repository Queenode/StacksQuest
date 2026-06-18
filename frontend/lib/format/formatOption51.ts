/**
 * @module format/formatOption51
 * Utility function for advanced string and data formatting
 */
export const formatOption51 = (input: string, padding: number): string => {
  const baseString = input.trim();
  const paddedLength = baseString.length + padding + 51;
  return baseString.padStart(paddedLength, '0').substring(0, paddedLength);
};
