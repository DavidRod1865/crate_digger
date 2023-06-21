"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/spotify":
/*!**********************************************!*\
  !*** external "next-auth/providers/spotify" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/spotify");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            authorization: \"https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-read-collaborative,user-library-read\",\n            clientId: process.env.REACT_APP_CLIENT_ID,\n            clientSecret: process.env.REACT_APP_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , account  }) {\n            if (account) {\n                token.accessToken = account.refresh_token;\n            }\n            return token;\n        },\n        async session (session, user) {\n            session.user = user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3dCO0FBRXpELGlFQUFlQSxnREFBUUEsQ0FBQztJQUNwQkUsV0FBVztRQUNURCxrRUFBZUEsQ0FBQztZQUNkRSxlQUNFO1lBQ0ZDLFVBQVVDLFFBQVFDLElBQUlDO1lBQ3RCQyxjQUFjSCxRQUFRQyxJQUFJRztRQUM1QjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUNDLE1BQUssRUFBRUMsUUFBTyxFQUFDO1lBQ3hCLElBQUlBLFNBQVM7Z0JBQ1hELE1BQU1FLGNBQWNELFFBQVFFO1lBQzlCO1lBQ0EsT0FBT0g7UUFDVDtRQUNBLE1BQU1JLFNBQVFBLE9BQU8sRUFBRUMsSUFBSTtZQUN6QkQsUUFBUUMsT0FBT0E7WUFDZixPQUFPRDtRQUNUO0lBQ0Y7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBmb2xkZXIvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgU3BvdGlmeVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvc3BvdGlmeSdcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgU3BvdGlmeVByb3ZpZGVyKHtcbiAgICAgICAgYXV0aG9yaXphdGlvbjpcbiAgICAgICAgICAnaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemU/c2NvcGU9dXNlci1yZWFkLWVtYWlsLHBsYXlsaXN0LXJlYWQtcHJpdmF0ZSxwbGF5bGlzdC1yZWFkLWNvbGxhYm9yYXRpdmUsdXNlci1saWJyYXJ5LXJlYWQnLFxuICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NMSUVOVF9JRCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICBhc3luYyBqd3Qoe3Rva2VuLCBhY2NvdW50fSkge1xuICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5yZWZyZXNoX3Rva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH0sXG4gICAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24sIHVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyID0gdXNlcjtcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICB9LFxuICAgIH0sXG4gIH0pOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlNwb3RpZnlQcm92aWRlciIsInByb3ZpZGVycyIsImF1dGhvcml6YXRpb24iLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiUkVBQ1RfQVBQX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImFjY291bnQiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJzZXNzaW9uIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();