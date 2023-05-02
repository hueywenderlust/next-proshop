"use strict";
(() => {
var exports = {};
exports.id = 4373;
exports.ids = [4373];
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

/***/ 352:
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
    if (!user || user && !user.isAdmin) {
        return res.status(401).send("signin required");
    }
    if (req.method === "GET") {
        return getHandler(req, res, user);
    } else if (req.method === "PUT") {
        return putHandler(req, res, user);
    } else if (req.method === "DELETE") {
        return deleteHandler(req, res, user);
    } else {
        return res.status(400).send({
            message: "Method not allowed"
        });
    }
};
const getHandler = async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(req.query.id);
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    res.send(product);
};
const putHandler = async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(req.query.id);
    if (product) {
        product.name = req.body.name;
        product.slug = req.body.slug;
        product.price = req.body.price;
        product.category = req.body.category;
        product.image = req.body.image;
        product.brand = req.body.brand;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        await product.save();
        await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
        res.send({
            message: "Product updated successfully"
        });
    } else {
        await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
        res.status(404).send({
            message: "Product not found"
        });
    }
};
const deleteHandler = async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(req.query.id);
    if (product) {
        await product.remove();
        await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
        res.send({
            message: "Product deleted successfully"
        });
    } else {
        await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
        res.status(404).send({
            message: "Product not found"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5690,8721], () => (__webpack_exec__(352)));
module.exports = __webpack_exports__;

})();