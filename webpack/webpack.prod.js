"use strict";

module.exports = (_env, argv) => {
  return {
    mode: "production",
    output: {
      filename: "static/js/[name].[contenthash:8].js",
    },
  };
};
