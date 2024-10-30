module.exports = {
  devServer: {
    proxy: {
      // proxy for using the water-potability local service
      "/api/takeCsv": {
        target: "http://localhost:8000",
      },
      // proxy for developing a python api on standard port
      "/api/localpy/*": {
        target: "http://localhost:5000",
        changeOrigin: true,
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
