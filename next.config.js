/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) { // development database
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: "darvac",
        mongodb_password: "sGCzH2X6k3miktay",
        mongodb_clustername: "cluster0",
        mongodb_databasename: "test",
      },
    };
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: "darvac",
      mongodb_password: "sGCzH2X6k3miktay",
      mongodb_clustername: "cluster0",
      mongodb_databasename: "test",
    },
  };
};

module.exports = nextConfig;
