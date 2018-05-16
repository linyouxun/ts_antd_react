const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.resolve(__dirname, './src');
const config = {
  mode: 'development',
  entry: path.resolve(rootPath, './index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './[name].js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'ts-loader'
      }]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            ['transform-runtime']
          ],
        }
      }]
    }]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ]
}
module.exports = config;


const os = require('os');
console.log(`############################################################################`);
console.log(`##         os: ${os.type()} ${os.arch()} ${os.release()}`);
console.log(`##        ram: ${ (os.freemem() / 1024 / 1024 / 1024) < 1
    ? (os.freemem() / 1024 / 1024).toFixed(0) + 'MB'
    : (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + 'GB'}`);
console.log(`##       time: ${new Date()}`);
console.log(`############################################################################`);
