module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        target: "https://wisdom-demo.uol.de",
        changeOrigin: true
      },
      "/files/*": {
        target: "https://wisdom-demo.uol.de",
        changeOrigin: true
      }
    }
  }
}
