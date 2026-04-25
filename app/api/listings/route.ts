import { z } from 'zod';
import { fail, ok } from '@/lib/http';

const schema = z.object({
  title: z.string().min(3),
  description: z.string().min(20),
  posterType: z.enum(['individual', 'business']),
  ageConfirmed: z.literal(true)
});

export async function POST(req: Request) {
  const payload = await req.json().catch(() => null);
  const parsed = schema.safeParse(payload);
  if (!parsed.success) return fail('Invalid listing payload');

  return ok({ status: 'pending_payment', listingId: 'demo-listing-id' });
}
