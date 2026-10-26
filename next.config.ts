import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import {legacyArticleSlugs} from './src/content/articles/slugs';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Legacy WordPress URLs: /{locale}/services[/{slug}] → /{locale}/treatments[/{slug}]
    return [
      {
        source: '/:locale(fa|en|de)/services',
        destination: '/:locale/treatments',
        permanent: true
      },
      {
        source: '/:locale(fa|en|de)/services/:slug*',
        destination: '/:locale/treatments/:slug*',
        permanent: true
      },
      // Legacy blog: /blog (archive) and every old post URL → /fa/artikelen
      {
        source: '/blog',
        destination: '/fa/artikelen',
        permanent: true
      },
      {
        source: '/blog/:path*',
        destination: '/fa/artikelen',
        permanent: true
      },
      ...legacyArticleSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/fa/artikelen/${slug}`,
        permanent: true
      }))
    ];
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);