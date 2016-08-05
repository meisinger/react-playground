
import webpack from 'webpack'
import path from 'path'

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/source/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'source'),
        loaders: [ 'react-hot', 'babel' ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  }
}
