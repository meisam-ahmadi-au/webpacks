const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");


const commonConfig = merge([
    {
        plugins: [
            // Ignore node_modules so CPU usage with poll watching drops significantly.
            new webpack.WatchIgnorePlugin([path.resolve(__dirname, "node_modules")]),
        ],
    },
    require("./webpack.parts/webpack.html")(),
])

const productionConfig = merge([
    require("./webpack.parts/webpack.css")({mode:"production"}),
    require("./webpack.parts/webpack.images")({ options: { limit: 15000, name: "images/[name].[ext]",}}),
]);

const developmentConfig = merge([
    require("./webpack.parts/webpack.devServer")(),
    require("./webpack.parts/webpack.css")({mode:"development"}),
    require("./webpack.parts/webpack.images")()

]);

module.exports = ({mode}) => {
    console.log(developmentConfig.module);
    if (mode === "production") {
        return merge([commonConfig, productionConfig, { mode } ]);
    }
        return merge([commonConfig, developmentConfig, { mode }]);
}
