const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          // use: textWebpack.extract({
          use: ['style-loader','css-loader', 'sass-loader']
            // fallback: 
          // })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {  // images loader
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            }
          }],
          exclude: /node_modules/,
          include: __dirname,
        }
      ]
    },
    plugins: [htmlPlugin]
  }