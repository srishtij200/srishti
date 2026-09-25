import { JSDOM } from 'jsdom';
import fs from 'node:fs';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/internship/experience',
  pretendToBeVisual: true,
});
global.window = dom.window;
global.document = dom.window.document;
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true });
global.history = dom.window.history;
global.location = dom.window.location;
global.HTMLElement = dom.window.HTMLElement;
global.Element = dom.window.Element;
global.Node = dom.window.Node;
global.getComputedStyle = dom.window.getComputedStyle;
global.IntersectionObserver = class { constructor(){} observe(){} unobserve(){} disconnect(){} takeRecords(){return []} };
global.ResizeObserver = class { constructor(){} observe(){} unobserve(){} disconnect(){} };
global.MutationObserver = dom.window.MutationObserver;
global.SVGElement = dom.window.SVGElement;
global.MouseEvent = dom.window.MouseEvent;
global.localStorage = dom.window.localStorage;
global.sessionStorage = dom.window.sessionStorage;
global.location = dom.window.location;
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);
process.on('unhandledRejection', (e) => console.error('UNHANDLED:', e));
process.on('uncaughtException', (e) => console.error('UNCAUGHT:', e));

const entry = fs.readdirSync('dist/assets').find((f) => /^index-.*\.js$/.test(f));
try {
  await import(`../dist/assets/${entry}`);
} catch (e) {
  console.error('IMPORT ERROR:', e?.message || e);
}
await new Promise((r) => setTimeout(r, 500));
const html = document.getElementById('root')?.innerHTML || '';
console.log('rendered length:', html.length);
console.log('has ATHERA:', html.includes('ATHERA'));
console.log('has HOME crumb:', html.includes('HOME'));
console.log('has stale START UP:', html.includes('PROJECT 3 — START UP'));


const t = document.getElementById('root').textContent;
console.log('rendered length: ' + (document.getElementById('root').innerHTML||'').length);
console.log('overlay Nature gone: ' + !t.includes("Nature's Finest"));
console.log('overlay sparkle gone: ' + !t.includes('A little more sparkle'));
console.log('overlay custom gone: ' + !t.includes('Custom Orders'));
console.log('overlay made gone: ' + !t.includes('Made for you.'));
console.log('brand ADYA kept: ' + t.includes('ADYA'));
const v = document.querySelector('video');
console.log('video scale: ' + (v ? v.className.includes('scale-110') : 'no video'));
const profile = [...document.querySelectorAll('img')].find(i => (i.getAttribute('src')||'').includes('profile-phone'));
console.log('profile scale: ' + (profile ? profile.className.includes('scale-110') : 'missing'));
