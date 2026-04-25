import { z } from 'zod';
import { fail, ok } from '@/lib/http';

const reviewSchema = z.object({
  listingId: z.string(),
  rating: z.number().min(1).max(5),
  text: z.string().min(5),
  disclosure: z.string().min(2)
});

export async function POST(req: Request) {
  const payload = await req.json().catch(() => null);
  const parsed = reviewSchema.safeParse(payload);
  if (!parsed.success) return fail('Invalid review');
  return ok({ accepted: true, verification: 'verified_contact_required' });
}
