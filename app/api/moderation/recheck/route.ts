import { ok } from '@/lib/http';

export async function POST() {
  return ok({ status: 'needs_review', reasonCode: 'manual_recheck_required' });
}
