import createElement from './createHtml';
import toggleNav from './nav_toggle';

function pageLoad() {
  createElement();
  //target the home tab btn and add a active state to it
  const homeTabBtn = document.querySelector('[data-id="home"]');
  homeTabBtn.classList.add('active');
  //toggle navigation
  toggleNav();
}

export { pageLoad };
