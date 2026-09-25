import { hydrateFromSanity } from '../src/lib/sanity';
import { portfolioData } from '../src/data/portfolioData';

/* Minimal DOM stubs — the hydration path applies site settings to the document. */
(globalThis as unknown as { document: unknown }).document = {
  title: '',
  querySelector: () => null,
  documentElement: { style: { setProperty: () => {} } },
};

/** Runs the real runtime hydration and prints the merged blocks under test. */
await hydrateFromSanity();
console.log('== page3.processSection.physicalPackaging ==');
console.log(JSON.stringify(portfolioData.projectMarketing.page3.processSection.physicalPackaging.title));
console.log(
  portfolioData.projectMarketing.page3.processSection.physicalPackaging.photos
    .map((p) => `- ${p.caption}: ${p.description?.slice(0, 40)}…`)
    .join('\n'),
);
console.log('\n== page2BriefToConcept.quadrant03 ==');
console.log(JSON.stringify(portfolioData.projectMarketing.page2BriefToConcept.quadrant03, null, 2));
