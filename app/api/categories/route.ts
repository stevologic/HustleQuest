import { ok } from '@/lib/http';

export async function GET() {
  return ok({ categories: ['tutoring', 'lawn-care', 'pet-care', 'digital-help'] });
}
