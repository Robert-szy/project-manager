import {select, classNames, templates} from './settings.js';

class Home {
  constructor(app, element){
    const thisHome = this;

    thisHome.render(element);

    console.log('newHome', thisHome);
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
}

class General {
  constructor(app, element){
    const thisGeneral = this;

    thisGeneral.render(element);

    console.log('newGeneral', thisGeneral);
  }

  render(element){
    const thisGeneral = this;

    const generatedHTML = templates.generalPage();

    thisGeneral.dom = {};
    thisGeneral.dom.wrapper = element;
    thisGeneral.dom.wrapper.innerHTML = generatedHTML;
  }
}

class Links {
  constructor(app, element){
    const thisLinks = this;

    thisLinks.render(element);

    console.log('newLinks', thisLinks);
  }

  render(element){
    const thisLinks = this;

    const generatedHTML = templates.linksPage();

    thisLinks.dom = {};
    thisLinks.dom.wrapper = element;
    thisLinks.dom.wrapper.innerHTML = generatedHTML;
  }
}

class Banners {
  constructor(app, element){
    const thisBanners = this;

    thisBanners.render(element);

    console.log('newBanners', thisBanners);
  }

  render(element){
    const thisBanners = this;

    const generatedHTML = templates.bannersPage();

    thisBanners.dom = {};
    thisBanners.dom.wrapper = element;
    thisBanners.dom.wrapper.innerHTML = generatedHTML;
  }
}

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page Id from href*/
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatepage with that id*/
        thisApp.activatePage(id);

        /**change URL hash */
        window.location.hash = '#/' + id;
      });
    }

  },

  activatePage: function(pageId){
    const thisApp = this;

    /* add class 'active' to matching pages, remove from non-matching*/
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class 'active' to matching link, remove from non-matching*/
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );

    }

    window.location.hash = '#/' + pageId;
  },

  initHome: function(){
    const thisApp = this;

    const homeElem = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(thisApp, homeElem);

  },

  initGeneral: function(){
    const thisApp = this;

    const generalElem = document.querySelector(select.containerOf.general);
    thisApp.general = new General(thisApp, generalElem);

  },

  initLinks: function(){
    const thisApp = this;

    const linksElem = document.querySelector(select.containerOf.links);
    thisApp.links = new Links(thisApp, linksElem);

  },

  initBanners: function(){
    const thisApp = this;

    const bannersElem = document.querySelector(select.containerOf.banners);
    thisApp.banners = new Banners(thisApp, bannersElem);

  },

  init: function(){
    const thisApp = this;

    thisApp.initPages();
    //thisApp.initData();
    //thisApp.initMenu();
    //thisApp.initCart();
    //thisApp.initBooking();
    thisApp.initHome();
    thisApp.initGeneral();
    thisApp.initLinks();
    thisApp.initBanners();
  },

};

app.init();

