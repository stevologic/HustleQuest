import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.featureFlag.upsert({
    where: { key: 'CRYPTO_PAYMENTS_ENABLED' },
    update: {},
    create: { key: 'CRYPTO_PAYMENTS_ENABLED', enabled: false, description: 'Crypto adapter disabled by default' }
  });

  await prisma.pricePlan.createMany({
    data: [
      { code: 'IND_7D', label: 'Individual 7 days', priceCents: 99, durationDays: 7, posterType: 'individual' },
      { code: 'IND_4W', label: 'Individual 4 weeks', priceCents: 349, durationDays: 28, posterType: 'individual' },
      { code: 'IND_12W', label: 'Individual 12 weeks', priceCents: 899, durationDays: 84, posterType: 'individual' },
      { code: 'BUS_7D', label: 'Business 7 days', priceCents: 799, durationDays: 7, posterType: 'business' },
      { code: 'BUS_4W', label: 'Business 4 weeks', priceCents: 2499, durationDays: 28, posterType: 'business' },
      { code: 'BUS_12W', label: 'Business 12 weeks', priceCents: 6499, durationDays: 84, posterType: 'business' }
    ],
    skipDuplicates: true
  });
}

main().finally(() => prisma.$disconnect());
