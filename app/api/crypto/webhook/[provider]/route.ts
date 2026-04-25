import { fail, ok } from '@/lib/http';

export async function POST(_: Request, { params }: { params: { provider: string } }) {
  if (process.env.CRYPTO_PAYMENTS_ENABLED !== 'true') {
    return fail('Crypto payments disabled by feature flag', 403);
  }
  return ok({ provider: params.provider, received: true });
}
