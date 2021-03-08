const slsw = require("serverless-webpack");
const path = require("path");
const { ESBuildPlugin } = require("esbuild-loader");

module.exports = {
  entry: slsw.lib.entries,
  node: false,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "es2017",
        },
      },
    ],
  },
  plugins: [new ESBuildPlugin()],
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    libraryTarget: "commonjs",
    filename: "[name].js",
    path: path.resolve(__dirname, ".webpack"),
  },
};
