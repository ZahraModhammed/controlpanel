
const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const {CleanWebpackPlugin}= require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require ('optimize-css-assets-webpack-plugin')
module.exports= {
    entry: {
        'app':               './src/index.js',
        'assets/js/banner': './src/assets/js/banner.js',
    },

    output: {
        path: path.join(__dirname, "/app"),
        filename:'[name].js',
        publicPath: '/',
    },

    devServer:{
        contentBase:path.join (__dirname, "/app"),
        port: 8881,
        writeToDisk: true,
        open:true,
    },

    module: {
        rules: [

            {
  
              test: /\.html$/i,
  
              loader: 'html-loader',
  
            },

            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },

            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                MiniCssExtractPlugin.loader, 
                'css-loader', 
                'postcss-loader',
                'sass-loader'
              ]
            },
  
            {
              test: /\.(ttf|woff|woff2|svg|eot)$/i,
                exclude: /images/,
                  use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts', // في هذا السطر
                      },
                    },
                  ],
            },
              {
                test: /\.(png|jpe?g|svg|gif)$/i,
                  exclude: /fonts/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: 'assets/images', // و في هذا السطر أيضا
                        }
                      },
                    ],
              },

        ]
    },

 
    plugins:[
         new CleanWebpackPlugin({cleanStalWebpackAssets:false}),
         new OptimizeCSSAssetsPlugin({}),

         new MiniCssExtractPlugin({
 
             filename: "assets/css/style.css"
 
         }),
        new HtmlWebpackPlugin({

            filename: 'index.html',

            template: './src/index.html',

        }),
        new HtmlWebpackPlugin({

          filename: 'components/button.html',

          template: './src/components/button.html',
          chunks: ['app']

      }),

      new HtmlWebpackPlugin({

        filename: 'components/textfield.html',

        template: './src/components/textfield.html',
        chunks: ['app']

    }),
    new HtmlWebpackPlugin({

      filename: 'components/card.html',

      template: './src/components/card.html',
      chunks: ['app']

  }),
  new HtmlWebpackPlugin({

    filename: 'components/banner.html',

    template: './src/components/banner.html',
    chunks: ['app', 'assets/js/banner']

}),
    ],


 
}