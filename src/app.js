import { menuHtml } from './components/menu';
import homeHtml from './components/home/home';
import contactHtml from './components/contact';
import { toggleNav } from './components/nav_toggle';

const content = document.getElementById('content');

//when page load initially
const onPageLoad = (() => {
  //display the home page section
  content.innerHTML = homeHtml();
  //and make the home btn active
  const homeBtn = document.querySelector("[data-id='home']");
  homeBtn.classList.add('active');
})();

//switch tab logix
const switchTab = (() => {
  //contact tab
  const contactTab = (e) => {
    let target = e.target;
    let contactBtn = target.dataset.id;

    if (contactBtn == 'contact') {
      content.innerHTML = contactHtml();
      releaseActiveState();
      //add active state to the current button click
      document.querySelector("[data-id='contact']").classList.add('active');
    }
  };

  //menu tab
  const menuTab = (e) => {
    let target = e.target;
    let menuBtn = target.dataset.id;
    if (menuBtn == 'food-menu') {
      content.innerHTML = menuHtml();
      releaseActiveState();
      document.querySelector("[data-id='food-menu']").classList.add('active');
    }
  };

  //menu tab
  const homeTab = (e) => {
    let target = e.target;
    let menuBtn = target.dataset.id;
    if (menuBtn == 'home') {
      content.innerHTML = homeHtml();
      releaseActiveState();
      document.querySelector("[data-id='home']").classList.add('active');
    }
  };

  return {
    contactTab,
    menuTab,
    homeTab,
  };
})();

//release active state from every other nav buttons
const releaseActiveState = () => {
  let navBtns = document.querySelectorAll('[data-id]');
  navBtns.forEach((navBtn) => {
    navBtn.classList.remove('active');
  });
};

/* events */
console.log(navigation)
content.addEventListener('click', (e) => {
  switchTab.homeTab(e);
  switchTab.contactTab(e);
  switchTab.menuTab(e);
  //toggle navigation
  const navigation = document.querySelectorAll('[data-nav]');
  navigation.forEach(nav=>{
    toggleNav(e, nav);
  })
 
});

