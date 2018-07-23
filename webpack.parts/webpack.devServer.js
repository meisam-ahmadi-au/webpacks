const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = () => ({
    devServer: {
        stats: "errors-only", // Display only errors to reduce the amount of output.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT || 3000, // Defaults to 8080
        open: true, // Open the page in browser
        overlay: true ,
        //contentBase ,
    },
    plugins: [ new ErrorOverlayPlugin()],
})