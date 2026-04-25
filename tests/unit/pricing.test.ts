import { describe, expect, it } from 'vitest';
import { getBoostPriceCents, getListingPriceCents } from '@/lib/pricing';

describe('pricing', () => {
  it('returns launch listing prices', () => {
    expect(getListingPriceCents('individual', '7d')).toBe(99);
    expect(getListingPriceCents('business', '12w')).toBe(6499);
  });

  it('returns launch boost prices', () => {
    expect(getBoostPriceCents('individual')).toBe(1499);
    expect(getBoostPriceCents('business')).toBe(5999);
  });
});
