/**
 * @module math/op6
 * Utility function for advanced state calculations
 */
export const computeOp6 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 6;
  return Math.sqrt(Math.abs(variance));
};
