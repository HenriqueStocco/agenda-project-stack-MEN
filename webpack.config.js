import path from 'path';

export default {
  mode: 'development',
  entry: './frontend/main.js',
  output: {
    path: path.resolve('./public/assets/js'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'core-js/stable': 'core-js/stable',
      'regenerator-runtime/runtime': 'regenerator-runtime/runtime',
    },
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
};
