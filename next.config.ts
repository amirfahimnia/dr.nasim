import path from 'node:path';

import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import {legacyArticleSlugs} from './src/content/articles/slugs';

/* Lockfiles outside this folder (e.g. ~/package-lock.json) make Next infer
   the workspace root as the home directory, so Turbopack watches everything
   under it and rebuilds/reloads the page on unrelated file changes. Pin the
   root to this project instead. */
const projectRoot =
  typeof __dirname !== 'undefined' ? __dirname : process.cwd();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(projectRoot)
  },
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
      // Legacy blog: /blog (archive) and every old post URL → /fa/articles
      {
        source: '/blog',
        destination: '/fa/articles',
        permanent: true
      },
      {
        source: '/blog/:path*',
        destination: '/fa/articles',
        permanent: true
      },
      ...legacyArticleSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/fa/articles/${slug}`,
        permanent: true
      }))
    ];
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);