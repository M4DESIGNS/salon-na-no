import webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

type MODE = 'production' | 'development'
const mode: MODE = 'production'
const enabledSourceMap = true

const staticBundle: webpack.Configuration = {
  mode: mode,
  entry: './src/index.ts',
  output: {
    filename: 'js/scripts.js',
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        exclude: /node_modules\/(?!(core-module|dom7|swiper)\/).*/,
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require('postcss-preset-env')({
                    autoprefixer: { grid: true },
                  }),
                  require('autoprefixer')({ grid: 'autoplace' }),
                  require('postcss-object-fit-images'),
                  require('css-mqpacker')(),
                  require('cssnano')(),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            },
          },
          'import-glob-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      minify: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/images'),
          to: path.resolve(__dirname, 'dist/images'),
        },
        {
          from: path.resolve(__dirname, 'public/fonts'),
          to: path.resolve(__dirname, 'dist/fonts'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
    compress: true,
    port: 8000,
    open: false,
  },
  performance: {
    hints: false,
  },
}

const WPBundle: webpack.Configuration = {
  mode: mode,
  entry: './src/index.ts',
  output: {
    filename: 'js/scripts.js',
    path: `${__dirname}/wordpress/wp-content/themes/bls/assets`,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        exclude: /node_modules\/(?!(core-module|dom7|swiper)\/).*/,
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require('postcss-preset-env')({
                    autoprefixer: { grid: true },
                  }),
                  require('autoprefixer')({ grid: 'autoplace' }),
                  require('postcss-object-fit-images'),
                  require('css-mqpacker')(),
                  require('cssnano')(),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            },
          },
          'import-glob-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/images'),
          to: path.resolve(
            __dirname,
            'wordpress/wp-content/themes/bls/assets/images'
          ),
        },
        {
          from: path.resolve(__dirname, 'public/fonts'),
          to: path.resolve(
            __dirname,
            'wordpress/wp-content/themes/bls/assets/fonts'
          ),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  performance: {
    hints: false,
  },
}

// const config = [staticBundle, WPBundle]
const config = [staticBundle]

export default config
