"use strict";

const path = require("path");

module.exports = (_env, argv) => {
  return {
    mode: "development",
    output: {
      filename: "static/js/build.js",
    },
    devServer: {
      static: path.join(__dirname, '../build'),
      port: 3000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader',],
        },
      ],
    },
  };
};
