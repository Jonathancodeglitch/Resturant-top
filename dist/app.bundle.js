/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./components/home/home-background.jpg */ "./src/components/home/home-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --transperent-background: rgba(0,0,0,0.4);
    --light-dark:rgba(0,0,0,0.8);
    --active:  rgb(255, 72, 0);
}

/* reset */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

ul{
  list-style-type: none;
}

body{
  position: relative;
  line-height: 1.2;
  font-family: 'Roboto', sans-serif;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  width: 100%;
  min-height: 100vh;
  background-size:cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-bottom: 100px;
}

img{
  max-width: 100%;
}

/* utilities */
.container{
    margin: 0 auto;
    max-width: 1100px;
    width: 90%;
}

.flex{
    display:flex;
    align-items: center;
}

.flex-apart{
    display:flex;
    align-items: center;
    justify-content: space-between;
}

         /* home page section*/

/* navigation */

header{
    position: fixed;
    padding:20px 0px;
    background-color:rgba(0,0,0,1);
    top: 0;
    left: 0;
    right: 0;
}

.logo{
    font-size: 1.4rem;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
}

.logo > span{
    color: var(--active);
}

.nav-links .link{
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.1rem;
    color: white;
}


.nav-links .link.active{
    color: var(--active) !important;
}

.menu{
    display: none;
}

/* mobile navigation */
@media(max-width:500px){

    .menu{
        font-size: 1.7rem;
        color: white;
        cursor: pointer;
        display: block;
    }
    
    .navigation{
        position: relative;
    }
    
    .nav-links{
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        right: 0px;
        top: 35px;
        background-color:var(--light-dark);
        padding: 20px 40px 20px 20px;
        gap: 15px;
        padding-right: 50px;
        display: none;
        z-index: 999;
    }
  
    .nav-links .link:active {
        font-weight: bolder;
       color: var(--active);
    }
}

/* hero section*/

.hero{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 120px;
    padding: 30px 20px;
    background-color: var(--transperent-background);
    gap: 40px;
}

.hero_content{
   width: 100%;
   max-width: 400px;
}

.hero_text{
    font-size: clamp(1.7rem,7vw,2.5rem);
    font-weight: 700;
    color: white;
    line-height: 1.3;
    font-style: italic;
    text-transform: capitalize;
    width: 100%;
}

.hero .btn{
    background-color: var(--active);
    color: #fff;
    border: none;
    font-weight: 400;
    font-size: 1.2rem;
    padding:8px 25px;
    margin-top: 20px;
    border-radius: 7px;
    display: inline-block;
    transition: all .25s ease-in-out;
    cursor: pointer;
}

.hero .btn:hover,
.hero .btn:active{
    transform: scale(1.1);
}


.hero_img{
    max-width: 450px;
    height:280px;
    width: 100%;
    border-radius:20px;
}

/* signature dish */

.signature-dish-container{
   background-color: var(--transperent-background);
   border-radius: 20px;
   padding: 30px;
   margin-top: 90px;
   margin-bottom: 90px;
}

.signature-dish-container h1{
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    
    font-size: clamp(2rem,8vw,3rem);
}

.grid-container{
    margin-top: 30px;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 30px;
    grid-template-columns:1fr; 
    
}

.signature-dish{
    background-color: var(--light-dark);
    padding: 25px;
    height: 400px;
}

.signature-dish img{
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
  height: 200px;
}

.dish-name{
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffff;
    text-transform: uppercase;
}

.ratings{
    display: flex;
    align-items: center;
    margin-top:3px;
}

.ratings i{
    color: rgb(255, 187, 0);
}

.dish-info{
    margin-top: 8px;
    font-size: 1.1rem;
    color: #ffffff;
    opacity: .70;
    line-height: .96;
}

/* menu section*/

.food-menu{
    margin-top:120px;
    margin-bottom: 100px;
    background-color: var(--transperent-background);
    padding: 60px 40px;
    color: #fff;
}

.food-menu h1{
   font-size: 2.3rem;
   font-weight: 700;
   text-align: center;
}

.food-menu .title{
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 20px 0px;
    font-family: 'Lobster', cursive;
    text-align: center;
}

.items{
    gap: 15px;
}

.items + .items{
    margin-top: 15px;
}

.items .food-name,
.items .price{
   font-size: 1rem;
   text-transform: capitalize;  
}

.items .underline{
    flex: 1;
    border-bottom: 3px dashed #fff;
}

/* contact us */

.contact{
    margin-top: 120px;
    background-color: var(--transperent-background);
    padding: 20px 10px;
    padding-bottom: 60px;
}

.contact h1{
    font-size: 2.3rem;
    font-weight: 700;
    text-align: center;
    color: #fff;
}

.contact-info{
    margin-top: 20px;
    color: #fff;
}

.contact-info > *+*{
   margin-top: 15px;
}

.contact-info li{
    gap: 10px;
    font-size:1.2rem;
    font-weight: 400;
}

.contact-info li i{
  font-size: 1rem;
  padding: 10px;
  border-radius: 50%;
  background-color: var(--light-dark);
}

/* footer */

