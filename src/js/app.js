import {select, classNames, templates} from './settings.js';

//import Home from  './components/Home.js';


const app = {
  initPages: function(){
    const thisApp = this;

    //thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const pageRendered = document.querySelectorAll(select.containerOf.pages);

    const idFromHash = window.location.hash.replace('#/', '');

    //let pageMatchingHash = thisApp.pages[0].id;

    //for(let page of thisApp.pages){
    //  if(page.id == idFromHash){
    //    pageMatchingHash = page.id;
    //    break;
    //  }
    //}

    //thisApp.activatePage(pageMatchingHash);
    thisApp.render(pageRendered, idFromHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page Id from href*/
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatepage with that id*/
        thisApp.activatePage(id);
        //const container = '.' + id + '-page';
        //const element = document.querySelector(container);

        thisApp.render(pageRendered, id);
        /**change URL hash */
        //window.location.hash = '#/' + id;
      });
    }

  },

  activatePage: function(pageId){
    const thisApp = this;

    /* add class 'active' to matching pages, remove from non-matching*/
    //for(let page of thisApp.pages){
    //  page.classList.toggle(classNames.pages.active, page.id == pageId);

    //}

    /* add class 'active' to matching link, remove from non-matching*/
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );

    }

    window.location.hash = '#/' + pageId;
  },

  render(element, id){
    const thisApp = this;
    let generatedHTML = '';
    //const tmp = id + 'Page';
    if (id == 'home') {
      generatedHTML = templates.homePage();
    } else if (id == 'general') {
      generatedHTML = templates.generalPage();
    } else if (id == 'links') {
      generatedHTML = templates.linksPage();
    }

    thisApp.dom = {};
    thisApp.dom.wrapper = element;
    thisApp.dom.wrapper.innerHTML = generatedHTML;

    //thisHome.dom.carouselElem = document.querySelector(select.widgets.carousel.wrapper);
    //thisHome.dom.orderElem = document.querySelector(select.home.order);
    //thisHome.dom.bookingElem = document.querySelector(select.home.booking);
  },

  //initHome: function(){
  //  const thisApp = this;

  //  const homeElem = document.querySelector(select.containerOf.home);
  //  thisApp.home = new Home(thisApp, homeElem);

  //},

  init: function(){
    const thisApp = this;

    thisApp.initPages();
    //thisApp.initData();
    //thisApp.initMenu();
    //thisApp.initCart();
    //thisApp.initBooking();
    //thisApp.initHome();
  },

};

app.init();

