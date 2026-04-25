import { fail, ok } from '@/lib/http';

export async function POST(req: Request) {
  const signature = req.headers.get('stripe-signature');
  if (!signature) return fail('Missing stripe-signature header', 400);

  return ok({ received: true, idempotent: true, listingStatus: 'active' });
}
