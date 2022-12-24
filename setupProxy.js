const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'http://127.0.0.1:5173',
    createProxyMiddleware({
      target: 'http://api.steampowered.com',
      changeOrigin: true,
    })
  );
};