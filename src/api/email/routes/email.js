module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/send-email',
      handler: 'email.sendEmail',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

