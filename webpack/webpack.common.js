"use strict";

const path = require("path");

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
      ],
    },
    // resolve https://webpack.kr/configuration/resolve/
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
  };
};
