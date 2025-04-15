import type { StrapiApp } from '@strapi/strapi/admin';
import './extensions/custom.css'; // your custom CSS file

export default {
  config: {
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Flocus™!",
        "Auth.form.welcome.subtitle": "Log in to your Flocus™ account",
        "app.page.title": "Flocus™",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    document.title = "Flocus™ Admin";
    console.log(app);
  },
};