footer{
    background-color: rgba(0,0,0,1);
    padding: 20px;
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.footer-text{
    color: #ffff;
    text-align: center;
    text-transform: capitalize;
    font-weight: 400;
    font-size: .90rem;
}

/* desktop view */

@media(min-width:501px){

   /* navigation */
   .nav-links {
      gap: 25px;
      display: flex !important;
   }

    .nav-links .link {
        color: white;
        cursor: pointer;
    }

    .nav-links .link:hover {
        font-weight: bolder;
        color: var(--active);
    }

    /* hero */
    .hero{
        gap: 20px;
        justify-content: space-between;
    }

    /* signature dish */
    .grid-container{
        gap: 30px;
        grid-template-columns: repeat(auto-fill,300px); 
    }

    .hero_content{
        width: 50%;
        max-width: 400px;
    }

    .hero_img{
        width: 40%;
    }

    /* food menu */

    .items .food-name,
    .items .price{
       font-size: 1.3rem;
       text-transform: capitalize;  
    }

    /* menu */

    .contact-info li{
        justify-content: center;
    }

    /* footer */
    footer{
        padding: 30px;
    }

    .footer-text{
        font-size: 1.1rem;
    }
}

@media(min-width:690px){

    .logo{
        font-size: 1.7rem;
    }

    .nav-links {
        gap: 50px;
     }
  
    .nav-links .link {
        font-size: 1.3rem;
    }

    /* hero */
    .hero{
        padding: 30px 45px;
    }

}

@media(min-width:890px){
    .logo{
        font-size: 2rem;
    }

    .nav-links {
        gap: 60px;
     }
  
    .nav-links .link {
        font-size: 1.4rem;
    }

     /* hero */
    .hero{
        margin-top: 150px;
        padding: 40px 60px;
    }

    /* food menu */

    .food-menu h1{
        font-size: 2.3rem;
    }

    .food-menu .title{
        font-size: 1.7rem;
    }

    .items .food-name,
    .items .price{
    font-size: 1.5rem;
    text-transform: capitalize;  
    }

    .items + .items{
        margin-top: 30px;
    }

    .food-menu{
        margin-top:150px;
    }

    /* contact */
    .contact{
        margin-top: 150px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n\r\n\r\n:root{\r\n    --transperent-background: rgba(0,0,0,0.4);\r\n    --light-dark:rgba(0,0,0,0.8);\r\n    --active:  rgb(255, 72, 0);\r\n}\r\n\r\n/* reset */\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nul{\r\n  list-style-type: none;\r\n}\r\n\r\nbody{\r\n  position: relative;\r\n  line-height: 1.2;\r\n  font-family: 'Roboto', sans-serif;\r\n  background: url('./components/home/home-background.jpg');\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background-size:cover;\r\n  background-position: center bottom;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  padding-bottom: 100px;\r\n}\r\n\r\nimg{\r\n  max-width: 100%;\r\n}\r\n\r\n/* utilities */\r\n.container{\r\n    margin: 0 auto;\r\n    max-width: 1100px;\r\n    width: 90%;\r\n}\r\n\r\n.flex{\r\n    display:flex;\r\n    align-items: center;\r\n}\r\n\r\n.flex-apart{\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n         /* home page section*/\r\n\r\n/* navigation */\r\n\r\nheader{\r\n    position: fixed;\r\n    padding:20px 0px;\r\n    background-color:rgba(0,0,0,1);\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.logo{\r\n    font-size: 1.4rem;\r\n    font-weight: 600;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.logo > span{\r\n    color: var(--active);\r\n}\r\n\r\n.nav-links .link{\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    font-size: 1.1rem;\r\n    color: white;\r\n}\r\n\r\n\r\n.nav-links .link.active{\r\n    color: var(--active) !important;\r\n}\r\n\r\n.menu{\r\n    display: none;\r\n}\r\n\r\n/* mobile navigation */\r\n@media(max-width:500px){\r\n\r\n    .menu{\r\n        font-size: 1.7rem;\r\n        color: white;\r\n        cursor: pointer;\r\n        display: block;\r\n    }\r\n    \r\n    .navigation{\r\n        position: relative;\r\n    }\r\n    \r\n    .nav-links{\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        position: absolute;\r\n        right: 0px;\r\n        top: 35px;\r\n        background-color:var(--light-dark);\r\n        padding: 20px 40px 20px 20px;\r\n        gap: 15px;\r\n        padding-right: 50px;\r\n        display: none;\r\n        z-index: 999;\r\n    }\r\n  \r\n    .nav-links .link:active {\r\n        font-weight: bolder;\r\n       color: var(--active);\r\n    }\r\n}\r\n\r\n/* hero section*/\r\n\r\n.hero{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: flex-start;\r\n    margin-top: 120px;\r\n    padding: 30px 20px;\r\n    background-color: var(--transperent-background);\r\n    gap: 40px;\r\n}\r\n\r\n.hero_content{\r\n   width: 100%;\r\n   max-width: 400px;\r\n}\r\n\r\n.hero_text{\r\n    font-size: clamp(1.7rem,7vw,2.5rem);\r\n    font-weight: 700;\r\n    color: white;\r\n    line-height: 1.3;\r\n    font-style: italic;\r\n    text-transform: capitalize;\r\n    width: 100%;\r\n}\r\n\r\n.hero .btn{\r\n    background-color: var(--active);\r\n    color: #fff;\r\n    border: none;\r\n    font-weight: 400;\r\n    font-size: 1.2rem;\r\n    padding:8px 25px;\r\n    margin-top: 20px;\r\n    border-radius: 7px;\r\n    display: inline-block;\r\n    transition: all .25s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n\r\n.hero .btn:hover,\r\n.hero .btn:active{\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n.hero_img{\r\n    max-width: 450px;\r\n    height:280px;\r\n    width: 100%;\r\n    border-radius:20px;\r\n}\r\n\r\n/* signature dish */\r\n\r\n.signature-dish-container{\r\n   background-color: var(--transperent-background);\r\n   border-radius: 20px;\r\n   padding: 30px;\r\n   margin-top: 90px;\r\n   margin-bottom: 90px;\r\n}\r\n\r\n.signature-dish-container h1{\r\n    text-align: center;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    \r\n    font-size: clamp(2rem,8vw,3rem);\r\n}\r\n\r\n.grid-container{\r\n    margin-top: 30px;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 30px;\r\n    grid-template-columns:1fr; \r\n    \r\n}\r\n\r\n.signature-dish{\r\n    background-color: var(--light-dark);\r\n    padding: 25px;\r\n    height: 400px;\r\n}\r\n\r\n.signature-dish img{\r\n  border-radius: 10px;\r\n  display: inline-block;\r\n  margin-bottom: 15px;\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.dish-name{\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    color: #ffff;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.ratings{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top:3px;\r\n}\r\n\r\n.ratings i{\r\n    color: rgb(255, 187, 0);\r\n}\r\n\r\n.dish-info{\r\n    margin-top: 8px;\r\n    font-size: 1.1rem;\r\n    color: #ffffff;\r\n    opacity: .70;\r\n    line-height: .96;\r\n}\r\n\r\n/* menu section*/\r\n\r\n.food-menu{\r\n    margin-top:120px;\r\n    margin-bottom: 100px;\r\n    background-color: var(--transperent-background);\r\n    padding: 60px 40px;\r\n    color: #fff;\r\n}\r\n\r\n.food-menu h1{\r\n   font-size: 2.3rem;\r\n   font-weight: 700;\r\n   text-align: center;\r\n}\r\n\r\n.food-menu .title{\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n    margin: 20px 0px;\r\n    font-family: 'Lobster', cursive;\r\n    text-align: center;\r\n}\r\n\r\n.items{\r\n    gap: 15px;\r\n}\r\n\r\n.items + .items{\r\n    margin-top: 15px;\r\n}\r\n\r\n.items .food-name,\r\n.items .price{\r\n   font-size: 1rem;\r\n   text-transform: capitalize;  \r\n}\r\n\r\n.items .underline{\r\n    flex: 1;\r\n    border-bottom: 3px dashed #fff;\r\n}\r\n\r\n/* contact us */\r\n\r\n.contact{\r\n    margin-top: 120px;\r\n    background-color: var(--transperent-background);\r\n    padding: 20px 10px;\r\n    padding-bottom: 60px;\r\n}\r\n\r\n.contact h1{\r\n    font-size: 2.3rem;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.contact-info{\r\n    margin-top: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.contact-info > *+*{\r\n   margin-top: 15px;\r\n}\r\n\r\n.contact-info li{\r\n    gap: 10px;\r\n    font-size:1.2rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.contact-info li i{\r\n  font-size: 1rem;\r\n  padding: 10px;\r\n  border-radius: 50%;\r\n  background-color: var(--light-dark);\r\n}\r\n\r\n/* footer */\r\n\r\nfooter{\r\n    background-color: rgba(0,0,0,1);\r\n    padding: 20px;\r\n    position:fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.footer-text{\r\n    color: #ffff;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n    font-weight: 400;\r\n    font-size: .90rem;\r\n}\r\n\r\n/* desktop view */\r\n\r\n@media(min-width:501px){\r\n\r\n   /* navigation */\r\n   .nav-links {\r\n      gap: 25px;\r\n      display: flex !important;\r\n   }\r\n\r\n    .nav-links .link {\r\n        color: white;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .nav-links .link:hover {\r\n        font-weight: bolder;\r\n        color: var(--active);\r\n    }\r\n\r\n    /* hero */\r\n    .hero{\r\n        gap: 20px;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    /* signature dish */\r\n    .grid-container{\r\n        gap: 30px;\r\n        grid-template-columns: repeat(auto-fill,300px); \r\n    }\r\n\r\n    .hero_content{\r\n        width: 50%;\r\n        max-width: 400px;\r\n    }\r\n\r\n    .hero_img{\r\n        width: 40%;\r\n    }\r\n\r\n    /* food menu */\r\n\r\n    .items .food-name,\r\n    .items .price{\r\n       font-size: 1.3rem;\r\n       text-transform: capitalize;  \r\n    }\r\n\r\n    /* menu */\r\n\r\n    .contact-info li{\r\n        justify-content: center;\r\n    }\r\n\r\n    /* footer */\r\n    footer{\r\n        padding: 30px;\r\n    }\r\n\r\n    .footer-text{\r\n        font-size: 1.1rem;\r\n    }\r\n}\r\n\r\n@media(min-width:690px){\r\n\r\n    .logo{\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    .nav-links {\r\n        gap: 50px;\r\n     }\r\n  \r\n    .nav-links .link {\r\n        font-size: 1.3rem;\r\n    }\r\n\r\n    /* hero */\r\n    .hero{\r\n        padding: 30px 45px;\r\n    }\r\n\r\n}\r\n\r\n@media(min-width:890px){\r\n    .logo{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .nav-links {\r\n        gap: 60px;\r\n     }\r\n  \r\n    .nav-links .link {\r\n        font-size: 1.4rem;\r\n    }\r\n\r\n     /* hero */\r\n    .hero{\r\n        margin-top: 150px;\r\n        padding: 40px 60px;\r\n    }\r\n\r\n    /* food menu */\r\n\r\n    .food-menu h1{\r\n        font-size: 2.3rem;\r\n    }\r\n\r\n    .food-menu .title{\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    .items .food-name,\r\n    .items .price{\r\n    font-size: 1.5rem;\r\n    text-transform: capitalize;  \r\n    }\r\n\r\n    .items + .items{\r\n        margin-top: 30px;\r\n    }\r\n\r\n    .food-menu{\r\n        margin-top:150px;\r\n    }\r\n\r\n    /* contact */\r\n    .contact{\r\n        margin-top: 150px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/contact/contact.js":
/*!*******************************************!*\
  !*** ./src/components/contact/contact.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactHtml() {
  return `
        <!-- contact -->
        <div class="contact container">
            <h1>Contact Us</h1>
            <ul class="contact-info">
                <li class="flex"><i class="fa-solid fa-phone"></i> +555-555-555</li>
                <li  class="flex"><i class="fa-solid fa-envelope"></i>steakhouse@gmail.com</li>
                <li  class="flex"><i class="fa-solid fa-location-dot"></i> steak house city</li>
            </ul>
        </div>
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactHtml);


/***/ }),

/***/ "./src/components/createHtml.js":
/*!**************************************!*\
  !*** ./src/components/createHtml.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home */ "./src/components/home/home.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");




function createElement() {
  const content = document.getElementById('content');
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.innerHTML = (0,_home_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

  //add html to Dom
  content.innerHTML = (0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
  content.appendChild(main);
  content.innerHTML += (0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createFooterHtnl=()=>{
      return `
        <!-- footer -->
        <footer>
            <p class="footer-text">Copyright © 2023 jonthanCodeGlitch</p>
        </footer>
      `
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooterHtnl);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


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
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeHtml);


/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuHtml: () => (/* binding */ menuHtml)
/* harmony export */ });
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




/***/ }),

/***/ "./src/components/nav_toggle.js":
/*!**************************************!*\
  !*** ./src/components/nav_toggle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleNav);


/***/ }),

/***/ "./src/components/pageload.js":
/*!************************************!*\
  !*** ./src/components/pageload.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageLoad: () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _createHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtml */ "./src/components/createHtml.js");
