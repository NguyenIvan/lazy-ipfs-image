const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');

module.exports = {
mode: "development",
  entry: "./src/main.js",
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
    library: pkg.name,
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  externals: {
    react: "commonjs react",
    "react-lazy-images": "commonjs react-lazy-images"
  }

}

