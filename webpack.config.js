const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {                  
    entry: './src/main.js',         
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    
    
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({ 
            filename: 'style.[contenthash].css'
        }),
        new BundleAnalyzerPlugin(),
        // new CleanWebpackPlugin(),

    ],
    module: {
        rules: [
            // {test: /\.css$/, 
			// 		use: ['style-loader', 'css-loader'] },
            { test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            },
            // { test: /\\.s[ac]ss$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            // },

            {
                test: /\.(png|jpe?g|gif|svg)$/i, 
						use: 'file-loader'
                        },
                        {
                            test: /\.(mp3)$/i,
                            loader: 'file-loader'
                          }

        ]
    },
    devServer: {
        port: 9000,
      },
}