function contactHtml() {
  return `
        <!--navigation begins -->
        <header>
            <div class="container flex-apart">
                <div class="logo">Steak<span>House</span></div>
                <div class="navigation">
                    <!--  <i class="fa-solid fa-xmark"></i> -->
                    <i class="fa-solid fa-burger menu" id="menu"></i>
                    <ul class="nav-links flex" id="nav-links" data-nav>
                        <li class="link tab-btn" data-id="home">Home</li>
                        <li class="link tab-btn" data-id="food-menu">Menu</li>
                        <li class="link tab-btn" data-id="contact">Contact</li>
                    </ul>
                </div>
            </div>
        </header>
        <!--navigation ends -->
        <!-- contact -->
        <div class="contact container">
            <h1>Contact Us</h1>
            <ul class="contact-info">
                <li class="flex"><i class="fa-solid fa-phone"></i> +555-555-555</li>
                <li  class="flex"><i class="fa-solid fa-envelope"></i>steakhouse@gmail.com</li>
                <li  class="flex"><i class="fa-solid fa-location-dot"></i> steak house city</li>
            </ul>
        </div>
        <!-- footer -->
        <footer>
            <p class="footer-text">Copyright © 2023 jonthanCodeGlitch</p>
        </footer>
    `;
}

export default contactHtml;
