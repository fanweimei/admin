const webpack = require('webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
console.log(9999)
module.exports = {
    output: {
        publicPath: "http://localhost:4201/",
        uniqueName: "standard",
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "standard",
            library: { type: "var", name: "standard" },
            filename: "standard.js",
            exposes: {
                MessageModule:
                    "./projects/standard/src/app/message/message.module.ts",
            },
            shared: {
                "@angular/core": { eager: true, singleton: true },
                "@angular/common": { eager: true, singleton: true },
                "@angular/router": { eager: true, singleton: true },
            },
        }),
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("4711")
        })
    ]
}