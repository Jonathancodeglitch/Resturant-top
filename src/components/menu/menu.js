function menuHtml() {
  return `
        <!-- menu -->
        <div class="food-menu container">
            <h1>Menu</h1>
            <ul>
                <li class="title">Dessert</li>
                <li class="items flex">
                    <span class="food-name">Chocolate torte</span>
                    <span class="underline"></span>
                    <span class="price">$27</span>
                </li>
                <li class="items flex">
                    <span class="food-name">Chocolate mousse</span>
                    <span class="underline"></span>
                    <span class="price">$30</span>
                </li>
                <li class="items flex">
                    <span class="food-name"> Rhubarb custard pie</span>
                    <span class="underline"></span>
                    <span class="price">$70</span>
                </li>
            </ul>
            <ul >
            <li class="title">Appertizer</li>
            <li class="items flex">
                    <span class="food-name">Garlic Butter Steak Bites</span>
                    <span class="underline"></span>
                    <span class="price">$7</span>
                </li>
                <li class="items flex">
                    <span class="food-name">Honey Garlic Steak Bites</span>
                    <span class="underline"></span>
                    <span class="price">$12</span>
                </li>
                <li class="items flex">
                    <span class="food-name">Beef Wellington Bites</span>
                    <span class="underline"></span>
                    <span class="price">$17</span>
                </li>
            
            </ul>
            <ul>
            <li class="title">Special</li>
            <li class="items flex">
                    <span class="food-name">steak with sweet potato </span>
                    <span class="underline"></span>
                    <span class="price">$200</span>
                </li>
                <li class="items flex">
                    <span class="food-name">Togarashi tomahawk</span>
                    <span class="underline"></span>
                    <span class="price">$170</span>
                </li>
                <li class="items flex">
                    <span class="food-name">Philly cheesesteak</span>
                    <span class="underline"></span>
                    <span class="price">$700</span>
                </li>
            </ul>
        </div>
    `;
}

export { menuHtml };
