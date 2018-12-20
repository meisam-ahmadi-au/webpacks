const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const path = require('path');
const glob = require('glob');

module.exports = ({ mode, include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.s?css$/,
      include,
      exclude,
      use: [
        mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader', 'postcss-loader', 'sass-loader',
      ],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new PurifyCSSPlugin({ paths: glob.sync(path.join(__dirname, 'src/*.html')) }),
  ],
});
