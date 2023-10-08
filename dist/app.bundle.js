/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactHtml);


/***/ }),

/***/ "./src/components/home/home.js":
/*!*************************************!*\
  !*** ./src/components/home/home.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeHtml);


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuHtml: () => (/* binding */ menuHtml)
/* harmony export */ });
function menuHtml() {
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
        <!-- footer -->
        <footer>
            <p class="footer-text">Copyright © 2023 jonthanCodeGlitch</p>
        </footer>
    `;
}




/***/ }),

/***/ "./src/components/nav_toggle.js":
/*!**************************************!*\
  !*** ./src/components/nav_toggle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleNav: () => (/* binding */ toggleNav)
/* harmony export */ });

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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home */ "./src/components/home/home.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");
/* harmony import */ var _components_nav_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav_toggle */ "./src/components/nav_toggle.js");





const content = document.getElementById('content');

//when page load initially
const onPageLoad = (() => {
  //display the home page section
  content.innerHTML = (0,_components_home_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
      content.innerHTML = (0,_components_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
      content.innerHTML = (0,_components_menu__WEBPACK_IMPORTED_MODULE_0__.menuHtml)();
      releaseActiveState();
      document.querySelector("[data-id='food-menu']").classList.add('active');
    }
  };

  //menu tab
  const homeTab = (e) => {
    let target = e.target;
    let menuBtn = target.dataset.id;
    if (menuBtn == 'home') {
      content.innerHTML = (0,_components_home_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    (0,_components_nav_toggle__WEBPACK_IMPORTED_MODULE_3__.toggleNav)(e, nav);
  })
 
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0I7Ozs7Ozs7Ozs7Ozs7OztBQ3BGcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7Ozs7Ozs7VUNmckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNDO0FBQ0M7QUFDSztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUVBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrREFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlFQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBUztBQUNiLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC10b3AvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC10b3AvLi9zcmMvY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL3NyYy9jb21wb25lbnRzL25hdl90b2dnbGUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC10b3AvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3RIdG1sKCkge1xyXG4gIHJldHVybiBgXHJcbiAgICAgICAgPCEtLW5hdmlnYXRpb24gYmVnaW5zIC0tPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmxleC1hcGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5TdGVhazxzcGFuPkhvdXNlPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJ1cmdlciBtZW51XCIgaWQ9XCJtZW51XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdi1saW5rcyBmbGV4XCIgaWQ9XCJuYXYtbGlua3NcIiBkYXRhLW5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGluayB0YWItYnRuXCIgZGF0YS1pZD1cImhvbWVcIj5Ib21lPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGluayB0YWItYnRuXCIgZGF0YS1pZD1cImZvb2QtbWVudVwiPk1lbnU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaW5rIHRhYi1idG5cIiBkYXRhLWlkPVwiY29udGFjdFwiPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPCEtLW5hdmlnYXRpb24gZW5kcyAtLT5cclxuICAgICAgICA8IS0tIGNvbnRhY3QgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJmbGV4XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1waG9uZVwiPjwvaT4gKzU1NS01NTUtNTU1PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSAgY2xhc3M9XCJmbGV4XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbnZlbG9wZVwiPjwvaT5zdGVha2hvdXNlQGdtYWlsLmNvbTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgIGNsYXNzPVwiZmxleFwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbG9jYXRpb24tZG90XCI+PC9pPiBzdGVhayBob3VzZSBjaXR5PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIGZvb3RlciAtLT5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvb3Rlci10ZXh0XCI+Q29weXJpZ2h0IMKpIDIwMjMgam9udGhhbkNvZGVHbGl0Y2g8L3A+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICBgO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0SHRtbDtcclxuIiwiZnVuY3Rpb24gaG9tZUh0bWwoKSB7XHJcbiAgcmV0dXJuIGBcclxuICAgICAgICA8IS0tbmF2aWdhdGlvbiBiZWdpbnMgLS0+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmbGV4LWFwYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlN0ZWFrPHNwYW4+SG91c2U8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYnVyZ2VyIG1lbnVcIiBpZD1cIm1lbnVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2LWxpbmtzIGZsZXhcIiBpZD1cIm5hdi1saW5rc1wiIGRhdGEtbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaW5rIHRhYi1idG5cIiBkYXRhLWlkPVwiaG9tZVwiPkhvbWU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaW5rIHRhYi1idG5cIiBkYXRhLWlkPVwiZm9vZC1tZW51XCI+TWVudTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpbmsgdGFiLWJ0blwiIGRhdGEtaWQ9XCJjb250YWN0XCI+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8IS0tbmF2aWdhdGlvbiBlbmRzIC0tPlxyXG4gICAgICAgIDwhLS0gaGVybyBzZWN0aW9uIGJlZ2lucy0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lLXBhZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8gY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyb19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm9fdGV4dFwiPml0J3Mgbm90IGp1c3QgIGZvb2QsIGl0J3MgYW4gZXhwZXJpZW5jZSwgYydtb24gbGV0cyBnZXQgeW91ciAgdHVtbXkgc21pbGluZy4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biB0YWItYnRuXCIgZGF0YS1pZD1cImZvb2QtbWVudVwiPlZpZXcgTWVudTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaGVyb19pbWdcIiBzcmM9XCIuLi9zcmMvY29tcG9uZW50cy9ob21lL2hlcm8taW1nLmpwZ1wiIGFsdD1cInN0ZWFrXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIGhlcm8gc2VjdG9uIGVuZHMtLT5cclxuICAgICAgICAgICAgPCEtLSBzaWduYXR1cmUgZGlzaCAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZ25hdHVyZS1kaXNoLWNvbnRhaW5lciBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5PdXIgc2lnbmF0dXJlIERpc2g8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZ25hdHVyZS1kaXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2NvbXBvbmVudHMvaG9tZS9TcGljZWQgc3RlYWsgd2l0aCBzd2VldCBwb3RhdG8gd2VkZ2VzLmpwZ1wiIGFsdD1cImRpc2ggaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc2gtbmFtZVwiPnN0ZWFrIHdpdGggc3dlZXQgcG90YXRvIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyLWhhbGYtc3Ryb2tlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkaXNoLWluZm9cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBpbnZlbnRvcmUgcHJhZXNlbnRpdW0sIG9tbmlzIGR1Y2ltdXMgc2l0IGRvbG9ydW0uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lnbmF0dXJlLWRpc2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZ2FyYXNoaSB0b21haGF3ay5qcGdcIiBhbHQ9XCJkaXNoIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNoLW5hbWVcIj5Ub2dhcmFzaGkgdG9tYWhhd2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3Rhci1oYWxmLXN0cm9rZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzaC1pbmZvXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gaW52ZW50b3JlIHByYWVzZW50aXVtLCBvbW5pcyBkdWNpbXVzIHNpdCBkb2xvcnVtLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZ25hdHVyZS1kaXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2NvbXBvbmVudHMvaG9tZS9QaGlsbHkgY2hlZXNlc3RlYWsuanBnXCIgYWx0PVwiZGlzaCBpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzaC1uYW1lXCI+UGhpbGx5IGNoZWVzZXN0ZWFrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXItaGFsZi1zdHJva2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc2gtaW5mb1wiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhhcnVtIGludmVudG9yZSBwcmFlc2VudGl1bSwgb21uaXMgZHVjaW11cyBzaXQgZG9sb3J1bS4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gZm9vdGVyIC0tPlxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLXRleHRcIj5Db3B5cmlnaHQgwqkgMjAyMyBqb250aGFuQ29kZUdsaXRjaDwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVIdG1sO1xyXG4iLCJmdW5jdGlvbiBtZW51SHRtbCgpIHtcclxuICByZXR1cm4gYFxyXG4gICAgICAgIDwhLS1uYXZpZ2F0aW9uIGJlZ2lucyAtLT5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXgtYXBhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+U3RlYWs8c3Bhbj5Ib3VzZTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1idXJnZXIgbWVudVwiIGlkPVwibWVudVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYtbGlua3MgZmxleFwiIGlkPVwibmF2LWxpbmtzXCIgZGF0YS1uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpbmsgdGFiLWJ0blwiIGRhdGEtaWQ9XCJob21lXCI+SG9tZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpbmsgdGFiLWJ0blwiIGRhdGEtaWQ9XCJmb29kLW1lbnVcIj5NZW51PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGluayB0YWItYnRuXCIgZGF0YS1pZD1cImNvbnRhY3RcIj5Db250YWN0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwhLS1uYXZpZ2F0aW9uIGVuZHMgLS0+XHJcbiAgICAgICAgPCEtLSBtZW51IC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLW1lbnUgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5NZW51PC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGl0bGVcIj5EZXNzZXJ0PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1zIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvb2QtbmFtZVwiPkNob2NvbGF0ZSB0b3J0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDI3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1zIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvb2QtbmFtZVwiPkNob2NvbGF0ZSBtb3Vzc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPiQzMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtcyBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb29kLW5hbWVcIj4gUmh1YmFyYiBjdXN0YXJkIHBpZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDcwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsID5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwidGl0bGVcIj5BcHBlcnRpemVyPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbXMgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1uYW1lXCI+R2FybGljIEJ1dHRlciBTdGVhayBCaXRlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbXMgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1uYW1lXCI+SG9uZXkgR2FybGljIFN0ZWFrIEJpdGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMTI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbXMgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1uYW1lXCI+QmVlZiBXZWxsaW5ndG9uIEJpdGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMTc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ0aXRsZVwiPlNwZWNpYWw8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtcyBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb29kLW5hbWVcIj5zdGVhayB3aXRoIHN3ZWV0IHBvdGF0byA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPiQyMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbXMgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1uYW1lXCI+VG9nYXJhc2hpIHRvbWFoYXdrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMTcwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1zIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvb2QtbmFtZVwiPlBoaWxseSBjaGVlc2VzdGVhazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDcwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBmb290ZXIgLS0+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb290ZXItdGV4dFwiPkNvcHlyaWdodCDCqSAyMDIzIGpvbnRoYW5Db2RlR2xpdGNoPC9wPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgYDtcclxufVxyXG5cclxuZXhwb3J0IHsgbWVudUh0bWwgfTtcclxuIiwiXHJcbi8vdG9nZ2xlIG5hdmlnYXRpb25cclxuY29uc3QgdG9nZ2xlTmF2ID0gKGUsIG5hdikgPT4ge1xyXG4gIGxldCBidG4gPSBlLnRhcmdldDtcclxuICBpZiAoYnRuLmlkID09ICdtZW51Jykge1xyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWJ1cmdlcicpKSB7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVwbGFjZSgnZmEtYnVyZ2VyJywgJ2ZhLXhtYXJrJyk7XHJcbiAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZXBsYWNlKCdmYS14bWFyaycsICdmYS1idXJnZXInKTtcclxuICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdG9nZ2xlTmF2IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWVudUh0bWwgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudSc7XHJcbmltcG9ydCBob21lSHRtbCBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lJztcclxuaW1wb3J0IGNvbnRhY3RIdG1sIGZyb20gJy4vY29tcG9uZW50cy9jb250YWN0JztcclxuaW1wb3J0IHsgdG9nZ2xlTmF2IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdl90b2dnbGUnO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4vL3doZW4gcGFnZSBsb2FkIGluaXRpYWxseVxyXG5jb25zdCBvblBhZ2VMb2FkID0gKCgpID0+IHtcclxuICAvL2Rpc3BsYXkgdGhlIGhvbWUgcGFnZSBzZWN0aW9uXHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBob21lSHRtbCgpO1xyXG4gIC8vYW5kIG1ha2UgdGhlIGhvbWUgYnRuIGFjdGl2ZVxyXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaWQ9J2hvbWUnXVwiKTtcclxuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59KSgpO1xyXG5cclxuLy9zd2l0Y2ggdGFiIGxvZ2l4XHJcbmNvbnN0IHN3aXRjaFRhYiA9ICgoKSA9PiB7XHJcbiAgLy9jb250YWN0IHRhYlxyXG4gIGNvbnN0IGNvbnRhY3RUYWIgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IGNvbnRhY3RCdG4gPSB0YXJnZXQuZGF0YXNldC5pZDtcclxuXHJcbiAgICBpZiAoY29udGFjdEJ0biA9PSAnY29udGFjdCcpIHtcclxuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBjb250YWN0SHRtbCgpO1xyXG4gICAgICByZWxlYXNlQWN0aXZlU3RhdGUoKTtcclxuICAgICAgLy9hZGQgYWN0aXZlIHN0YXRlIHRvIHRoZSBjdXJyZW50IGJ1dHRvbiBjbGlja1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaWQ9J2NvbnRhY3QnXVwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL21lbnUgdGFiXHJcbiAgY29uc3QgbWVudVRhYiA9IChlKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICBsZXQgbWVudUJ0biA9IHRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgaWYgKG1lbnVCdG4gPT0gJ2Zvb2QtbWVudScpIHtcclxuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBtZW51SHRtbCgpO1xyXG4gICAgICByZWxlYXNlQWN0aXZlU3RhdGUoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlkPSdmb29kLW1lbnUnXVwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL21lbnUgdGFiXHJcbiAgY29uc3QgaG9tZVRhYiA9IChlKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICBsZXQgbWVudUJ0biA9IHRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgaWYgKG1lbnVCdG4gPT0gJ2hvbWUnKSB7XHJcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gaG9tZUh0bWwoKTtcclxuICAgICAgcmVsZWFzZUFjdGl2ZVN0YXRlKCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pZD0naG9tZSddXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb250YWN0VGFiLFxyXG4gICAgbWVudVRhYixcclxuICAgIGhvbWVUYWIsXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbi8vcmVsZWFzZSBhY3RpdmUgc3RhdGUgZnJvbSBldmVyeSBvdGhlciBuYXYgYnV0dG9uc1xyXG5jb25zdCByZWxlYXNlQWN0aXZlU3RhdGUgPSAoKSA9PiB7XHJcbiAgbGV0IG5hdkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pZF0nKTtcclxuICBuYXZCdG5zLmZvckVhY2goKG5hdkJ0bikgPT4ge1xyXG4gICAgbmF2QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLyogZXZlbnRzICovXHJcbmNvbnNvbGUubG9nKG5hdmlnYXRpb24pXHJcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIHN3aXRjaFRhYi5ob21lVGFiKGUpO1xyXG4gIHN3aXRjaFRhYi5jb250YWN0VGFiKGUpO1xyXG4gIHN3aXRjaFRhYi5tZW51VGFiKGUpO1xyXG4gIC8vdG9nZ2xlIG5hdmlnYXRpb25cclxuICBjb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmF2XScpO1xyXG4gIG5hdmlnYXRpb24uZm9yRWFjaChuYXY9PntcclxuICAgIHRvZ2dsZU5hdihlLCBuYXYpO1xyXG4gIH0pXHJcbiBcclxufSk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=