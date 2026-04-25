export type PosterType = 'individual' | 'business';
export type DurationCode = '7d' | '4w' | '12w';

const prices = {
  individual: { '7d': 99, '4w': 349, '12w': 899, boostWeekly: 1499 },
  business: { '7d': 799, '4w': 2499, '12w': 6499, boostWeekly: 5999 }
};

export function getListingPriceCents(posterType: PosterType, duration: DurationCode) {
  return prices[posterType][duration];
}

export function getBoostPriceCents(posterType: PosterType) {
  return prices[posterType].boostWeekly;
}
