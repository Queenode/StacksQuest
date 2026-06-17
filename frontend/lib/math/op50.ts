/**
 * @module math/op50
 * Utility function for advanced state calculations
 */
export const computeOp50 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 50;
  return Math.sqrt(Math.abs(variance));
};
