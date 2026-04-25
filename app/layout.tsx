import './globals.css';
import { SiteShell } from '@/components/site-shell';

export const metadata = {
  title: 'HustleQuest',
  description: 'Local-first services listing marketplace'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
