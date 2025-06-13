import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['i.imgur.com', 'cdn.dummyjson.com', 'placeimg.com', "via.placeholder.com", "www.gravatar.com", "placehold.co"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
