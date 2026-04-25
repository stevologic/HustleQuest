import Image from 'next/image';
import Link from 'next/link';
import { GameBadgeGrid } from '@/components/game-badge-grid';
import { appConfig } from '@/lib/config';

const starterClasses = [
  'Web Design',
  'Graphic Design',
  'Music Lessons',
  'Personal Training',
  'Photography',
  'Gardening',
  'Auto Repair',
  'Tutoring'
];

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div data-anim="hero" className="relative overflow-hidden rounded-xl border border-indigo-600/40 bg-gradient-to-b from-indigo-900/80 via-slate-900 to-slate-950 p-6 pb-36">
        <Image
          src="/world-class/hero-market-skyline.svg"
          alt="Polished city skyline artwork for HustleQuest"
          fill
          priority
          className="pointer-events-none object-cover opacity-45"
        />

        <div className="relative z-10 max-w-2xl">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-indigo-300">HustleQuest • local service RPG</p>
          <h1 className="text-3xl font-bold">{appConfig.name}</h1>
          <p className="mt-2 text-slate-200">{appConfig.tagline}</p>
          <p className="mt-3 rounded border border-indigo-700 bg-indigo-950/50 p-3 text-sm">{appConfig.marketplaceBoundary}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link data-anim="pulse" className="rounded bg-indigo-500 px-3 py-2 font-medium text-white no-underline" href="/post">
              Launch service
            </Link>
            <Link className="rounded border border-slate-600 px-3 py-2 no-underline" href="/browse">
              Explore quests
            </Link>
          </div>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Starter classes</h2>
        <p className="text-sm text-slate-300">
          Updated visual system with premium hero art, iconography, and sprite-pack framing so listings feel like a world-class game marketplace.
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {starterClasses.map((item) => (
            <div key={item} data-anim="card" className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-xl border border-slate-700/70 bg-slate-900/80 p-4">
        <h2 className="text-lg font-semibold text-indigo-200">World-class visual kit</h2>
        <p className="text-sm text-slate-300">A polished icon strip and sprite composition tuned for accessible contrast and in-game UX motifs.</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
            <Image src="/world-class/icon-set.svg" alt="Marketplace icon strip" width={512} height={128} className="h-auto w-full" />
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
            <Image src="/world-class/sprite-pack.svg" alt="Marketplace sprite pack" width={768} height={256} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <GameBadgeGrid />
    </section>
  );
}
