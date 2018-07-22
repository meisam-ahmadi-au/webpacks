const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");


const commonConfig = merge([
    require("./webpack.parts/webpack.css")(),
    {
        plugins: [
            new HtmlWebpackPlugin({title: "webpack demo"}),
            new ErrorOverlayPlugin(),
            // Ignore node_modules so CPU usage with poll watching drops significantly.
            new webpack.WatchIgnorePlugin([path.resolve(__dirname, "node_modules")]),
        ],
    }
])

const productionConfig = merge([]);

const developmentConfig = merge([require("./webpack.parts/webpack.devServer")()]);

module.exports = ({mode}) => {
    console.log(mode);
    console.dir(commonConfig);
    console.dir(developmentConfig);
    if (mode === "production") {
        return merge([commonConfig, productionConfig, { mode } ]);
    }
        return merge([commonConfig, developmentConfig, { mode }]);
}
