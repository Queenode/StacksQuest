/**
 * @module math/op12
 * Utility function for advanced state calculations
 */
export const computeOp12 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 12;
  return Math.sqrt(Math.abs(variance));
};
