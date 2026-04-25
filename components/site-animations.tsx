'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gsap?: any;
  }
}

export function SiteAnimations() {
  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) {
      return;
    }

    const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });
    timeline
      .from('[data-anim="nav-item"]', {
        y: -16,
        opacity: 0,
        duration: 0.45,
        stagger: 0.05
      })
      .from(
        '[data-anim="hero"]',
        {
          y: 20,
          opacity: 0,
          duration: 0.55
        },
        '-=0.2'
      )
      .from(
        '[data-anim="card"], main > section, main [data-animate-in]',
        {
          y: 16,
          opacity: 0,
          duration: 0.4,
          stagger: 0.04
        },
        '-=0.25'
      );

    gsap.to('[data-anim="pulse"]', {
      scale: 1.015,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return null;
}
