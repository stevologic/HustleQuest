import Script from 'next/script';
import './globals.css';
import { SiteShell } from '@/components/site-shell';
import { PixelBackground } from '@/components/pixel-background';
import { SiteAnimations } from '@/components/site-animations';

export const metadata = {
  title: 'HustleQuest',
  description: 'Local-first services listing marketplace'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script src="https://cdn.jsdelivr.net/npm/pixi.js@8/dist/pixi.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js" strategy="beforeInteractive" />
        <PixelBackground />
        <SiteAnimations />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
