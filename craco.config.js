const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      '@providers': path.resolve(__dirname, 'src/providers/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
    },
  },
};