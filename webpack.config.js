module.exports = function webpackConfig() {
  return {
    output: {
      path: path.join(cwd(), 'dist/'),
      publicPath: 'auto',
      filename: '[name].[contenthash].js',
      crossOriginLoading: 'anonymous',
      clean: true
    },
    devtool: 'source-map',
    devServer: {
      port: 1442,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
      },
      static: {
        directory: path.join(cwd(), 'dist'),
      },
      devMiddleware: {
        writeToDisk: true
      }
    },
    resolve: {
      modules: [path.join(cwd(), 'src'), 'node_modules'],
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  }
}
