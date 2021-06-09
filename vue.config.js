module.exports = {
  publicPath: "",
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "Sounds",
        // icon: "./favicon.ico"
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
  pages: {
    index: {
      entry: "src/main.ts",
      template: "index.html",
    },
  },
};
