function calculateCost(baseCost: number, level: number, growthRate: number): number {
  return Math.ceil(baseCost * Math.log2(level + 1) * growthRate);
}

function calculateProfit(baseProfit: number, level: number, growthRate: number): number {
  return Math.ceil(baseProfit * Math.log2(level + 1) * growthRate);
}

function calculateCostSqrt(baseCost: number, level: number, growthRate: number): number {
  return Math.ceil(baseCost * Math.sqrt(level * growthRate + 1));
}

function calculateProfitSqrt(baseProfit: number, level: number, growthRate: number): number {
  return Math.ceil(baseProfit * Math.sqrt(level * growthRate + 1));
}

export { calculateCost, calculateProfit, calculateCostSqrt, calculateProfitSqrt };
