module.exports = {
  async sendEmail(ctx) {
    try {

      console.log(ctx.request.body);

      const { to, subject, text, html } = ctx.request.body;

      if (!to || !subject || (!text && !html)) {
        return ctx.badRequest('Missing required email fields');
      }

      await strapi.plugins['email'].services.email.send({
        to,
        from: 'info@seitzcleaning.com', // Replace with your email
        subject,
        text,
        html,
      });

      ctx.send({ message: 'Email sent successfully!' });
    } catch (error) {
      ctx.send({ error: 'Failed to send email', details: error });
    }
  },
};
