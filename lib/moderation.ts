import { prohibitedServices } from '@/lib/policies';

export function containsProhibitedContent(text: string): boolean {
  const normalized = text.toLowerCase();
  return prohibitedServices.some((term) => normalized.includes(term));
}

export function mapModerationDecision(score: number) {
  if (score >= 0.9) return 'rejected';
  if (score >= 0.7) return 'needs_review';
  return 'pending_moderation';
}
