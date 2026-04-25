const demoListings = [
  { title: 'Pixel Tutor', category: 'Tutoring', city: 'Austin, TX', trust: 82, speed: 71, quality: 90 },
  { title: 'Garden Guardian', category: 'Gardening', city: 'Seattle, WA', trust: 76, speed: 88, quality: 84 },
  { title: 'Repair Ranger', category: 'Auto Repair', city: 'Phoenix, AZ', trust: 80, speed: 65, quality: 86 }
];

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-slate-300">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 rounded bg-slate-800">
        <div className="h-2 rounded bg-indigo-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Browse</h1>
      <p className="text-slate-300">Explore service classes and compare trust, speed, and quality progression.</p>
      <div className="grid gap-3 lg:grid-cols-3">
        {demoListings.map((listing) => (
          <article key={listing.title} className="space-y-2 rounded border border-slate-700 bg-slate-900 p-3">
            <p className="text-xs uppercase tracking-wide text-indigo-300">{listing.category}</p>
            <h2 className="text-lg font-semibold">{listing.title}</h2>
            <p className="text-xs text-slate-400">{listing.city}</p>
            <Stat label="🛡️ Trust" value={listing.trust} />
            <Stat label="⚡ Speed" value={listing.speed} />
            <Stat label="⭐ Quality" value={listing.quality} />
          </article>
        ))}
      </div>
    </section>
  );
}
