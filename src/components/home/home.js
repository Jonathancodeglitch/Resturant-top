function homeHtml() {
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
        <!-- hero section begins-->
        <div class="home-page">
            <div class="hero container">
                <div class="hero_content">
                    <div class="hero_text">it's not just  food, it's an experience, c'mon lets get your  tummy smiling..</div>
                    <button class="btn tab-btn" data-id="food-menu">View Menu</button>
                </div>
                <img class="hero_img" src="../src/components/home/hero-img.jpg" alt="steak">
            </div>
            <!-- hero secton ends-->
            <!-- signature dish -->
            <div class="signature-dish-container container">
                <h1>Our signature Dish</h1>
                <div class="grid-container">
                    <div class="signature-dish">
                        <img src="../src/components/home/Spiced steak with sweet potato wedges.jpg" alt="dish image">
                        <div class="dish-name">steak with sweet potato </div>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p class="dish-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore praesentium, omnis ducimus sit dolorum..</p>
                    </div>
                    <div class="signature-dish">
                        <img src="../src/components/home/Togarashi tomahawk.jpg" alt="dish image">
                        <div class="dish-name">Togarashi tomahawk</div>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p class="dish-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore praesentium, omnis ducimus sit dolorum..</p>
                    </div>
                    <div class="signature-dish">
                        <img src="../src/components/home/Philly cheesesteak.jpg" alt="dish image">
                        <div class="dish-name">Philly cheesesteak</div>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p class="dish-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore praesentium, omnis ducimus sit dolorum..</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer -->
        <footer>
            <p class="footer-text">Copyright © 2023 jonthanCodeGlitch</p>
        </footer>
    `;
}

export default homeHtml;
