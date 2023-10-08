
//toggle navigation
const toggleNav = (e, nav) => {
  let btn = e.target;
  if (btn.id == 'menu') {
    if (btn.classList.contains('fa-burger')) {
      btn.classList.replace('fa-burger', 'fa-xmark');
      nav.style.display = 'flex';
    } else {
      btn.classList.replace('fa-xmark', 'fa-burger');
      nav.style.display = 'none';
    }
  }
};

export { toggleNav };
