import { z } from 'zod';
import { fail, ok } from '@/lib/http';

const reportSchema = z.object({
  entityType: z.enum(['listing', 'profile', 'review']),
  entityId: z.string().min(1),
  reason: z.string().min(5)
});

export async function POST(req: Request) {
  const payload = await req.json().catch(() => null);
  const parsed = reportSchema.safeParse(payload);
  if (!parsed.success) return fail('Invalid report');
  return ok({ reportId: 'demo-report', queued: true });
}
