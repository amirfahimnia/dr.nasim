import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

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
      }
    ];
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);