import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteSettings } from '../lib/sanity';
import { applyRouteMetadata } from '../lib/seo';

export function RouteMetadata() {
  const { pathname } = useLocation();
  const siteTitle = siteSettings.seo?.title;
  const siteDescription = siteSettings.seo?.description;

  useEffect(() => {
    applyRouteMetadata(pathname, {
      title: siteTitle,
      description: siteDescription,
    });
  }, [pathname, siteTitle, siteDescription]);

  return null;
}

export default RouteMetadata;
