"use strict";

const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const imageInlineSizeLimit = process.env.IMAGE_INLINE_SIZE_LIMIT
  ? parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT)
  : 1024 * 10;

module.exports = (_env, argv) => {
  return {
    // entry https://webpack.kr/concepts/entry-points
    entry: "./src/index.tsx",
    // output https://webpack.kr/configuration/output
    output: {
      path: path.resolve(__dirname, "../build"),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: ["babel-loader", "ts-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.(bmp|gif|jpe?g|png|svg|webp)$/i,
          loader: 'url-loader',
          options: {
            limit: imageInlineSizeLimit,
            name: 'static/media/[name].[contenthash:8].[ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
    ],
    // resolve https://webpack.kr/configuration/resolve/
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
  };
};
