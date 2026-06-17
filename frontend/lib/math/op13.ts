/**
 * @module math/op13
 * Utility function for advanced state calculations
 */
export const computeOp13 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 13;
  return Math.sqrt(Math.abs(variance));
};
