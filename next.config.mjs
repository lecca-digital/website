import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/docs", // Replace with the actual path to this MDX file
        destination: "/docs/overview",
        permanent: true, // Use `true` for a 308 redirect, `false` for a 307 redirect
      },
    ];
  },
};

export default withMDX(config);
