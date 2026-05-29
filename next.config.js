const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