/* harmony import */ var _nav_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav_toggle */ "./src/components/nav_toggle.js");



function pageLoad() {
  (0,_createHtml__WEBPACK_IMPORTED_MODULE_0__["default"])();
  //target the home tab btn and add a active state to it
  const homeTabBtn = document.querySelector('[data-id="home"]');
  homeTabBtn.classList.add('active');
  //toggle navigation
  (0,_nav_toggle__WEBPACK_IMPORTED_MODULE_1__["default"])();
}




/***/ }),

/***/ "./src/components/home/home-background.jpg":
/*!*************************************************!*\
  !*** ./src/components/home/home-background.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43ad28bc74cde17f58ca.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu */ "./src/components/menu/menu.js");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home */ "./src/components/home/home.js");
/* harmony import */ var _components_contact_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact */ "./src/components/contact/contact.js");
/* harmony import */ var _components_pageload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pageload */ "./src/components/pageload.js");
//import the initial page load funvtion from another module
//set up your project to use tab browsing to navigate between home,menu,contacts
//put the content of each tab inside its own module
//write the tab switching logic inside of the app.js







//on pageload show home page
(0,_components_pageload__WEBPACK_IMPORTED_MODULE_4__.pageLoad)();

const content = document.getElementById('content');

function switchTabs(e){
    let target = e.target;
    let action = target.classList.contains('tab-btn');
    let main = document.getElementById('main');
  
    if (action) {
      //remove active state from all btn
      const tabBtns = document.querySelectorAll('[data-id]');
      tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove('active');
      });
      //add active state to clicked btn
      target.classList.add('active');
  
      //tab switchimg logic
      if (target.dataset.id == 'home') {
        main.innerHTML = (0,_components_home_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
      } else if (target.dataset.id == 'food-menu') {
        document.querySelector('[data-id="food-menu"]').classList.add('active');
        main.innerHTML = (0,_components_menu_menu__WEBPACK_IMPORTED_MODULE_1__.menuHtml)();
      } else if (target.dataset.id == 'contact') {
        main.innerHTML = (0,_components_contact_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
      }
    }
}

