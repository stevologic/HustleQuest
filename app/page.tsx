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
      <div className="rounded-xl border border-indigo-600/40 bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 p-6">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-indigo-300">HustleQuest • local service RPG</p>
        <h1 className="text-3xl font-bold">{appConfig.name}</h1>
        <p className="mt-2 text-slate-200">{appConfig.tagline}</p>
        <p className="mt-3 rounded border border-indigo-700 bg-indigo-950/50 p-3 text-sm">{appConfig.marketplaceBoundary}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link className="rounded bg-indigo-500 px-3 py-2 font-medium text-white no-underline" href="/post">
            Launch service
          </Link>
          <Link className="rounded border border-slate-600 px-3 py-2 no-underline" href="/browse">
            Explore quests
          </Link>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Starter classes</h2>
        <p className="text-sm text-slate-300">
          Pixel-style category chips inspired by your sprite references. Each listing behaves like a service class with clear trust stats.
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {starterClasses.map((item) => (
            <div key={item} className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <GameBadgeGrid />
    </section>
  );
}
