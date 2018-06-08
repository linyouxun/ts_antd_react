const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const theme = require('./src/common/theme');
const rootPath = path.resolve(__dirname, './src');
const tsImportPluginFactory = require('ts-import-plugin');
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
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: true
            }) ]
          }),
          compilerOptions: {
            target: 'es6',
            jsx: 'react',
            // moduleResolution: 'node',
            declaration: false,
            sourceMap: true,
            module: 'es2015'
          },
        },
      }]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            ['transform-runtime'],
            ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
          ],
        }
      }]
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { importLoaders: 1 } },
        { loader: 'postcss-loader' },
      ],
    }, {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { importLoaders: 1 } },
        { loader: 'postcss-loader' },
        { loader: 'less-loader', options: { javascriptEnabled: true, modifyVars: theme() } },
      ],
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { importLoaders: 1 } },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' },
      ],
    }, {
      test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/,
      use: 'file-loader?limit=1&name=img/[sha512:hash:base64:7].[ext]',
    },]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
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
