"use strict";
(() => {
var exports = {};
exports.id = 5151;
exports.ids = [5151];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 2950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8721);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5690);



const handler = async (req, res)=>{
    const user = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
        req
    });
    if (!user || !user.isAdmin) {
        return res.status(401).send("admin signin required");
    }
    if (req.method === "GET") {
        return getHandler(req, res);
    } else if (req.method === "POST") {
        return postHandler(req, res);
    } else {
        return res.status(400).send({
            message: "Method not allowed"
        });
    }
};
const postHandler = async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const newProduct = new _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
        name: "sample name",
        slug: "sample-name-" + Math.random(),
        image: "/images/shirt1.jpg",
        price: 0,
        category: "sample category",
        brand: "sample brand",
        countInStock: 0,
        description: "sample description",
        rating: 0,
        numReviews: 0
    });
    const product = await newProduct.save();
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    res.send({
        message: "Product created successfully",
        product
    });
};
const getHandler = async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const products = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({});
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    res.send(products);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5690,8721], () => (__webpack_exec__(2950)));
module.exports = __webpack_exports__;

})();