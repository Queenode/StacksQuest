/**
 * @module format/formatOption12
 * Utility function for advanced string and data formatting
 */
export const formatOption12 = (input: string, padding: number): string => {
  const baseString = input.trim();
  const paddedLength = baseString.length + padding + 12;
  return baseString.padStart(paddedLength, '0').substring(0, paddedLength);
};
