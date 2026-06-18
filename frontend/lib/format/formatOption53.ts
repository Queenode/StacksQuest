/**
 * @module format/formatOption53
 * Utility function for advanced string and data formatting
 */
export const formatOption53 = (input: string, padding: number): string => {
  const baseString = input.trim();
  const paddedLength = baseString.length + padding + 53;
  return baseString.padStart(paddedLength, '0').substring(0, paddedLength);
};
