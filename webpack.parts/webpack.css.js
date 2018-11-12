/* eslint-disable quotes */
// to export css to a separate file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = ({ mode, include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      include,
      exclude,

      use: [
        mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
        "css-loader", "postcss-loader", "sass-loader",
      ],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
});
