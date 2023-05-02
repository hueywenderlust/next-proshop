"use strict";
(() => {
var exports = {};
exports.id = 4097;
exports.ids = [4097];
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

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 1601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3632);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8721);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5690);





const handler = async (req, res)=>{
    const user = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
        req
    });
    if (!user || user && !user.isAdmin) {
        return res.status(401).send("signin required");
    }
    await _utils_db__WEBPACK_IMPORTED_MODULE_4__/* ["default"].connect */ .Z.connect();
    const ordersCount = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].countDocuments */ .Z.countDocuments();
    const productsCount = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"].countDocuments */ .Z.countDocuments();
    const usersCount = await _models_User__WEBPACK_IMPORTED_MODULE_3__/* ["default"].countDocuments */ .Z.countDocuments();
    const ordersPriceGroup = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].aggregate */ .Z.aggregate([
        {
            $group: {
                _id: null,
                sales: {
                    $sum: "$totalPrice"
                }
            }
        }
    ]);
    const ordersPrice = ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0;
    const salesData = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].aggregate */ .Z.aggregate([
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%Y-%m",
                        date: "$createdAt"
                    }
                },
                totalSales: {
                    $sum: "$totalPrice"
                }
            }
        }
    ]);
    await _utils_db__WEBPACK_IMPORTED_MODULE_4__/* ["default"].disconnect */ .Z.disconnect();
    res.send({
        ordersCount,
        productsCount,
        usersCount,
        ordersPrice,
        salesData
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5690,3632,8721], () => (__webpack_exec__(1601)));
module.exports = __webpack_exports__;

})();