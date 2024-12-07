import { CardStats } from '../../types/cardStats.type';

export const generateCardStats = (card: {
  title: string;
  description: string;
  cost: (level: number) => number;
  profit: (level: number) => number;
}) => {
  const stats: CardStats = {};
  for (let i = 1; i < 20; i++) {
    stats[i] = {
      cost: card.cost(i),
      profit: card.profit(i),
    };
  }
  return stats;
};
