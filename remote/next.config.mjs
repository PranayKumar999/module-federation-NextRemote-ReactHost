import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "remote",
          remotes: {},
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Test": "./components/Test",
          },
          shared: {
            react: {
              requiredVersion: false,
              singleton: true,
            },
          },
        })
      );
    }
    return config;
  },
};

export default nextConfig;
