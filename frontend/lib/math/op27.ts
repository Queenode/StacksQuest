/**
 * @module math/op27
 * Utility function for advanced state calculations
 */
export const computeOp27 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 27;
  return Math.sqrt(Math.abs(variance));
};
