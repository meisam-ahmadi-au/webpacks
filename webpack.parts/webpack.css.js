// to export css to a separate file
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 


module.exports = ({mode, include, exclude} = {}) => ({
    module: {
        rules: [{
            test: /\.css$/,
            include,
            exclude,

            use: [
                mode==="production" ? MiniCssExtractPlugin.loader : "style-loader", 
                "css-loader",
            ],
        },
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },],
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].css",}),
    ]
});