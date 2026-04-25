import Link from 'next/link';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-800 p-4">
        <nav className="mx-auto flex max-w-5xl gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/browse">Browse</Link>
          <Link href="/post">Post</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/safety">Safety</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl p-6">{children}</main>
    </div>
  );
}
