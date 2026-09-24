import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import fs from 'node:fs';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
const projectId = process.env.VITE_SANITY_PROJECT_ID!;
const token = process.env.SANITY_TOKEN;
if (!projectId || !token) { console.error('missing creds'); process.exit(1); }
const c = createClient({ projectId, dataset: process.env.VITE_SANITY_DATASET || 'production', apiVersion: '2024-01-01', token, useCdn: false });
const DRY = process.argv.includes('--dry');

const TILES = [
  { file: 'social-grid-1.jpeg', overlay: "Nature's Finest", brand: 'ADYA' },
  { file: 'social-grid-2.jpeg', overlay: 'A little more sparkle' },
  { file: 'social-grid-3.jpeg', overlay: 'Custom Orders', brand: 'ADYA' },
  { file: 'social-grid-4.jpeg', overlay: 'Made for you.', brand: 'ADYA' },
];
const BASE = 'public/portfolio-assets/internship/';

const doc = await c.fetch(`*[_type=='internship'][0]{_id}`);
if (!doc?._id) { console.error('no internship doc'); process.exit(1); }

if (DRY) {
  console.log('would upload:', TILES.map(t => t.file).join(', '), '+ profile-phone.jpeg');
  console.log('would set: reelVideo=/portfolio-assets/internship/social-reel.mp4, reelOverlay=Everyday elegance, profileImage, tiles[4]');
  process.exit(0);
}

const upload = async (f: string) => (await c.assets.upload('image', fs.createReadStream(BASE + f), { filename: f }))._id;
const tilesOut: any[] = [];
let i = 0;
for (const t of TILES) {
  const ref = await upload(t.file);
  const key = `tile${i}${Date.now().toString(36)}`;
  tilesOut.push({ _key: key, _type: 'object', overlay: t.overlay, ...(t.brand ? { brand: t.brand } : {}), image: { _type: 'image', asset: { _type: 'reference', _ref: ref } } });
  console.log('uploaded', t.file, '->', ref);
  i++;
}
const profileRef = await upload('profile-phone.jpeg');
console.log('uploaded profile-phone.jpeg ->', profileRef);

const entries: any = {
  'page1SocialMedia.showcase.reelVideo': '/portfolio-assets/internship/social-reel.mp4',
  'page1SocialMedia.showcase.reelOverlay': 'Everyday elegance',
  'page1SocialMedia.showcase.profileImage': { _type: 'image', asset: { _type: 'reference', _ref: profileRef } },
  'page1SocialMedia.showcase.tiles': tilesOut,
};
for (const [k, v] of Object.entries(entries)) console.log('set', k);
await c.patch(doc._id).set(entries).commit();

const after = await c.fetch(`*[_type=='internship'][0].page1SocialMedia.showcase{reelVideo, reelOverlay, "profile": profileImage.asset._ref, tiles[]{overlay, brand, "img": image.asset._ref}}`);
console.log(JSON.stringify(after, null, 2));
