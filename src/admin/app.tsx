import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Flocus™!",
        "Auth.form.welcome.subtitle": "Log in to your Flocus™ account",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
