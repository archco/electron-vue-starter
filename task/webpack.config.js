const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin= require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: ['./src/renderer/style/index.scss', './src/renderer/script/index.js'],
  mode: env,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.vue', '.svg'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devtool: env === 'production' ? false : 'source-map',
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
  ],
};

if (env === 'production') {
  module.exports.plugins.push(new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      discardComments: { removeAll: false },
    },
  }));
}
