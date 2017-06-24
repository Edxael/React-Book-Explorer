module.exports = {
  entry: ['/home/edmundo/Dropbox/01-Dev/01-js/03-book-explorer/app/index.js'],
  output: {
    path: '/home/edmundo/Dropbox/01-Dev/01-js/03-book-explorer/build',
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: '/home/edmundo/Dropbox/01-Dev/01-js/03-book-explorer/build',
    inline: true
  }
}
