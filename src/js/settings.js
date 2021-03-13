/* global Handlebars */

export const select = {
  templateOf: {
    homePage: '#template-home-page',
    generalPage: '#template-general-page',
    linksPage: '#template-links-page',
  },
  containerOf: {
    pages: '.pages',
    //home: '.home-page',
    //general: '.general-page',
    //details: '.details-page',
    //links: '.links-page',
    //banners: '.banners-page',
    //personal: '.personal-page',
    //payout: '.payout-page',
    //postback: '.postback-page',
  },
  all: {
    formInputs: 'input, select',
  },
  widgets: {
    datePicker: {
      wrapper: '.date-picker',
      input: `input[name="date"]`,
    },
  },
  nav: {
    links: '.main-menu .menu-list',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const templates = {
  //menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  //cartProduct: Handlebars.compile(document.querySelector(select.templateOf.cartProduct).innerHTML),
  //bookingWidget: Handlebars.compile(document.querySelector(select.templateOf.bookingWidget).innerHTML),
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  generalPage: Handlebars.compile(document.querySelector(select.templateOf.generalPage).innerHTML),
  linksPage: Handlebars.compile(document.querySelector(select.templateOf.linksPage).innerHTML),
};


