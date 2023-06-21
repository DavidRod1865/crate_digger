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
exports.id = "pages/api/playlist";
exports.ids = ["pages/api/playlist"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/playlist.js":
/*!*******************************!*\
  !*** ./pages/api/playlist.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _spotify_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spotify/search */ \"(api)/./pages/api/spotify/search.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = async (req, res)=>{\n    const { token: { accessToken  }  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    const response = await (0,_spotify_search__WEBPACK_IMPORTED_MODULE_0__.getUsersPlaylists)(accessToken);\n    const { items  } = await response.json();\n    // console.log(items)\n    return res.status(200).json({\n        items\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxheWxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxRDtBQUNSO0FBRTdDLE1BQU1FLFVBQVUsT0FBT0MsS0FBS0M7SUFDMUIsTUFBTSxFQUNKQyxPQUFPLEVBQUNDLFlBQVcsRUFBQyxHQUNyQixHQUFHLE1BQU1MLDJEQUFVQSxDQUFDO1FBQUNFO0lBQUc7SUFDekIsTUFBTUksV0FBVyxNQUFNUCxrRUFBaUJBLENBQUNNO0lBQ3pDLE1BQU0sRUFBQ0UsTUFBSyxFQUFDLEdBQUcsTUFBTUQsU0FBU0U7SUFDL0IscUJBQXFCO0lBQ3JCLE9BQU9MLElBQUlNLE9BQU8sS0FBS0QsS0FBSztRQUFDRDtJQUFLO0FBQ3BDO0FBRUEsaUVBQWVOLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBmb2xkZXIvLi9wYWdlcy9hcGkvcGxheWxpc3QuanM/NGQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRVc2Vyc1BsYXlsaXN0cyB9IGZyb20gJy4vc3BvdGlmeS9zZWFyY2gnO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRva2VuOiB7YWNjZXNzVG9rZW59LFxuICB9ID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0VXNlcnNQbGF5bGlzdHMoYWNjZXNzVG9rZW4pO1xuICBjb25zdCB7aXRlbXN9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyBjb25zb2xlLmxvZyhpdGVtcylcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtpdGVtc30pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiZ2V0VXNlcnNQbGF5bGlzdHMiLCJnZXRTZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJyZXNwb25zZSIsIml0ZW1zIiwianNvbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/playlist.js\n");

/***/ }),

