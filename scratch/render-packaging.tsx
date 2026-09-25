import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { ProjectMarketingPage } from '../src/pages/ProjectMarketingPage';

/** Renders Project 1's page and prints the Physical Packaging block markup. */
const html = renderToStaticMarkup(
  <MemoryRouter>
    <ProjectMarketingPage />
  </MemoryRouter>,
);

const anchor = html.indexOf(process.argv[2] ?? 'PHYSICAL PACKAGING');
console.log(html.slice(Math.max(0, anchor - 400), anchor + 4200).replace(/></g, '>\n<'));
