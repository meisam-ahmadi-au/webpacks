module.exports = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpe?g)$/,
                include,
                exclude,
                use: [
                    {
                        loader: "url-loader",
                        options,
                    }
                ],
            },
            {
                test: /\.svg$/,
                use: "file-loader",
            },
        ]
    }
});