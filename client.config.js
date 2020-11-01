const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  entry: './src/server/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [
          path.resolve(buildPath, 'server')
        ]
      },
      watch: {
        include: [
          path.resolve(buildPath, 'server')
        ]
      }
    })
  ],
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'server.js', /* [contenthash] */
    path: path.resolve(buildPath, 'server'),
  },
  target: 'node',
};
