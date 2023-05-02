"use strict";
exports.id = 2331;
exports.ids = [2331];
exports.modules = {

/***/ 2331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ StoreProvider),
/* harmony export */   "y": () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const initialState = {
    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("cart") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("cart")) : {
        cartItems: [],
        shippingAddress: {},
        paymentMethod: ""
    }
};
function reducer(state, action) {
    switch(action.type){
        case "CART_ADD_ITEM":
            {
                const newItem = action.payload;
                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);
                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [
                    ...state.cart.cartItems,
                    newItem
                ];
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("cart", JSON.stringify({
                    ...state.cart,
                    cartItems
                }));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems
                    }
                };
            }
        case "CART_REMOVE_ITEM":
            {
                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("cart", JSON.stringify({
                    ...state.cart,
                    cartItems
                }));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems
                    }
                };
            }
        case "CART_RESET":
            return {
                ...state,
                cart: {
                    cartItems: [],
                    shippingAddress: {
                        location: {}
                    },
                    paymentMethod: ""
                }
            };
        case "CART_CLEAR_ITEMS":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: []
                }
            };
        case "SAVE_SHIPPING_ADDRESS":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    shippingAddress: {
                        ...state.cart.shippingAddress,
                        ...action.payload
                    }
                }
            };
        case "SAVE_PAYMENT_METHOD":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    paymentMethod: action.payload
                }
            };
        default:
            return state;
    }
}
function StoreProvider({ children  }) {
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const value = {
        state,
        dispatch
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Store.Provider, {
        value: value,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;