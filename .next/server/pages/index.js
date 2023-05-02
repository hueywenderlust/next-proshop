(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 6616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7345);
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(961);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6219);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(617);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2331);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3559);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__, _utils_Store__WEBPACK_IMPORTED_MODULE_8__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__, _utils_Store__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Home({ products , featuredProducts  }) {
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .y);
    const { cart  } = state;
    const addToCartHandler = async (product)=>{
        const existItem = cart.cartItems.find((x)=>x.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("Sorry. Product is out of stock");
        }
        dispatch({
            type: "CART_ADD_ITEM",
            payload: {
                ...product,
                quantity
            }
        });
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to the cart");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: "Home Page",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_9__.Carousel, {
                showThumbs: false,
                autoPlay: true,
                children: featuredProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                            href: `/product/${product.slug}`,
                            passHref: true,
                            className: "flex",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: product.banner,
                                alt: product.name
                            })
                        })
                    }, product._id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "h2 my-4",
                children: "Latest Products"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4",
                children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        product: product,
                        addToCartHandler: addToCartHandler
                    }, product.slug))
            })
        ]
    });
}
async function getServerSideProps() {
    await _utils_db__WEBPACK_IMPORTED_MODULE_7__/* ["default"].connect */ .Z.connect();
    const products = await _models_Product__WEBPACK_IMPORTED_MODULE_6__/* ["default"].find */ .Z.find().lean();
    const featuredProducts = await _models_Product__WEBPACK_IMPORTED_MODULE_6__/* ["default"].find */ .Z.find({
        isFeatured: true
    }).lean();
    return {
        props: {
            featuredProducts: featuredProducts.map(_utils_db__WEBPACK_IMPORTED_MODULE_7__/* ["default"].convertDocToObj */ .Z.convertDocToObj),
            products: products.map(_utils_db__WEBPACK_IMPORTED_MODULE_7__/* ["default"].convertDocToObj */ .Z.convertDocToObj)
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3559:
/***/ (() => {



/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5142:
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ 2663:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4508:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 4221:
/***/ ((module) => {

"use strict";
module.exports = import("@heroicons/react/24/outline/MagnifyingGlassIcon");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2848,2331,7345,5360,961], () => (__webpack_exec__(6616)));
module.exports = __webpack_exports__;

})();