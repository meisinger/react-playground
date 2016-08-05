
import path from 'path'

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname, '/source/index.js'),
  output: {
    path: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'source'),
        loaders: [ 'babel' ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
