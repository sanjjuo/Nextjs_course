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
      "placehold.co",
      "picsum.photos",
      "img.philcarprice.com",
      "cdn.luxe.digital",
      "www.google.com",
      "products.com",
      "fastly.picsum.photos",
      "placeimg.com",
      "th.bing.com",
      "example.com",
      "i.pravatar.cc",
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
