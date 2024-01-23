module.exports = {
  devServer: {
    proxy: {
      // proxy for using the water-potability local service
      "/api/takeCsv": {
        target: "http://localhost:8000",
      },
      "/api/*": {
        target: "https://wisdom-demo.uol.de",
        changeOrigin: true,
      },
      "/files/*": {
        target: "https://wisdom-demo.uol.de",
        changeOrigin: true,
        logLevel: "error",
      },
    },
  },
};
