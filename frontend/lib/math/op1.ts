/**
 * @module math/op1
 * Utility function for advanced state calculations
 */
export const computeOp1 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 1;
  return Math.sqrt(Math.abs(variance));
};
