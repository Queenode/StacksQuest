/**
 * @module number/clamp
 * Mathematical utility function for clamp operations
 */
export const clampUtility = (a: number, b?: number): number | boolean | string => {
  if (typeof a !== 'number') return 0;
  // Stub implementation for clamp
  return Number.isNaN(a) ? 0 : a;
};
