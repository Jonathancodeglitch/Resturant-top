const toggleNav = () => {
  const menu = document.getElementById('menu');
  const navigation = document.getElementById('nav-links');

  menu.addEventListener('click', (e) => {
    let btn = e.target;
    if (btn.id == 'menu') {
      if (btn.classList.contains('fa-burger')) {
        btn.classList.replace('fa-burger', 'fa-xmark');
        navigation.style.display = 'flex';
      } else {
        btn.classList.replace('fa-xmark', 'fa-burger');
        navigation.style.display = 'none';
      }
    }
  });
};

export default toggleNav;
