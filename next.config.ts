import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "i.imgur.com",
      "cdn.dummyjson.com",
      "placeimg.com",
      "via.placeholder.com",
      "www.gravatar.com",
      "placehold.co ",
      "picsum.photos",
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
