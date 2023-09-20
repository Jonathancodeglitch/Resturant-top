const toggleBtn = document.getElementById('menu');
const navigation = document.getElementById('nav-links');

const toggleNav = (e) => {
  let btn = e.target;
  if (btn.classList.contains('fa-burger')) {
    btn.classList.replace('fa-burger', 'fa-xmark');
    navigation.style.display = 'flex';
  } else {
    btn.classList.replace('fa-xmark', 'fa-burger');
    navigation.style.display = 'none';
  }
};

toggleBtn.addEventListener('click', toggleNav);

export default toggleNav;
