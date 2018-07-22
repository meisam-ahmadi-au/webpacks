const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");


const commonConfig = merge([
    {
        plugins: [
            new HtmlWebpackPlugin({title: "webpack demo"}),
            new ErrorOverlayPlugin(),
            // Ignore node_modules so CPU usage with poll watching drops significantly.
            new webpack.WatchIgnorePlugin([path.resolve(__dirname, "node_modules")]),
        ],
    }
])

const productionConfig = merge([
    require("./webpack.parts/webpack.css")({mode:"production"}),
]);

const developmentConfig = merge([
    require("./webpack.parts/webpack.devServer")(),
    require("./webpack.parts/webpack.css")({mode:"development"}),

]);

module.exports = ({mode}) => {
    if (mode === "production") {
        return merge([commonConfig, productionConfig, { mode } ]);
    }
        return merge([commonConfig, developmentConfig, { mode }]);
}
