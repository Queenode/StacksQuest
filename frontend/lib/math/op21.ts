/**
 * @module math/op21
 * Utility function for advanced state calculations
 */
export const computeOp21 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 21;
  return Math.sqrt(Math.abs(variance));
};
