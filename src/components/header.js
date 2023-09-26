
const createHeader = () => {
  return `
    <!--navigation begins -->
    <header>
        <div class="container flex-apart">
            <div class="logo">Steak<span>House</span></div>
            <div class="navigation">
               <!--  <i class="fa-solid fa-xmark"></i> -->
                <i class="fa-solid fa-burger menu" id="menu"></i>
                <ul class="nav-links flex" id="nav-links">
                    <li class="link tab-btn" data-id="home">Home</li>
                    <li class="link tab-btn" data-id="food-menu">Menu</li>
                    <li class="link tab-btn" data-id="contact">Contact</li>
                </ul>
            </div>
        </div>
    </header>
    <!--navigation ends -->
    `;
};

export default createHeader;
