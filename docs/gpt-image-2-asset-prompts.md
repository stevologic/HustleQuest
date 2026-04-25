# GPT Image asset prompts for HustleQuest visuals

Use these prompts with the generation script (`npm run assets:generate:gpt-image`) to produce polished, cohesive visuals for the marketplace.

## Prompt set

1. **Hero skyline (`hero-market-skyline.png`)**
   - "Ultra polished cyber-retro city skyline at night, service marketplace theme, pixel-inspired but modern, soft neon indigo palette, cinematic composition, empty center for headline text, no logos, no words."

2. **Sprite pack (`sprite-pack.png`)**
   - "Cohesive 2D sprite sheet for a gamified services marketplace app: badges, XP coins, trust shield, notification icons, marketplace stalls, clean transparent background, consistent art direction."

3. **Icon set (`icon-set.png`)**
   - "Premium icon set for freelance services game UI: analytics, escrow lock, verified profile, quests, chat support, rewards chest. Rounded-square style, vibrant but accessible contrast, transparent background."

## Notes

- Set `OPENAI_API_KEY` in your shell before running generation.
- Optionally set `GPT_IMAGE_MODEL` if your account exposes a newer model ID (for example a GPT Image 2 variant).
- The script writes outputs into `public/world-class/` so they are immediately available to Next.js static serving.
