module.exports = {
  devServer: {
    proxy: {
      // proxy for using the water-potability local service
      "/api/takeCsv": {
        target: "http://localhost:8000",
      },
      // proxy for the local be water smart container
      "/api/bws/*": {
        target: "http://localhost:5000",
        secure: false,
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: {
          // Rewrite /api/bws to reflect the api endpoints given in the docker
          "^/api/bws/": "",
        },
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
