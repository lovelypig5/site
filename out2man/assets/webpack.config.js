module.exports = (modulePath) => {

    var path = require('path');
    var webpack = require(`${modulePath}/webpack`);
    var HtmlWebpackPlugin = require(`${modulePath}/html-webpack-plugin`);

    return {
        // if single entry is used, bundle name will be named as main.js
        entry: {
            main: './js/index.js'
        },
        // plugins example, default no more
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new HtmlWebpackPlugin({
                template: './index.html',
                filename: './index.html',
                chunks: ['main']
            })
        ],
        module: {
            rules: []
        },
        externals: [],
        devServer: {
            // proxy: {
            //     '*': 'http://localhost:3000'
            // }
        }
    }
}
