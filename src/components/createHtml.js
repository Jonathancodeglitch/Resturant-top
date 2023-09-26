import homeHtml from './home/home';
import createHeader from './header';
import createFooterHtnl from './footer';

function createElement() {
  const content = document.getElementById('content');
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.innerHTML = homeHtml();

  //add html to Dom
  content.innerHTML = createHeader();
  content.appendChild(main);
  content.innerHTML += createFooterHtnl();
}

export default createElement;
