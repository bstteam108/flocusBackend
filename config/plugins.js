
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "smtp",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
      },
      settings: {
        defaultFrom: "info@seitzcleaning.com",
        defaultReplyTo: "bstteam108@gmail.com",
      },
    },
  },
});
