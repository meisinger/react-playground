
import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import extractText from 'extract-text-webpack-plugin'

export default {
  devtools: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/source/index.js'),
    path.join(__dirname, '/source/sass/main.scss')
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: "main.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'source'),
        loaders: [ 'react-hot', 'babel' ]
      },
      {
        test: /\.scss$/,
        loader: extractText.extract(
          'style-loader',
          'css-loader!postcss-loader!sass-loader?sourceMap'
        )
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new extractText('styles.css')
  ],
  resolve: {
    root: path.join(__dirname, 'source'),
    extensions: ['', '.js', '.scss']
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['last 3 versions']
      })
    ]
  }
}
