const path = require('path');
const webpack = require("webpack");
const extractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = (env) => {
    const isDevBuild = !(env && env.production);
    console.log('IsDevBuild: ' + isDevBuild);

    const main = {
        mode: 'development',
        entry: './js/main.js',
        output: {
            path: path.resolve(__dirname, './../wwwroot/dist'),
            filename: 'main.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.(s*)css$/,
                    use: extractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: "css-loader", options: {
                                sourceMap: isDevBuild ? true : false
                            }
                        }, {
                            loader: "sass-loader", options: {
                                sourceMap: isDevBuild ? true : false
                            }
                        }]
                    }),

                }
            ]
        },
        resolve: {
            alias: {
                'vue$': isDevBuild ? 'vue/dist/vue.esm.js' : 'vue/dist/vue.min.js',
                'vue-router$': isDevBuild ? 'vue-router/dist/vue-router.esm.js' : 'vue-router/dist/vue-router.min.js'
            }
        },
        devServer: {
            
            publicPath: path.resolve(__dirname, './../client/assets'),
            contentBase: path.resolve(__dirname, './../wwwroot'),
            writeToDisk: true,
            watchContentBase: true,
            hot: true,
            stats: "errors-only",
            inline: true,
        },
        plugins: [
            new extractTextPlugin({ filename: '../dist/css/main.css' }),
            new CopyWebpackPlugin([
                { from: 'assets/images/', to: '../dist/images/' },
                { from: 'assets/fonts/', to: '../dist/fonts/' }
            ]),
            !isDevBuild && new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
            })
        ].filter(Boolean),
        devtool: isDevBuild ? 'source-map' : ''
    };

    return [main];
};