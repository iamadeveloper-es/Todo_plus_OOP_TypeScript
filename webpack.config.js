const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/ts/index',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack TS Boilerplate',
            filename: "./index.html",
            template: 'src/index.html',
            inject: 'body',
        }),
    ],
    resolve: {
        extensions: [
            ".ts"
        ]
    },
    output: {
        filename: 'js/app.[contenthash].js',
        path: path.resolve(__dirname, './build'),
        clean: true
    }
};
