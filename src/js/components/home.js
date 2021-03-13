import {templates} from '../settings.js';

class Home {
  constructor(app, element){
    const thisHome = this;

    thisHome.render(element);
    //thisHome.initWidgets(app);

    console.log('newHome', thisHome);
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    //thisHome.dom.carouselElem = document.querySelector(select.widgets.carousel.wrapper);
    //thisHome.dom.orderElem = document.querySelector(select.home.order);
    //thisHome.dom.bookingElem = document.querySelector(select.home.booking);
  }

  initWidgets(app){
    const thisHome = this;
    const thisApp = app;

    thisHome.dom.homeElem.addEventListener('click', function(event){
      const clickedElement = this;
      event.preventDefault();
      const id = clickedElement.getAttribute('id').replace('block-', '');
      thisApp.activatePage(id);
    });

    thisHome.dom.generalElem.addEventListener('click', function(event){
      const clickedElement = this;
      event.preventDefault();
      const id = clickedElement.getAttribute('id').replace('block-', '');
      thisApp.activatePage(id);
    });
  }
}


export default Home;
