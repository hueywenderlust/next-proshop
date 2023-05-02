"use strict";
(() => {
var exports = {};
exports.id = 9603;
exports.ids = [9603];
exports.modules = {

/***/ 1252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7345);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2331);
/* harmony import */ var _heroicons_react_24_outline_XCircleIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3581);
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(961);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6219);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(617);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _components_Layout__WEBPACK_IMPORTED_MODULE_5__, _utils_Store__WEBPACK_IMPORTED_MODULE_6__, _heroicons_react_24_outline_XCircleIcon__WEBPACK_IMPORTED_MODULE_7__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _components_Layout__WEBPACK_IMPORTED_MODULE_5__, _utils_Store__WEBPACK_IMPORTED_MODULE_6__, _heroicons_react_24_outline_XCircleIcon__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PAGE_SIZE = 2;
const prices = [
    {
        name: "$1 to $50",
        value: "1-50"
    },
    {
        name: "$51 to $200",
        value: "51-200"
    },
    {
        name: "$201 to $1000",
        value: "201-1000"
    }
];
const ratings = [
    1,
    2,
    3,
    4,
    5
];
function Search(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { query ="all" , category ="all" , brand ="all" , price ="all" , rating ="all" , sort ="featured" , page =1  } = router.query;
    const { products , countProducts , categories , brands , pages  } = props;
    const filterSearch = ({ page , category , brand , sort , min , max , searchQuery , price , rating  })=>{
        const { query  } = router;
        if (page) query.page = page;
        if (searchQuery) query.searchQuery = searchQuery;
        if (sort) query.sort = sort;
        if (category) query.category = category;
        if (brand) query.brand = brand;
        if (price) query.price = price;
        if (rating) query.rating = rating;
        if (min) query.min ? query.min : query.min === 0 ? 0 : min;
        if (max) query.max ? query.max : query.max === 0 ? 0 : max;
        router.push({
            pathname: router.pathname,
            query: query
        });
    };
    const categoryHandler = (e)=>{
        filterSearch({
            category: e.target.value
        });
    };
    const pageHandler = (page)=>{
        filterSearch({
            page
        });
    };
    const brandHandler = (e)=>{
        filterSearch({
            brand: e.target.value
        });
    };
    const sortHandler = (e)=>{
        filterSearch({
            sort: e.target.value
        });
    };
    const priceHandler = (e)=>{
        filterSearch({
            price: e.target.value
        });
    };
    const ratingHandler = (e)=>{
        filterSearch({
            rating: e.target.value
        });
    };
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .y);
    const addToCartHandler = async (product)=>{
        const existItem = state.cart.cartItems.find((x)=>x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Sorry. Product is out of stock");
            return;
        }
        dispatch({
            type: "CART_ADD_ITEM",
            payload: {
                ...product,
                quantity
            }
        });
        router.push("/cart");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "search",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid md:grid-cols-4 md:gap-5",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "my-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Categories"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: "w-full",
                                    value: category,
                                    onChange: categoryHandler,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "all",
                                            children: "All"
                                        }),
                                        categories && categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: category,
                                                children: category
                                            }, category))
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Brands"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: "w-full",
                                    value: brand,
                                    onChange: brandHandler,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "all",
                                            children: "All"
                                        }),
                                        brands && brands.map((brand)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: brand,
                                                children: brand
                                            }, brand))
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Prices"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: "w-full",
                                    value: price,
                                    onChange: priceHandler,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "all",
                                            children: "All"
                                        }),
                                        prices && prices.map((price)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: price.value,
                                                children: price.name
                                            }, price.value))
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Ratings"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: "w-full",
                                    value: rating,
                                    onChange: ratingHandler,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "all",
                                            children: "All"
                                        }),
                                        ratings && ratings.map((rating)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                value: rating,
                                                children: [
                                                    rating,
                                                    " star",
                                                    rating > 1 && "s",
                                                    " & up"
                                                ]
                                            }, rating))
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "md:col-span-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-2 flex items-center justify-between border-b-2 pb-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        products.length === 0 ? "No" : countProducts,
                                        " Results",
                                        query !== "all" && query !== "" && " : " + query,
                                        category !== "all" && " : " + category,
                                        brand !== "all" && " : " + brand,
                                        price !== "all" && " : Price " + price,
                                        rating !== "all" && " : Rating " + rating + " & up",
                                        "\xa0",
                                        query !== "all" && query !== "" || category !== "all" || brand !== "all" || rating !== "all" || price !== "all" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>router.push("/search"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_XCircleIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                className: "h-5 w-5"
                                            })
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "Sort by",
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            value: sort,
                                            onChange: sortHandler,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "featured",
                                                    children: "Featured"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "lowest",
                                                    children: "Price: Low to High"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "highest",
                                                    children: "Price: High to Low"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "toprated",
                                                    children: "Customer Reviews"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "newest",
                                                    children: "Newest Arrivals"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-1 gap-4 md:grid-cols-3  ",
                                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            product: product,
                                            addToCartHandler: addToCartHandler
                                        }, product._id))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "flex",
                                    children: products.length > 0 && [
                                        ...Array(pages).keys()
                                    ].map((pageNumber)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: `default-button m-2 ${page == pageNumber + 1 ? "font-bold" : ""} `,
                                                onClick: ()=>pageHandler(pageNumber + 1),
                                                children: pageNumber + 1
                                            })
                                        }, pageNumber))
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
async function getServerSideProps({ query  }) {
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || "";
    const brand = query.brand || "";
    const price = query.price || "";
    const rating = query.rating || "";
    const sort = query.sort || "";
    const searchQuery = query.query || "";
    const queryFilter = searchQuery && searchQuery !== "all" ? {
        name: {
            $regex: searchQuery,
            $options: "i"
        }
    } : {};
    const categoryFilter = category && category !== "all" ? {
        category
    } : {};
    const brandFilter = brand && brand !== "all" ? {
        brand
    } : {};
    const ratingFilter = rating && rating !== "all" ? {
        rating: {
            $gte: Number(rating)
        }
    } : {};
    // 10-50
    const priceFilter = price && price !== "all" ? {
        price: {
            $gte: Number(price.split("-")[0]),
            $lte: Number(price.split("-")[1])
        }
    } : {};
    const order = sort === "featured" ? {
        isFeatured: -1
    } : sort === "lowest" ? {
        price: 1
    } : sort === "highest" ? {
        price: -1
    } : sort === "toprated" ? {
        rating: -1
    } : sort === "newest" ? {
        createdAt: -1
    } : {
        _id: -1
    };
    await _utils_db__WEBPACK_IMPORTED_MODULE_10__/* ["default"].connect */ .Z.connect();
    const categories = await _models_Product__WEBPACK_IMPORTED_MODULE_9__/* ["default"].find */ .Z.find().distinct("category");
    const brands = await _models_Product__WEBPACK_IMPORTED_MODULE_9__/* ["default"].find */ .Z.find().distinct("brand");
    const productDocs = await _models_Product__WEBPACK_IMPORTED_MODULE_9__/* ["default"].find */ .Z.find({
        ...queryFilter,
        ...categoryFilter,
        ...priceFilter,
        ...brandFilter,
        ...ratingFilter
    }, "-reviews").sort(order).skip(pageSize * (page - 1)).limit(pageSize).lean();
    const countProducts = await _models_Product__WEBPACK_IMPORTED_MODULE_9__/* ["default"].countDocuments */ .Z.countDocuments({
        ...queryFilter,
        ...categoryFilter,
        ...priceFilter,
        ...brandFilter,
        ...ratingFilter
    });
    await _utils_db__WEBPACK_IMPORTED_MODULE_10__/* ["default"].disconnect */ .Z.disconnect();
    const products = productDocs.map(_utils_db__WEBPACK_IMPORTED_MODULE_10__/* ["default"].convertDocToObj */ .Z.convertDocToObj);
    return {
        props: {
            products,
            countProducts,
            page,
            pages: Math.ceil(countProducts / pageSize),
            categories,
            brands
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 4221:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/MagnifyingGlassIcon");;

/***/ }),

/***/ 3581:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/XCircleIcon");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2848,2331,7345,5360,961], () => (__webpack_exec__(1252)));
module.exports = __webpack_exports__;

})();