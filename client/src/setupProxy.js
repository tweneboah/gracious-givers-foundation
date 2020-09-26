const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google', 'api/profile'],
    createProxyMiddleware({
      // target: 'https://gracious-givers.herokuapp.com',
      target: 'http://localhost:5000',
    })
  );
};