content.addEventListener('click', switchTabs);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVKQUF3RDtBQUNwRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TSxxSEFBcUg7QUFDckgseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsTUFBTSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFVB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0QjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxRHhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29COzs7Ozs7Ozs7Ozs7Ozs7QUNoRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJnQjtBQUNKO0FBQ3JDO0FBQ0E7QUFDQSxFQUFFLHVEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNacEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7QUFDNkI7QUFDSjtBQUNTO0FBQ047QUFDakQ7QUFDQTtBQUNBLDhEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpRUFBUTtBQUNqQyxRQUFRO0FBQ1I7QUFDQSx5QkFBeUIsK0RBQVE7QUFDakMsUUFBUTtBQUNSLHlCQUF5Qix1RUFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtdG9wLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC10b3AvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVIdG1sLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC10b3AvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtdG9wLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC10b3AvLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL3NyYy9jb21wb25lbnRzL25hdl90b2dnbGUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL3NyYy9jb21wb25lbnRzL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtdG9wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtdG9wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3R1cmFudC10b3Avd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXRvcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9ob21lL2hvbWUtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcclxuICAgIC0tdHJhbnNwZXJlbnQtYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgLS1saWdodC1kYXJrOnJnYmEoMCwwLDAsMC44KTtcclxuICAgIC0tYWN0aXZlOiAgcmdiKDI1NSwgNzIsIDApO1xyXG59XHJcblxyXG4vKiByZXNldCAqL1xyXG4qe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbnVse1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuYm9keXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIHV0aWxpdGllcyAqL1xyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5mbGV4e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtYXBhcnR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4gICAgICAgICAvKiBob21lIHBhZ2Ugc2VjdGlvbiovXHJcblxyXG4vKiBuYXZpZ2F0aW9uICovXHJcblxyXG5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBwYWRkaW5nOjIwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDEpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5sb2dvID4gc3BhbntcclxuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIC5saW5re1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5uYXYtbGlua3MgLmxpbmsuYWN0aXZle1xyXG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBtb2JpbGUgbmF2aWdhdGlvbiAqL1xyXG5AbWVkaWEobWF4LXdpZHRoOjUwMHB4KXtcclxuXHJcbiAgICAubWVudXtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2aWdhdGlvbntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYtbGlua3N7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB0b3A6IDM1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saWdodC1kYXJrKTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCAyMHB4O1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdi1saW5rcyAubGluazphY3RpdmUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICBjb2xvcjogdmFyKC0tYWN0aXZlKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogaGVybyBzZWN0aW9uKi9cclxuXHJcbi5oZXJve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BlcmVudC1iYWNrZ3JvdW5kKTtcclxuICAgIGdhcDogNDBweDtcclxufVxyXG5cclxuLmhlcm9fY29udGVudHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5oZXJvX3RleHR7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDEuN3JlbSw3dncsMi41cmVtKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlcm8gLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6OHB4IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvIC5idG46aG92ZXIsXHJcbi5oZXJvIC5idG46YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5cclxuLmhlcm9faW1ne1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDoyODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG59XHJcblxyXG4vKiBzaWduYXR1cmUgZGlzaCAqL1xyXG5cclxuLnNpZ25hdHVyZS1kaXNoLWNvbnRhaW5lcntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwZXJlbnQtYmFja2dyb3VuZCk7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDkwcHg7XHJcbn1cclxuXHJcbi5zaWduYXR1cmUtZGlzaC1jb250YWluZXIgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sOHZ3LDNyZW0pO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMzBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7IFxyXG4gICAgXHJcbn1cclxuXHJcbi5zaWduYXR1cmUtZGlzaHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWRhcmspO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5zaWduYXR1cmUtZGlzaCBpbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uZGlzaC1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnJhdGluZ3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6M3B4O1xyXG59XHJcblxyXG4ucmF0aW5ncyBpe1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE4NywgMCk7XHJcbn1cclxuXHJcbi5kaXNoLWluZm97XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgb3BhY2l0eTogLjcwO1xyXG4gICAgbGluZS1oZWlnaHQ6IC45NjtcclxufVxyXG5cclxuLyogbWVudSBzZWN0aW9uKi9cclxuXHJcbi5mb29kLW1lbnV7XHJcbiAgICBtYXJnaW4tdG9wOjEyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BlcmVudC1iYWNrZ3JvdW5kKTtcclxuICAgIHBhZGRpbmc6IDYwcHggNDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9vZC1tZW51IGgxe1xyXG4gICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vZC1tZW51IC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbXN7XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5pdGVtcyArIC5pdGVtc3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5pdGVtcyAuZm9vZC1uYW1lLFxyXG4uaXRlbXMgLnByaWNle1xyXG4gICBmb250LXNpemU6IDFyZW07XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyAgXHJcbn1cclxuXHJcbi5pdGVtcyAudW5kZXJsaW5le1xyXG4gICAgZmxleDogMTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBkYXNoZWQgI2ZmZjtcclxufVxyXG5cclxuLyogY29udGFjdCB1cyAqL1xyXG5cclxuLmNvbnRhY3R7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGVyZW50LWJhY2tncm91bmQpO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0IGgxe1xyXG4gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm97XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8gPiAqKyp7XHJcbiAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8gbGl7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBmb250LXNpemU6MS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mbyBsaSBpe1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcclxufVxyXG5cclxuLyogZm9vdGVyICovXHJcblxyXG5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDEpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9vdGVyLXRleHR7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IC45MHJlbTtcclxufVxyXG5cclxuLyogZGVza3RvcCB2aWV3ICovXHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjUwMXB4KXtcclxuXHJcbiAgIC8qIG5hdmlnYXRpb24gKi9cclxuICAgLm5hdi1saW5rcyB7XHJcbiAgICAgIGdhcDogMjVweDtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICB9XHJcblxyXG4gICAgLm5hdi1saW5rcyAubGluayB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWxpbmtzIC5saW5rOmhvdmVyIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGhlcm8gKi9cclxuICAgIC5oZXJve1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLyogc2lnbmF0dXJlIGRpc2ggKi9cclxuICAgIC5ncmlkLWNvbnRhaW5lcntcclxuICAgICAgICBnYXA6IDMwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLDMwMHB4KTsgXHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm9fY29udGVudHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm9faW1ne1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogZm9vZCBtZW51ICovXHJcblxyXG4gICAgLml0ZW1zIC5mb29kLW5hbWUsXHJcbiAgICAuaXRlbXMgLnByaWNle1xyXG4gICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qIG1lbnUgKi9cclxuXHJcbiAgICAuY29udGFjdC1pbmZvIGxpe1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGZvb3RlciAqL1xyXG4gICAgZm9vdGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci10ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjY5MHB4KXtcclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWxpbmtzIHtcclxuICAgICAgICBnYXA6IDUwcHg7XHJcbiAgICAgfVxyXG4gIFxyXG4gICAgLm5hdi1saW5rcyAubGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyogaGVybyAqL1xyXG4gICAgLmhlcm97XHJcbiAgICAgICAgcGFkZGluZzogMzBweCA0NXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDo4OTBweCl7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rcyB7XHJcbiAgICAgICAgZ2FwOiA2MHB4O1xyXG4gICAgIH1cclxuICBcclxuICAgIC5uYXYtbGlua3MgLmxpbmsge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICAvKiBoZXJvICovXHJcbiAgICAuaGVyb3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogZm9vZCBtZW51ICovXHJcblxyXG4gICAgLmZvb2QtbWVudSBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vZC1tZW51IC50aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbXMgLmZvb2QtbmFtZSxcclxuICAgIC5pdGVtcyAucHJpY2V7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyAgXHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW1zICsgLml0ZW1ze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb2QtbWVudXtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGNvbnRhY3QgKi9cclxuICAgIC5jb250YWN0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0lBQ0kseUNBQXlDO0lBQ3pDLDRCQUE0QjtJQUM1QiwwQkFBMEI7QUFDOUI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxtREFBd0Q7RUFDeEQsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7U0FFUyxxQkFBcUI7O0FBRTlCLGVBQWU7O0FBRWY7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7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Qjs7SUFFQTtRQUNJLFNBQVM7S0FDWjs7SUFFRDtRQUNJLGlCQUFpQjtJQUNyQjs7S0FFQyxTQUFTO0lBQ1Y7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBLGNBQWM7O0lBRWQ7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7O0lBRUEsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQSxZQUFZO0lBQ1o7UUFDSSxpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tdHJhbnNwZXJlbnQtYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xcclxcbiAgICAtLWxpZ2h0LWRhcms6cmdiYSgwLDAsMCwwLjgpO1xcclxcbiAgICAtLWFjdGl2ZTogIHJnYigyNTUsIDcyLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVzZXQgKi9cXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbnVse1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9jb21wb25lbnRzL2hvbWUvaG9tZS1iYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW1ne1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1dGlsaXRpZXMgKi9cXHJcXG4uY29udGFpbmVye1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5mbGV4e1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWFwYXJ0e1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuICAgICAgICAgLyogaG9tZSBwYWdlIHNlY3Rpb24qL1xcclxcblxcclxcbi8qIG5hdmlnYXRpb24gKi9cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcGFkZGluZzoyMHB4IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDEpO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb3tcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gPiBzcGFue1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWN0aXZlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyAubGlua3tcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm5hdi1saW5rcyAubGluay5hY3RpdmV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51e1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtb2JpbGUgbmF2aWdhdGlvbiAqL1xcclxcbkBtZWRpYShtYXgtd2lkdGg6NTAwcHgpe1xcclxcblxcclxcbiAgICAubWVudXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5uYXZpZ2F0aW9ue1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubmF2LWxpbmtze1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgICAgIHRvcDogMzVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCAyMHB4O1xcclxcbiAgICAgICAgZ2FwOiAxNXB4O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAubmF2LWxpbmtzIC5saW5rOmFjdGl2ZSB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICAgICBjb2xvcjogdmFyKC0tYWN0aXZlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBoZXJvIHNlY3Rpb24qL1xcclxcblxcclxcbi5oZXJve1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcXHJcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BlcmVudC1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19jb250ZW50e1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX3RleHR7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS43cmVtLDd2dywyLjVyZW0pO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyAuYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzo4cHggMjVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIC5idG46aG92ZXIsXFxyXFxuLmhlcm8gLmJ0bjphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhlcm9faW1ne1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgICBoZWlnaHQ6MjgwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIHNpZ25hdHVyZSBkaXNoICovXFxyXFxuXFxyXFxuLnNpZ25hdHVyZS1kaXNoLWNvbnRhaW5lcntcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BlcmVudC1iYWNrZ3JvdW5kKTtcXHJcXG4gICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgbWFyZ2luLXRvcDogOTBweDtcXHJcXG4gICBtYXJnaW4tYm90dG9tOiA5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmF0dXJlLWRpc2gtY29udGFpbmVyIGgxe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgycmVtLDh2dywzcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY29udGFpbmVye1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyOyBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWduYXR1cmUtZGlzaHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZGFyayk7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWduYXR1cmUtZGlzaCBpbWd7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2gtbmFtZXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmZjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhdGluZ3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6M3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmF0aW5ncyBpe1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMTg3LCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2gtaW5mb3tcXHJcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIG9wYWNpdHk6IC43MDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IC45NjtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudSBzZWN0aW9uKi9cXHJcXG5cXHJcXG4uZm9vZC1tZW51e1xcclxcbiAgICBtYXJnaW4tdG9wOjEyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwZXJlbnQtYmFja2dyb3VuZCk7XFxyXFxuICAgIHBhZGRpbmc6IDYwcHggNDBweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5mb29kLW1lbnUgaDF7XFxyXFxuICAgZm9udC1zaXplOiAyLjNyZW07XFxyXFxuICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb29kLW1lbnUgLnRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXN7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zICsgLml0ZW1ze1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMgLmZvb2QtbmFtZSxcXHJcXG4uaXRlbXMgLnByaWNle1xcclxcbiAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgIFxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMgLnVuZGVybGluZXtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250YWN0IHVzICovXFxyXFxuXFxyXFxuLmNvbnRhY3R7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BlcmVudC1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZve1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW5mbyA+ICorKntcXHJcXG4gICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvIGxpe1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWluZm8gbGkgaXtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDEpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10ZXh0e1xcclxcbiAgICBjb2xvcjogI2ZmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjkwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkZXNrdG9wIHZpZXcgKi9cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOjUwMXB4KXtcXHJcXG5cXHJcXG4gICAvKiBuYXZpZ2F0aW9uICovXFxyXFxuICAgLm5hdi1saW5rcyB7XFxyXFxuICAgICAgZ2FwOiAyNXB4O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgIC5uYXYtbGlua3MgLmxpbmsge1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYtbGlua3MgLmxpbms6aG92ZXIge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qIGhlcm8gKi9cXHJcXG4gICAgLmhlcm97XFxyXFxuICAgICAgICBnYXA6IDIwcHg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogc2lnbmF0dXJlIGRpc2ggKi9cXHJcXG4gICAgLmdyaWQtY29udGFpbmVye1xcclxcbiAgICAgICAgZ2FwOiAzMHB4O1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLDMwMHB4KTsgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlcm9fY29udGVudHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvX2ltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogZm9vZCBtZW51ICovXFxyXFxuXFxyXFxuICAgIC5pdGVtcyAuZm9vZC1uYW1lLFxcclxcbiAgICAuaXRlbXMgLnByaWNle1xcclxcbiAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7ICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBtZW51ICovXFxyXFxuXFxyXFxuICAgIC5jb250YWN0LWluZm8gbGl7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBmb290ZXIgKi9cXHJcXG4gICAgZm9vdGVye1xcclxcbiAgICAgICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyLXRleHR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOjY5MHB4KXtcXHJcXG5cXHJcXG4gICAgLmxvZ297XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2LWxpbmtzIHtcXHJcXG4gICAgICAgIGdhcDogNTBweDtcXHJcXG4gICAgIH1cXHJcXG4gIFxcclxcbiAgICAubmF2LWxpbmtzIC5saW5rIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qIGhlcm8gKi9cXHJcXG4gICAgLmhlcm97XFxyXFxuICAgICAgICBwYWRkaW5nOiAzMHB4IDQ1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDo4OTBweCl7XFxyXFxuICAgIC5sb2dve1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYtbGlua3Mge1xcclxcbiAgICAgICAgZ2FwOiA2MHB4O1xcclxcbiAgICAgfVxcclxcbiAgXFxyXFxuICAgIC5uYXYtbGlua3MgLmxpbmsge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgIC8qIGhlcm8gKi9cXHJcXG4gICAgLmhlcm97XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBmb29kIG1lbnUgKi9cXHJcXG5cXHJcXG4gICAgLmZvb2QtbWVudSBoMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb29kLW1lbnUgLnRpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLml0ZW1zIC5mb29kLW5hbWUsXFxyXFxuICAgIC5pdGVtcyAucHJpY2V7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pdGVtcyArIC5pdGVtc3tcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb2QtbWVudXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogY29udGFjdCAqL1xcclxcbiAgICAuY29udGFjdHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY29udGFjdEh0bWwoKSB7XHJcbiAgcmV0dXJuIGBcclxuICAgICAgICA8IS0tIGNvbnRhY3QgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJmbGV4XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1waG9uZVwiPjwvaT4gKzU1NS01NTUtNTU1PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSAgY2xhc3M9XCJmbGV4XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbnZlbG9wZVwiPjwvaT5zdGVha2hvdXNlQGdtYWlsLmNvbTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgIGNsYXNzPVwiZmxleFwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbG9jYXRpb24tZG90XCI+PC9pPiBzdGVhayBob3VzZSBjaXR5PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RIdG1sO1xyXG4iLCJpbXBvcnQgaG9tZUh0bWwgZnJvbSAnLi9ob21lL2hvbWUnO1xyXG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IGNyZWF0ZUZvb3Rlckh0bmwgZnJvbSAnLi9mb290ZXInO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSBob21lSHRtbCgpO1xyXG5cclxuICAvL2FkZCBodG1sIHRvIERvbVxyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gY3JlYXRlSGVhZGVyKCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICBjb250ZW50LmlubmVySFRNTCArPSBjcmVhdGVGb290ZXJIdG5sKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XHJcbiIsIlxyXG5jb25zdCBjcmVhdGVGb290ZXJIdG5sPSgpPT57XHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPCEtLSBmb290ZXIgLS0+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb290ZXItdGV4dFwiPkNvcHlyaWdodCDCqSAyMDIzIGpvbnRoYW5Db2RlR2xpdGNoPC9wPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICBgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3Rlckh0bmwiLCJcclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiBgXHJcbiAgICA8IS0tbmF2aWdhdGlvbiBiZWdpbnMgLS0+XHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmxleC1hcGFydFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlN0ZWFrPHNwYW4+SG91c2U8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgIDwhLS0gIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+IC0tPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1idXJnZXIgbWVudVwiIGlkPVwibWVudVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdi1saW5rcyBmbGV4XCIgaWQ9XCJuYXYtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaW5rIHRhYi1idG5cIiBkYXRhLWlkPVwiaG9tZVwiPkhvbWU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpbmsgdGFiLWJ0blwiIGRhdGEtaWQ9XCJmb29kLW1lbnVcIj5NZW51PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaW5rIHRhYi1idG5cIiBkYXRhLWlkPVwiY29udGFjdFwiPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDwhLS1uYXZpZ2F0aW9uIGVuZHMgLS0+XHJcbiAgICBgO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xyXG4iLCJmdW5jdGlvbiBob21lSHRtbCgpIHtcclxuICByZXR1cm4gYFxyXG4gICAgICAgIDwhLS0gaGVybyBzZWN0aW9uIGJlZ2lucy0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lLXBhZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8gY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyb19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm9fdGV4dFwiPml0J3Mgbm90IGp1c3QgIGZvb2QsIGl0J3MgYW4gZXhwZXJpZW5jZSwgYydtb24gbGV0cyBnZXQgeW91ciAgdHVtbXkgc21pbGluZy4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biB0YWItYnRuXCIgZGF0YS1pZD1cImZvb2QtbWVudVwiPlZpZXcgTWVudTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaGVyb19pbWdcIiBzcmM9XCIuLi9zcmMvY29tcG9uZW50cy9ob21lL2hlcm8taW1nLmpwZ1wiIGFsdD1cInN0ZWFrXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIGhlcm8gc2VjdG9uIGVuZHMtLT5cclxuICAgICAgICAgICAgPCEtLSBzaWduYXR1cmUgZGlzaCAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZ25hdHVyZS1kaXNoLWNvbnRhaW5lciBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5PdXIgc2lnbmF0dXJlIERpc2g8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZ25hdHVyZS1kaXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2NvbXBvbmVudHMvaG9tZS9TcGljZWQgc3RlYWsgd2l0aCBzd2VldCBwb3RhdG8gd2VkZ2VzLmpwZ1wiIGFsdD1cImRpc2ggaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc2gtbmFtZVwiPnN0ZWFrIHdpdGggc3dlZXQgcG90YXRvIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zdGFyLWhhbGYtc3Ryb2tlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkaXNoLWluZm9cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBIYXJ1bSBpbnZlbnRvcmUgcHJhZXNlbnRpdW0sIG9tbmlzIGR1Y2ltdXMgc2l0IGRvbG9ydW0uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lnbmF0dXJlLWRpc2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZ2FyYXNoaSB0b21haGF3ay5qcGdcIiBhbHQ9XCJkaXNoIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNoLW5hbWVcIj5Ub2dhcmFzaGkgdG9tYWhhd2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtc3Rhci1oYWxmLXN0cm9rZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzaC1pbmZvXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGFydW0gaW52ZW50b3JlIHByYWVzZW50aXVtLCBvbW5pcyBkdWNpbXVzIHNpdCBkb2xvcnVtLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZ25hdHVyZS1kaXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2NvbXBvbmVudHMvaG9tZS9QaGlsbHkgY2hlZXNlc3RlYWsuanBnXCIgYWx0PVwiZGlzaCBpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzaC1uYW1lXCI+UGhpbGx5IGNoZWVzZXN0ZWFrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0YXItaGFsZi1zdHJva2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc2gtaW5mb1wiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhhcnVtIGludmVudG9yZSBwcmFlc2VudGl1bSwgb21uaXMgZHVjaW11cyBzaXQgZG9sb3J1bS4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZUh0bWw7XHJcbiIsImZ1bmN0aW9uIG1lbnVIdG1sKCkge1xyXG4gIHJldHVybiBgXHJcbiAgICAgICAgPCEtLSBtZW51IC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLW1lbnUgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5NZW51PC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGl0bGVcIj5EZXNzZXJ0PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1zIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvb2QtbmFtZVwiPkNob2NvbGF0ZSB0b3J0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDI3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1zIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvb2QtbmFtZVwiPkNob2NvbGF0ZSBtb3Vzc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPiQzMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtcyBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb29kLW5hbWVcIj4gUmh1YmFyYiBjdXN0YXJkIHBpZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDcwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsID5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwidGl0bGVcIj5BcHBlcnRpemVyPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbXMgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1uYW1lXCI+R2FybGljIEJ1dHRlciBTdGVhayBCaXRlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbXMgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1uYW1lXCI+SG9uZXkgR2FybGljIFN0ZWFrIEJpdGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMTI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbXMgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1uYW1lXCI+QmVlZiBXZWxsaW5ndG9uIEJpdGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMTc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ0aXRsZVwiPlNwZWNpYWw8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtcyBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb29kLW5hbWVcIj5zdGVhayB3aXRoIHN3ZWV0IHBvdGF0byA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPiQyMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbXMgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1uYW1lXCI+VG9nYXJhc2hpIHRvbWFoYXdrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMTcwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1zIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvb2QtbmFtZVwiPlBoaWxseSBjaGVlc2VzdGVhazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDcwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG5leHBvcnQgeyBtZW51SHRtbCB9O1xyXG4iLCJjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbGlua3MnKTtcclxuXHJcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBsZXQgYnRuID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoYnRuLmlkID09ICdtZW51Jykge1xyXG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnZmEtYnVyZ2VyJykpIHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlcGxhY2UoJ2ZhLWJ1cmdlcicsICdmYS14bWFyaycpO1xyXG4gICAgICAgIG5hdmlnYXRpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlcGxhY2UoJ2ZhLXhtYXJrJywgJ2ZhLWJ1cmdlcicpO1xyXG4gICAgICAgIG5hdmlnYXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlTmF2O1xyXG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUh0bWwnO1xyXG5pbXBvcnQgdG9nZ2xlTmF2IGZyb20gJy4vbmF2X3RvZ2dsZSc7XHJcblxyXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcclxuICBjcmVhdGVFbGVtZW50KCk7XHJcbiAgLy90YXJnZXQgdGhlIGhvbWUgdGFiIGJ0biBhbmQgYWRkIGEgYWN0aXZlIHN0YXRlIHRvIGl0XHJcbiAgY29uc3QgaG9tZVRhYkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiaG9tZVwiXScpO1xyXG4gIGhvbWVUYWJCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgLy90b2dnbGUgbmF2aWdhdGlvblxyXG4gIHRvZ2dsZU5hdigpO1xyXG59XHJcblxyXG5leHBvcnQgeyBwYWdlTG9hZCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9pbXBvcnQgdGhlIGluaXRpYWwgcGFnZSBsb2FkIGZ1bnZ0aW9uIGZyb20gYW5vdGhlciBtb2R1bGVcclxuLy9zZXQgdXAgeW91ciBwcm9qZWN0IHRvIHVzZSB0YWIgYnJvd3NpbmcgdG8gbmF2aWdhdGUgYmV0d2VlbiBob21lLG1lbnUsY29udGFjdHNcclxuLy9wdXQgdGhlIGNvbnRlbnQgb2YgZWFjaCB0YWIgaW5zaWRlIGl0cyBvd24gbW9kdWxlXHJcbi8vd3JpdGUgdGhlIHRhYiBzd2l0Y2hpbmcgbG9naWMgaW5zaWRlIG9mIHRoZSBhcHAuanNcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBtZW51SHRtbCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUnO1xyXG5pbXBvcnQgaG9tZUh0bWwgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XHJcbmltcG9ydCBjb250YWN0SHRtbCBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0JztcclxuaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZWxvYWQnO1xyXG5cclxuLy9vbiBwYWdlbG9hZCBzaG93IGhvbWUgcGFnZVxyXG5wYWdlTG9hZCgpO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hUYWJzKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IGFjdGlvbiA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi1idG4nKTtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICBcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgLy9yZW1vdmUgYWN0aXZlIHN0YXRlIGZyb20gYWxsIGJ0blxyXG4gICAgICBjb25zdCB0YWJCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaWRdJyk7XHJcbiAgICAgIHRhYkJ0bnMuZm9yRWFjaCgodGFiQnRuKSA9PiB7XHJcbiAgICAgICAgdGFiQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9hZGQgYWN0aXZlIHN0YXRlIHRvIGNsaWNrZWQgYnRuXHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBcclxuICAgICAgLy90YWIgc3dpdGNoaW1nIGxvZ2ljXHJcbiAgICAgIGlmICh0YXJnZXQuZGF0YXNldC5pZCA9PSAnaG9tZScpIHtcclxuICAgICAgICBtYWluLmlubmVySFRNTCA9IGhvbWVIdG1sKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmRhdGFzZXQuaWQgPT0gJ2Zvb2QtbWVudScpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pZD1cImZvb2QtbWVudVwiXScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gbWVudUh0bWwoKTtcclxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQuZGF0YXNldC5pZCA9PSAnY29udGFjdCcpIHtcclxuICAgICAgICBtYWluLmlubmVySFRNTCA9IGNvbnRhY3RIdG1sKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRhYnMpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=