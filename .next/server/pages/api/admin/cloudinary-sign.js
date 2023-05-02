"use strict";
(() => {
var exports = {};
exports.id = 8851;
exports.ids = [8851];
exports.modules = {

/***/ 3518:
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ 7176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ signature)
/* harmony export */ });
const cloudinary = (__webpack_require__(3518).v2);
function signature(req, res) {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request({
        timestamp: timestamp
    }, process.env.CLOUDINARY_SECRET);
    res.statusCode = 200;
    res.json({
        signature,
        timestamp
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7176));
module.exports = __webpack_exports__;

})();