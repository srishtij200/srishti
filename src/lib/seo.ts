export const SITE_URL = 'https://srishti-jain.vercel.app';
export const SITE_NAME = 'Srishti Jain Portfolio';
export const SOCIAL_IMAGE_PATH = '/og-image.png';
export const SOCIAL_IMAGE_URL = `${SITE_URL}${SOCIAL_IMAGE_PATH}`;
export const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large';
export const NOT_FOUND_ROBOTS = 'noindex, follow';

export type SeoImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogType: 'website' | 'profile';
  image: SeoImage;
  breadcrumb?: Array<{ name: string; path: string }>;
  creativeWork?: {
    name: string;
    description: string;
  };
};

export const socialImage: SeoImage = {
  url: SOCIAL_IMAGE_URL,
  alt: 'Srishti Jain — fashion, marketing and visual merchandising portfolio',
  width: 1200,
  height: 630,
};

const image = socialImage;
const canonical = (path: string) => new URL(path, `${SITE_URL}/`).toString();

export const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    path: '/',
    title: 'Srishti Jain — Fashion Marketing & Visual Merchandising',
    description: 'Explore Srishti Jain’s fashion marketing, visual merchandising, e-commerce and consumer research portfolio, projects and internship experience.',
    canonical: canonical('/'),
    robots: DEFAULT_ROBOTS,
    ogType: 'website',
    image,
  },
  '/internship/experience': {
    path: '/internship/experience',
    title: 'Aadiya Jewels Marketing Internship | Srishti Jain',
    description: 'Srishti Jain’s Aadiya Jewels internship covering social content production, product listings, catalogue management and Shopify merchandising.',
    canonical: canonical('/internship/experience'),
    robots: DEFAULT_ROBOTS,
    ogType: 'profile',
    image,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Internship Experience', path: '/internship/experience' },
    ],
  },
  '/internship/learnings': {
    path: '/internship/learnings',
    title: 'Marketing & E-Commerce Internship Learnings — Srishti Jain',
    description: 'Key lessons from Srishti Jain’s Aadiya Jewels internship in creative content production, social media, e-commerce operations, catalogue management and teamwork.',
    canonical: canonical('/internship/learnings'),
    robots: DEFAULT_ROBOTS,
    ogType: 'profile',
    image,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Internship Experience', path: '/internship/experience' },
      { name: 'Learnings', path: '/internship/learnings' },
    ],
  },
  '/projects/marketing': {
    path: '/projects/marketing',
    title: 'UNIQLO Fragrance Marketing Case Study — Srishti Jain',
    description: 'A marketing strategy and product design case study extending UNIQLO LifeWear into an accessible fragrance collection through research, branding and packaging.',
    canonical: canonical('/projects/marketing'),
    robots: DEFAULT_ROBOTS,
    ogType: 'website',
    image,
    creativeWork: {
      name: 'A New Dimension of Life Wear: UNIQLO Fragrance',
      description: 'Strategic marketing proposal and fragrance packaging concept for UNIQLO.',
    },
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'UNIQLO Fragrance', path: '/projects/marketing' },
    ],
  },
  '/projects/visual-merchandising': {
    path: '/projects/visual-merchandising',
    title: 'Cover Story Future Florals VM Project — Srishti Jain',
    description: 'A future florals visual merchandising concept for Cover Story using iridescent materials, sculptural flowers and a spring-summer retail narrative.',
    canonical: canonical('/projects/visual-merchandising'),
    robots: DEFAULT_ROBOTS,
    ogType: 'website',
    image,
    creativeWork: {
      name: 'Future Florals — Visual Merchandising Concept',
      description: 'Cover Story spring/summer visual merchandising and in-store experience concept.',
    },
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Future Florals', path: '/projects/visual-merchandising' },
    ],
  },
  '/projects/project-3': {
    path: '/projects/project-3',
    title: 'Athera Athleisure Research & MVP Project — Srishti Jain',
    description: 'An athleisure start-up project turning consumer research into Athera, a versatile clothing concept developed through material selection and prototyping.',
    canonical: canonical('/projects/project-3'),
    robots: DEFAULT_ROBOTS,
    ogType: 'website',
    image,
    creativeWork: {
      name: 'Athera Athleisure Hybrid',
      description: 'Consumer research, product development and physical MVP for an athleisure start-up.',
    },
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Athera Athleisure', path: '/projects/project-3' },
    ],
  },
};

