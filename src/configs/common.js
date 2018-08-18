module.exports = {
  app: {
    url: {
      hostname: process.env.APP_HOST || 'localhost',
      protocol: process.env.APP_PROTOCOL || 'http',
      port: process.env.APP_PORT || 3000,
    },
  },
};
