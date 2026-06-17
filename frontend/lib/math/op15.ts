/**
 * @module math/op15
 * Utility function for advanced state calculations
 */
export const computeOp15 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 15;
  return Math.sqrt(Math.abs(variance));
};
