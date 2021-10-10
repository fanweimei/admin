const webpack = require('webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
console.log(9999)
module.exports = {
    output: {
        publicPath: "http://localhost:4200/",
        uniqueName: "base",
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            shared: {
                "@angular/core": { eager: true, singleton: true },
                "@angular/common": { eager: true, singleton: true },
                "@angular/router": { eager: true, singleton: true },
                "common-lib": { eager: true, singleton: true },
            },
        }),
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("4711")
        })
    ]
}