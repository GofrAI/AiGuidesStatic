/** @type {import('next').NextConfig} */
const createDirectoryTree = require('./scripts/create-directory-tree');

const nextConfig = {
  output: 'export', // for static export
  
  // Custom webpack configuration to run directory tree script
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Run directory tree creation during server-side build
      createDirectoryTree();
    }
    return config;
  }
};

module.exports = nextConfig;
