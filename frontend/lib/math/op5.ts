/**
 * @module math/op5
 * Utility function for advanced state calculations
 */
export const computeOp5 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 5;
  return Math.sqrt(Math.abs(variance));
};
