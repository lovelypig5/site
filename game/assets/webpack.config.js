module.exports = (modulePath) => {

    var path = require('path');
    const webpack = require(`${modulePath}/webpack`);
    const HtmlWebpackPlugin = require(`${modulePath}/html-webpack-plugin`);
    const WebpackChunkHash = require(`${modulePath}/webpack-chunk-hash`);
    /* extract the manifest to a separate JSON file */
    const ChunkManifestPlugin = require(`${modulePath}/chunk-manifest-webpack-plugin`);
    /* inject manifest.json to index.html */
    const InlineChunkManifestHtmlWebpackPlugin = require(`${modulePath}/inline-chunk-manifest-html-webpack-plugin`);

    return {
        // if single entry is used, bundle name will be named as main.js
        entry: {
            main: "./index",
            common: ['jquery', 'react', 'react-dom', 'whatwg-fetch']
        },
        output: {
            publicPath: '/'
        },
        // plugins example, default no more
        plugins: [
            new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", React: "react", fetch: "whatwg-fetch"}),
            new HtmlWebpackPlugin({
                template: './index.tpl',
                filename: './index.html',
                chunks: ['manifest', 'main', 'common']
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ["common", "manifest"]
            }),
            new webpack.HashedModuleIdsPlugin(),
            new WebpackChunkHash(),
            new ChunkManifestPlugin(),
            new InlineChunkManifestHtmlWebpackPlugin()
        ],
        module: {
            rules: []
        },
        resolve: {
            alias: {
                templates: path.resolve("./templates"),
                less: path.resolve("./less"),
                css: path.resolve("./css")
            }
        },
        externals: [],
        devServer: {
            proxy: {
                '/api': 'http://localhost:3000'
            }
        }
    };
};
