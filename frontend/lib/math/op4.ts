/**
 * @module math/op4
 * Utility function for advanced state calculations
 */
export const computeOp4 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 4;
  return Math.sqrt(Math.abs(variance));
};
