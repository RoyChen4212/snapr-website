require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const path = require('path');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  webpack: (config, { dev }) => {
    // ESLINT LOADER
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: ['/node_modules/', '/.next'],
        loader: 'eslint-loader',
        enforce: 'pre',
      });
    }

    // URL LOADER
    // config.module.rules.push({
    //   test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       limit: 100000,
    //       name: '[name].[ext]',
    //     },
    //   },
    // });

    // IMAGE HASH TAGS
    config.module.rules.push({
      test: /\.(jpeg|jpg|png|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: '',
            outputPath: 'static',
            publicPath: '_next/static',
            name: '[path][name].[hash].[ext]',
          },
        },
      ],
    });

    // FONTS LOADER
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: '',
            outputPath: 'static',
            publicPath: '_next/static',
            name: '[name].[ext]',
          },
        },
      ],
    });

    // eslint-disable-next-line no-param-reassign
    config.plugins = config.plugins || [];

    // DOTENV
    // eslint-disable-next-line no-param-reassign
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, process.env.NODE_ENV === 'production' ? '.env.production' : '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
  useFileSystemPublicRoutes: false,
  pageExtensions: ['js'],
};

module.exports = withCSS(withSass(nextConfig));
