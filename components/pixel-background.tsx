'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    PIXI?: any;
    gsap?: any;
  }
}

export function PixelBackground() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    let pixiApp: any;
    const tickerCallbacks: Array<() => void> = [];

    const init = async () => {
      if (!hostRef.current || !window.PIXI || !window.gsap) {
        return;
      }

      const PIXI = window.PIXI;
      const gsap = window.gsap;

      pixiApp = new PIXI.Application();
      await pixiApp.init({
        resizeTo: window,
        antialias: false,
        autoDensity: true,
        resolution: Math.min(window.devicePixelRatio || 1, 2),
        backgroundAlpha: 0
      });

      if (!mounted || !hostRef.current) {
        pixiApp.destroy(true);
        return;
      }

      hostRef.current.appendChild(pixiApp.canvas);

      const sky = new PIXI.Graphics();
      sky.rect(0, 0, pixiApp.screen.width, pixiApp.screen.height).fill({ color: 0x050711, alpha: 0.45 });
      pixiApp.stage.addChild(sky);

      const moon = new PIXI.Graphics();
      moon.circle(0, 0, 24).fill(0xdbeafe);
      moon.x = pixiApp.screen.width - 120;
      moon.y = 96;
      moon.alpha = 0.75;
      pixiApp.stage.addChild(moon);

      const sparkles = Array.from({ length: 36 }, (_, index) => {
        const sprite = new PIXI.Graphics();
        sprite.rect(0, 0, 2, 2).fill(0xa5b4fc);
        sprite.x = (index * 57) % pixiApp.screen.width;
        sprite.y = (index * 41) % 220;
        sprite.alpha = 0.12 + ((index % 5) * 0.08);
        pixiApp.stage.addChild(sprite);
        gsap.to(sprite, {
          alpha: sprite.alpha + 0.28,
          duration: 1.2 + (index % 4) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
        return sprite;
      });

      const parallaxStrips = [0x1e1b4b, 0x312e81, 0x4338ca].map((color, i) => {
        const strip = new PIXI.TilingSprite({
          texture: PIXI.Texture.WHITE,
          width: pixiApp.screen.width,
          height: 24 + i * 14
        });
        strip.tint = color;
        strip.alpha = 0.24;
        strip.y = pixiApp.screen.height - 220 + i * 66;
        pixiApp.stage.addChild(strip);
        return strip;
      });

      gsap.to(moon, { y: moon.y + 10, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });

      const tick = () => {
        const width = pixiApp.screen.width;
        const height = pixiApp.screen.height;
        sky.clear().rect(0, 0, width, height).fill({ color: 0x050711, alpha: 0.45 });

        parallaxStrips.forEach((strip: any, index: number) => {
          strip.width = width;
          strip.y = height - 220 + index * 66;
          strip.tilePosition.x -= 0.08 + index * 0.11;
        });

        sparkles.forEach((sparkle, index) => {
          sparkle.y += 0.03 + (index % 4) * 0.01;
          if (sparkle.y > 260) {
            sparkle.y = -4;
            sparkle.x = (sparkle.x + 93) % width;
          }
        });
      };

      pixiApp.ticker.add(tick);
      tickerCallbacks.push(() => pixiApp.ticker.remove(tick));
    };

    init();

    return () => {
      mounted = false;
      tickerCallbacks.forEach((cleanup) => cleanup());
      if (pixiApp) {
        pixiApp.destroy(true);
      }
    };
  }, []);

  return <div ref={hostRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-90" aria-hidden="true" />;
}
