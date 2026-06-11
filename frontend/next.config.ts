import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@stacks/connect', '@stacks/connect-ui'],
  serverExternalPackages: ['pino', 'pino-pretty', 'thread-stream', 'pino-std-serializers'],
  experimental: {},
  turbopack: {
    resolveAlias: {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      buffer: false,
      path: false,
      http: false,
      https: false,
      zlib: false,
      process: false,
    }
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      buffer: false,
      path: false,
      http: false,
      https: false,
      zlib: false,
      process: false,
    };
    return config;
  },
};

export default nextConfig;
