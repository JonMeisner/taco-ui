const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(
            "C:/Users/SaxyN/OneDrive/Desktop/ACTUAL UI/new-taco-ui/dist"
        ),
        filename: "index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "public/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/assets",
                    to: path.resolve(
                        "C:/Users/SaxyN/OneDrive/Desktop/ACTUAL UI/new-taco-ui/src/assets"
                    ),
                },
            ],
        }),
    ],
    devtool: "inline-source-map",
});