export const KNOWN_ROUTE_PATHS = Object.keys(ROUTE_SEO);

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const withoutTrailingSlash = pathname.replace(/\/+$/, '');
  return ROUTE_SEO[withoutTrailingSlash] ? withoutTrailingSlash : pathname;
}

export function getRouteSeo(pathname: string): RouteSeo | null {
  return ROUTE_SEO[normalizePathname(pathname)] ?? null;
}


export const notFoundSeo: RouteSeo = {
  path: '/404',
  title: 'Page Not Found — Srishti Jain Portfolio',
  description: 'The requested portfolio page could not be found.',
  canonical: canonical('/404'),
  robots: NOT_FOUND_ROBOTS,
  ogType: 'website',
  image,
};

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = href;
}

function replaceStructuredData(data: object | null) {
  const scriptId = 'route-structured-data';
  document.getElementById(scriptId)?.remove();
  if (!data) return;

  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data).replace(/</g, '\\u003c');
  document.head.appendChild(script);
}

function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function buildStructuredData(route: RouteSeo | null) {
  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Srishti Jain',
    url: `${SITE_URL}/`,
    sameAs: ['https://www.linkedin.com/in/srishti-jain-263074228'],
  };
  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: route?.description,
    inLanguage: 'en',
    publisher: { '@id': `${SITE_URL}/#person` },
  };

  if (!route) return null;

  const graph: object[] = [person, website];
  if (route.breadcrumb) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${route.canonical}#breadcrumb`,
      itemListElement: route.breadcrumb.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }
  if (route.creativeWork) {
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${route.canonical}#creativework`,
      name: route.creativeWork.name,
      description: route.creativeWork.description,
      url: route.canonical,
      image: route.image.url,
      creator: { '@id': `${SITE_URL}/#person` },
    });
  }

  graph.push({
    '@type': 'WebPage',
    '@id': `${route.canonical}#webpage`,
    url: route.canonical,
    name: route.title,
    description: route.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
  });

  return { '@context': 'https://schema.org', '@graph': graph };
}

export type SiteSeoOverrides = {
  title?: string;
  description?: string;
};

export function applyRouteMetadata(pathname: string, siteOverrides?: SiteSeoOverrides) {
  const matchedRoute = getRouteSeo(pathname);
  const route = matchedRoute ?? notFoundSeo;
  const useSiteHomeOverride = matchedRoute?.path === '/';
  const metadata = {
    ...route,
    title: useSiteHomeOverride && siteOverrides?.title ? siteOverrides.title : route.title,
    description:
      useSiteHomeOverride && siteOverrides?.description
        ? siteOverrides.description
        : route.description,
  };

  document.title = metadata.title;
  upsertMeta('meta[name="description"]', 'name', 'description', metadata.description);
  upsertMeta('meta[name="robots"]', 'name', 'robots', metadata.robots);
  upsertCanonical(metadata.canonical);

  upsertMeta('meta[property="og:title"]', 'property', 'og:title', metadata.title);
  upsertMeta('meta[property="og:description"]', 'property', 'og:description', metadata.description);
  upsertMeta('meta[property="og:type"]', 'property', 'og:type', route.ogType);
  upsertMeta('meta[property="og:url"]', 'property', 'og:url', route.canonical);
  upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
  upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');
  upsertMeta('meta[property="og:image"]', 'property', 'og:image', route.image.url);
  upsertMeta('meta[property="og:image:secure_url"]', 'property', 'og:image:secure_url', route.image.url);
  upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', route.image.alt);
  upsertMeta('meta[property="og:image:width"]', 'property', 'og:image:width', String(route.image.width));
  upsertMeta('meta[property="og:image:height"]', 'property', 'og:image:height', String(route.image.height));

  upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title);
  upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.description);
  upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', route.image.url);
  upsertMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', route.image.alt);

  replaceStructuredData(buildStructuredData(getRouteSeo(pathname)));
}