/***/ "(api)/./pages/api/spotify/search.js":
/*!*************************************!*\
  !*** ./pages/api/spotify/search.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchProfile\": () => (/* binding */ fetchProfile),\n/* harmony export */   \"getUsersPlaylists\": () => (/* binding */ getUsersPlaylists)\n/* harmony export */ });\nconst client_id = process.env.REACT_APP_CLIENT_ID;\nconst client_secret = process.env.REACT_APP_CLIENT_SECRET;\nconst basic = Buffer.from(`${client_id}:${client_secret}`).toString(\"base64\");\nconst TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;\nconst getAccessToken = async (refresh_token)=>{\n    const response = await fetch(TOKEN_ENDPOINT, {\n        method: \"POST\",\n        headers: {\n            Authorization: `Basic ${basic}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        body: new URLSearchParams({\n            grant_type: \"refresh_token\",\n            refresh_token\n        })\n    });\n    return response.json();\n};\nconst getUsersPlaylists = async (refresh_token)=>{\n    const { access_token  } = await getAccessToken(refresh_token);\n    return fetch(\"https://api.spotify.com/v1/me/playlists\", {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\nconst fetchProfile = async (refresh_token)=>{\n    const { access_token  } = await getAccessToken(refresh_token);\n    return fetch(\"https://api.spotify.com/v1/me/\", {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BvdGlmeS9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxZQUFZQyxRQUFRQyxJQUFJQztBQUM5QixNQUFNQyxnQkFBZ0JILFFBQVFDLElBQUlHO0FBQ2xDLE1BQU1DLFFBQVFDLE9BQU9DLEtBQUssQ0FBQyxFQUFFUixVQUFVLENBQUMsRUFBRUksY0FBYyxDQUFDLEVBQUVLLFNBQVM7QUFDcEUsTUFBTUMsaUJBQWlCLENBQUMsc0NBQXNDLENBQUM7QUFFL0QsTUFBTUMsaUJBQWlCLE9BQU9DO0lBQzFCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUosZ0JBQWdCO1FBQzNDSyxRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE1BQU0sRUFBRVgsTUFBTSxDQUFDO1lBQy9CLGdCQUFnQjtRQUNsQjtRQUNBWSxNQUFNLElBQUlDLGdCQUFnQjtZQUN4QkMsWUFBWTtZQUNaUjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQyxTQUFTUTtBQUNwQjtBQUVPLE1BQU1DLG9CQUFvQixPQUFPVjtJQUNwQyxNQUFNLEVBQUNXLGFBQVksRUFBQyxHQUFHLE1BQU1aLGVBQWVDO0lBQzVDLE9BQU9FLE1BQU0sMkNBQTJDO1FBQ3RERSxTQUFTO1lBQ1BDLGVBQWUsQ0FBQyxPQUFPLEVBQUVNLGFBQWEsQ0FBQztRQUN6QztJQUNGO0FBQ0osRUFBRTtBQUVLLE1BQU1DLGVBQWUsT0FBT1o7SUFDakMsTUFBTSxFQUFDVyxhQUFZLEVBQUMsR0FBRyxNQUFNWixlQUFlQztJQUM1QyxPQUFPRSxNQUFNLGtDQUFrQztRQUM3Q0UsU0FBUztZQUNQQyxlQUFlLENBQUMsT0FBTyxFQUFFTSxhQUFhLENBQUM7UUFDekM7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBmb2xkZXIvLi9wYWdlcy9hcGkvc3BvdGlmeS9zZWFyY2guanM/MDY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGllbnRfaWQgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ0xJRU5UX0lEO1xuY29uc3QgY2xpZW50X3NlY3JldCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DTElFTlRfU0VDUkVUO1xuY29uc3QgYmFzaWMgPSBCdWZmZXIuZnJvbShgJHtjbGllbnRfaWR9OiR7Y2xpZW50X3NlY3JldH1gKS50b1N0cmluZygnYmFzZTY0Jyk7XG5jb25zdCBUT0tFTl9FTkRQT0lOVCA9IGBodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbmA7XG5cbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKHJlZnJlc2hfdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFRPS0VOX0VORFBPSU5ULCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7YmFzaWN9YCxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgICAgIHJlZnJlc2hfdG9rZW4sXG4gICAgICB9KSxcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2Vyc1BsYXlsaXN0cyA9IGFzeW5jIChyZWZyZXNoX3Rva2VuKSA9PiB7XG4gICAgY29uc3Qge2FjY2Vzc190b2tlbn0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbihyZWZyZXNoX3Rva2VuKTtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5bGlzdHNcIiwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZmlsZSA9IGFzeW5jIChyZWZyZXNoX3Rva2VuKSA9PiB7XG4gIGNvbnN0IHthY2Nlc3NfdG9rZW59ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVmcmVzaF90b2tlbik7XG4gIHJldHVybiBmZXRjaChcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL1wiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxuICAgIH0sXG4gIH0pO1xufTsiXSwibmFtZXMiOlsiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9DTElFTlRfSUQiLCJjbGllbnRfc2VjcmV0IiwiUkVBQ1RfQVBQX0NMSUVOVF9TRUNSRVQiLCJiYXNpYyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlRPS0VOX0VORFBPSU5UIiwiZ2V0QWNjZXNzVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIlVSTFNlYXJjaFBhcmFtcyIsImdyYW50X3R5cGUiLCJqc29uIiwiZ2V0VXNlcnNQbGF5bGlzdHMiLCJhY2Nlc3NfdG9rZW4iLCJmZXRjaFByb2ZpbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/spotify/search.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/playlist.js"));
module.exports = __webpack_exports__;

})();