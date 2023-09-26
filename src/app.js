//import the initial page load funvtion from another module
//set up your project to use tab browsing to navigate between home,menu,contacts
//put the content of each tab inside its own module
//write the tab switching logic inside of the app.js

import './style.css';
import { menuHtml } from './components/menu/menu';
import homeHtml from './components/home/home';
import contactHtml from './components/contact/contact';
import { pageLoad } from './components/pageload';

//on pageload show home page
pageLoad();

const content = document.getElementById('content');

function switchTabs(e){
    let target = e.target;
    let action = target.classList.contains('tab-btn');
    let main = document.getElementById('main');
  
    if (action) {
      //remove active state from all btn
      const tabBtns = document.querySelectorAll('[data-id]');
      tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove('active');
      });
      //add active state to clicked btn
      target.classList.add('active');
  
      //tab switchimg logic
      if (target.dataset.id == 'home') {
        main.innerHTML = homeHtml();
      } else if (target.dataset.id == 'food-menu') {
        document.querySelector('[data-id="food-menu"]').classList.add('active');
        main.innerHTML = menuHtml();
      } else if (target.dataset.id == 'contact') {
        main.innerHTML = contactHtml();
      }
    }
}

content.addEventListener('click', switchTabs);
