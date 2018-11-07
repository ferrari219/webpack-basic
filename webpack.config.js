const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/src', // `__dirname` is root of project and `src` is source
    entry: {
        index: './js/index.js',
        style: './scss/style.scss'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src'
    },
    output: { //js
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, 
            //sass
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            //es6
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // sass -> css
            filename: 'css/[name].bundle.css',
            allChunks: true,
          }),
    ],
};