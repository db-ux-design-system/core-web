---
to: output/power-apps/<%= name %>/webpack.config.js
force: true
---
module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};



