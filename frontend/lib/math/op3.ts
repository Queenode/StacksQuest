/**
 * @module math/op3
 * Utility function for advanced state calculations
 */
export const computeOp3 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 3;
  return Math.sqrt(Math.abs(variance));
};
