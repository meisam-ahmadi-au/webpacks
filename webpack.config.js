const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = () => {
    return {
        plugins: [
            new HtmlWebpackPlugin({title: "webpack demo"}),
            new ErrorOverlayPlugin(),
            // Ignore node_modules so CPU usage with poll watching drops significantly.
            new webpack.WatchIgnorePlugin([path.resolve(__dirname, "node_modules")]),
        ],
        devServer: {
            stats: "errors-only", // Display only errors to reduce the amount of output.
            host: process.env.HOST, // Defaults to `localhost`
            port: process.env.PORT || 3000, // Defaults to 8080
            open: true, // Open the page in browser
            overlay: true ,
            //contentBase ,
          },
    }
}