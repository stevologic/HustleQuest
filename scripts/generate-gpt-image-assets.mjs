#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.GPT_IMAGE_MODEL ?? 'gpt-image-1';

if (!apiKey) {
  console.error('Missing OPENAI_API_KEY.');
  process.exit(1);
}

const outputDir = path.resolve(process.cwd(), 'public/world-class');

const prompts = [
  {
    fileName: 'hero-market-skyline.png',
    prompt:
      'Ultra polished cyber-retro city skyline at night, service marketplace theme, pixel-inspired but modern, soft neon indigo palette, cinematic composition, empty center for headline text, no logos, no words.'
  },
  {
    fileName: 'sprite-pack.png',
    prompt:
      'Cohesive 2D sprite sheet for a gamified services marketplace app: badges, XP coins, trust shield, notification icons, marketplace stalls, clean transparent background, consistent art direction.'
  },
  {
    fileName: 'icon-set.png',
    prompt:
      'Premium icon set for freelance services game UI: analytics, escrow lock, verified profile, quests, chat support, rewards chest. Rounded-square style, vibrant but accessible contrast, transparent background.'
  }
];

const endpoint = 'https://api.openai.com/v1/images/generations';

async function generateAsset({ fileName, prompt }) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      prompt,
      size: '1536x1024',
      quality: 'high',
      output_format: 'png'
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Image generation failed for ${fileName}: ${response.status} ${body}`);
  }

  const payload = await response.json();
  const base64 = payload?.data?.[0]?.b64_json;

  if (!base64) {
    throw new Error(`No image payload returned for ${fileName}.`);
  }

  const imageBuffer = Buffer.from(base64, 'base64');
  const destination = path.join(outputDir, fileName);
  await writeFile(destination, imageBuffer);
  console.log(`Generated ${destination}`);
}

await mkdir(outputDir, { recursive: true });

for (const promptConfig of prompts) {
  await generateAsset(promptConfig);
}

console.log('All world-class assets generated.');
