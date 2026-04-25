import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Browse' },
  { href: '/post', label: 'Post' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/safety', label: 'Safety' },
  { href: '/dashboard', label: 'Dashboard' }
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-indigo-800/30 bg-slate-950/80 p-4 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl flex-wrap gap-4 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} data-anim="nav-item" className="rounded px-2 py-1 transition hover:bg-indigo-500/20">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-5xl p-6">{children}</main>
    </div>
  );
}
