const badgeSeeds = [
  { key: 'trust', label: 'Trust', icon: '🛡️', description: 'Verification and safe behavior.' },
  { key: 'speed', label: 'Speed', icon: '⚡', description: 'Fast responses and on-time delivery.' },
  { key: 'quality', label: 'Quality', icon: '⭐', description: 'Strong ratings and repeat clients.' },
  { key: 'achievement', label: 'Achievement', icon: '🏆', description: 'Milestones and earned progression.' },
  { key: 'premium', label: 'Premium', icon: '💎', description: 'Business-tier tooling and visibility.' },
  { key: 'verified', label: 'Verified', icon: '✅', description: 'Clear trust signals, no guarantees.' },
  { key: 'goal', label: 'Goal', icon: '🎯', description: 'Category goals and weekly quests.' },
  { key: 'messages', label: 'Support', icon: '💬', description: 'Priority support and quick updates.' }
];

export function GameBadgeGrid() {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Progress & badges</h2>
      <p className="text-sm text-slate-300">
        Pixel-inspired progression system modeled after your sprite references.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {badgeSeeds.map((badge) => (
          <article
            key={badge.key}
            className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 shadow-sm shadow-indigo-900/20"
          >
            <div className="mb-1 text-2xl" aria-hidden>
              {badge.icon}
            </div>
            <h3 className="font-medium">{badge.label}</h3>
            <p className="text-xs text-slate-400">{badge.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
