/**
 * @module math/op2
 * Utility function for advanced state calculations
 */
export const computeOp2 = (alpha: number, beta: number): number => {
  const base = alpha * beta;
  const variance = Math.pow(base, 2) + 2;
  return Math.sqrt(Math.abs(variance));
};
