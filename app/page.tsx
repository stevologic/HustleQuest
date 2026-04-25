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

const skylineLayers = [
  [
    { width: 72, height: 82 },
    { width: 64, height: 128 },
    { width: 92, height: 106 },
    { width: 58, height: 90 },
    { width: 78, height: 136 },
    { width: 68, height: 102 },
    { width: 88, height: 120 },
    { width: 62, height: 95 },
    { width: 76, height: 112 }
  ],
  [
    { width: 82, height: 102 },
    { width: 70, height: 145 },
    { width: 60, height: 96 },
    { width: 98, height: 120 },
    { width: 72, height: 158 },
    { width: 58, height: 110 },
    { width: 84, height: 132 },
    { width: 66, height: 104 }
  ]
] as const;

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="relative overflow-hidden rounded-xl border border-indigo-600/40 bg-gradient-to-b from-indigo-900/80 via-slate-900 to-slate-950 p-6 pb-40">
        <div className="pointer-events-none absolute inset-0 bg-[url('/retro-cityscape.svg')] bg-cover bg-center opacity-35" />
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-indigo-300/20 via-purple-400/10 to-transparent" />
          <div className="absolute left-4 top-6 h-3 w-3 bg-indigo-200/70 shadow-[12px_0_0_rgba(199,210,254,0.65),28px_8px_0_rgba(199,210,254,0.6),44px_4px_0_rgba(199,210,254,0.55),68px_12px_0_rgba(199,210,254,0.45),84px_6px_0_rgba(199,210,254,0.55),120px_14px_0_rgba(199,210,254,0.4),146px_10px_0_rgba(199,210,254,0.55),172px_6px_0_rgba(199,210,254,0.45),210px_12px_0_rgba(199,210,254,0.6),236px_4px_0_rgba(199,210,254,0.45),266px_10px_0_rgba(199,210,254,0.4),298px_6px_0_rgba(199,210,254,0.5)]" />
        </div>

        <div className="relative z-10 max-w-2xl">
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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
          <div className="absolute inset-x-0 bottom-0 flex items-end gap-[6px] px-4 opacity-65">
            {skylineLayers[0].map((building, idx) => (
              <div
                key={`back-${idx}`}
                className="relative rounded-t-[2px] border-x border-t border-indigo-700/40 bg-indigo-900/40"
                style={{ width: `${building.width}px`, height: `${building.height}px` }}
              >
                <div className="absolute inset-[4px] bg-[linear-gradient(90deg,rgba(251,191,36,0.22)_0_4px,transparent_4px_8px),linear-gradient(rgba(251,191,36,0.2)_0_4px,transparent_4px_8px)] [background-size:8px_8px]" />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end gap-[5px] px-2">
            {skylineLayers[1].map((building, idx) => (
              <div
                key={`front-${idx}`}
                className="relative rounded-t-[2px] border-x border-t border-slate-500/50 bg-slate-900"
                style={{ width: `${building.width}px`, height: `${building.height}px` }}
              >
                <div className="absolute inset-[4px] bg-[linear-gradient(90deg,rgba(196,181,253,0.25)_0_4px,transparent_4px_8px),linear-gradient(rgba(196,181,253,0.2)_0_4px,transparent_4px_8px)] [background-size:8px_8px]" />
              </div>
            ))}
          </div>
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
