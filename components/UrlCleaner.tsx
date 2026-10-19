'use client';

import { useEffect } from 'react';

export default function UrlCleaner() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      const url = new URL(window.location.href);

      if (url.searchParams.has('fbclid') || url.searchParams.has('utm_source')) {
        url.searchParams.delete('fbclid');
        url.searchParams.delete('utm_source');
        url.searchParams.delete('utm_medium');
        url.searchParams.delete('utm_campaign');
        url.searchParams.delete('utm_content');
        url.searchParams.delete('utm_term');

        const cleanUrl = url.searchParams.toString()
          ? `${url.pathname}?${url.searchParams.toString()}`
          : url.pathname;

        window.history.replaceState({}, '', cleanUrl);
      }
    }
  }, []);

  return null;
}