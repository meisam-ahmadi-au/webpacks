module.exports = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
});
