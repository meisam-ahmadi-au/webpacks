const htmlwebpackplugin = require("html-webpack-plugin");

module.exports = () => {
    return {
        plugins: [
            new htmlwebpackplugin({title: "webpack demo"}),
        ]
    }
}