module.exports = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpe?g)$/,
                include,
                exclude,
                use: [
                    {loader: "url-loader", options,}
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {loader: 'url-loader', options},
                    {loader: 'svgo-loader', options: svgOptions}
                ]
            },
        ]
    }
});
const svgOptions = {
    plugins: [
      {removeTitle: true},
      {convertColors: {shorthex: false}},
      {convertPathData: false}
    ]
  }