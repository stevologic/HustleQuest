import { describe, expect, it } from 'vitest';
import { containsProhibitedContent, mapModerationDecision } from '@/lib/moderation';

describe('moderation', () => {
  it('detects prohibited content', () => {
    expect(containsProhibitedContent('I offer adult sexual services')).toBe(true);
    expect(containsProhibitedContent('I teach guitar lessons')).toBe(false);
  });

  it('maps moderation scores', () => {
    expect(mapModerationDecision(0.95)).toBe('rejected');
    expect(mapModerationDecision(0.75)).toBe('needs_review');
    expect(mapModerationDecision(0.2)).toBe('pending_moderation');
  });
});
