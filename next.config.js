/* eslint-disable */
require('dotenv').config();

const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
  pageExtensions: ['page.tsx'],
  webpack: (config, options) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    return config
  }
};
