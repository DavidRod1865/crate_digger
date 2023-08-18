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

/***/ "spotify-web-api-node":
/*!***************************************!*\
  !*** external "spotify-web-api-node" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("spotify-web-api-node");

/***/ }),

/***/ "(api)/./lib/spotify.jsx":
/*!*************************!*\
  !*** ./lib/spotify.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOGIN_URL\": () => (/* binding */ LOGIN_URL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spotify-web-api-node */ \"spotify-web-api-node\");\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__);\n\nconst scopes = [\n    \"user-read-private\",\n    \"user-read-email\",\n    \"playlist-read-private\",\n    \"playlist-read-collaborative\",\n    \"user-library-read\",\n    \"user-top-read\",\n    \"user-follow-read\",\n    \"user-read-playback-state\",\n    \"user-modify-playback-state\",\n    \"streaming\"\n].join(\",\");\nconst params = {\n    scopes: scopes\n};\nconst queryParamsString = new URLSearchParams(params);\nconst LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`;\nconst spotifyAPI = new (spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default())({\n    clientId: \"4c710b9ea92a41b386bfc88c8ed7281a\",\n    clientSecret: \"d79e71ed233b405fba145a5521848007\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spotifyAPI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc3BvdGlmeS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUVqRCxNQUFNQyxTQUFTO0lBQ1g7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDSCxDQUFDQyxLQUFLO0FBRVAsTUFBTUMsU0FBUztJQUNYRixRQUFRQTtBQUNaO0FBRUEsTUFBTUcsb0JBQW9CLElBQUlDLGdCQUFnQkY7QUFFOUMsTUFBTUcsWUFBWSxDQUFDLHVDQUF1QyxFQUFFRixrQkFBa0JHLFdBQVcsQ0FBQztBQUUxRixNQUFNQyxhQUFhLElBQUlSLDZEQUFhQSxDQUFDO0lBQ2pDUyxVQUFVQyxrQ0FBaUNFO0lBQzNDQyxjQUFjSCxrQ0FBcUNJO0FBQ3ZEO0FBRUEsaUVBQWVOLFVBQVVBLEVBQUM7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcGZvbGRlci8uL2xpYi9zcG90aWZ5LmpzeD84NDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcG90aWZ5V2ViQXBpIGZyb20gXCJzcG90aWZ5LXdlYi1hcGktbm9kZVwiO1xuXG5jb25zdCBzY29wZXMgPSBbXG4gICAgXCJ1c2VyLXJlYWQtcHJpdmF0ZVwiLFxuICAgIFwidXNlci1yZWFkLWVtYWlsXCIsXG4gICAgXCJwbGF5bGlzdC1yZWFkLXByaXZhdGVcIixcbiAgICBcInBsYXlsaXN0LXJlYWQtY29sbGFib3JhdGl2ZVwiLFxuICAgIFwidXNlci1saWJyYXJ5LXJlYWRcIixcbiAgICBcInVzZXItdG9wLXJlYWRcIixcbiAgICBcInVzZXItZm9sbG93LXJlYWRcIixcbiAgICBcInVzZXItcmVhZC1wbGF5YmFjay1zdGF0ZVwiLFxuICAgIFwidXNlci1tb2RpZnktcGxheWJhY2stc3RhdGVcIixcbiAgICBcInN0cmVhbWluZ1wiXG5dLmpvaW4oJywnKTtcblxuY29uc3QgcGFyYW1zID0ge1xuICAgIHNjb3Blczogc2NvcGVzLFxufTtcblxuY29uc3QgcXVlcnlQYXJhbXNTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyk7XG5cbmNvbnN0IExPR0lOX1VSTCA9IGBodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZT8ke3F1ZXJ5UGFyYW1zU3RyaW5nLnRvU3RyaW5nKCl9YFxuXG5jb25zdCBzcG90aWZ5QVBJID0gbmV3IFNwb3RpZnlXZWJBcGkoe1xuICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUQsXG4gICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVULFxufSlcblxuZXhwb3J0IGRlZmF1bHQgc3BvdGlmeUFQSTtcbmV4cG9ydCB7IExPR0lOX1VSTCB9OyJdLCJuYW1lcyI6WyJTcG90aWZ5V2ViQXBpIiwic2NvcGVzIiwiam9pbiIsInBhcmFtcyIsInF1ZXJ5UGFyYW1zU3RyaW5nIiwiVVJMU2VhcmNoUGFyYW1zIiwiTE9HSU5fVVJMIiwidG9TdHJpbmciLCJzcG90aWZ5QVBJIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/spotify.jsx\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].jsx":
/*!******************************************!*\
  !*** ./pages/api/auth/[...nextauth].jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/spotify */ \"(api)/./lib/spotify.jsx\");\n\n\n\nconst refreshAccessToken = async (token)=>{\n    try {\n        _lib_spotify__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setAccessToken(token.accessToken);\n        _lib_spotify__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setRefreshToken(token.refreshToken);\n        const { body: refreshedToken  } = await _lib_spotify__WEBPACK_IMPORTED_MODULE_2__[\"default\"].refreshAccessToken();\n        return {\n            ...token,\n            accessToken: refreshedToken.access_token,\n            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,\n            refreshedToken: refreshedToken.refresh_token ?? token.refreshToken\n        };\n    } catch (error) {\n        console.error(error);\n        return {\n            ...token,\n            error: \"RefreshAccessTokenError\"\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"4c710b9ea92a41b386bfc88c8ed7281a\",\n            clientSecret: \"d79e71ed233b405fba145a5521848007\",\n            authorizationURL: _lib_spotify__WEBPACK_IMPORTED_MODULE_2__.LOGIN_URL\n        })\n    ],\n    secret: \"crazysexycool\",\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async jwt ({ token , account , user  }) {\n            // initial sign in\n            if (account && user) {\n                return {\n                    accessToken: account.access_token,\n                    refreshToken: account.refresh_token,\n                    username: account.providerAccountId,\n                    accessTokenExpires: account.expires_at * 1000\n                };\n            }\n            //returns access token if access token did not expire\n            if (Date.now() < token.accessTokenExpires) {\n                console.log(\"EXISTING TOKEN IS VALID\");\n                return token;\n            }\n            //if access token expires \n            return await refreshAccessToken(token);\n        },\n        async session ({ session , token  }) {\n            session.user.accessToken = token.accessToken;\n            session.user.refreshToken = token.refreshToken;\n            session.user.username = token.username;\n            session.user.image = token.picture;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDd0I7QUFDSTtBQUU3RCxNQUFNSSxxQkFBcUIsT0FBT0M7SUFDaEMsSUFBSTtRQUNGSCxtRUFBeUJJLENBQUNELE1BQU1FO1FBQ2hDTCxvRUFBMEJNLENBQUNILE1BQU1JO1FBRWpDLE1BQU0sRUFBRUMsTUFBTUMsZUFBYyxFQUFFLEdBQUcsTUFBTVQsdUVBQTZCRTtRQUVwRSxPQUFPO1lBQ0wsR0FBR0MsS0FBSztZQUNSRSxhQUFhSSxlQUFlQztZQUM1QkMsb0JBQW9CQyxLQUFLQyxNQUFNSixlQUFlSyxhQUFhO1lBQzNETCxnQkFBZ0JBLGVBQWVNLGlCQUFpQlosTUFBTUk7UUFFeEQ7SUFFRixFQUNBLE9BQU9TLE9BQU87UUFDWkMsUUFBUUQsTUFBTUE7UUFDZCxPQUFPO1lBQ0wsR0FBR2IsS0FBSztZQUNSYSxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsaUVBQWVsQixnREFBUUEsQ0FBQztJQUNwQm9CLFdBQVc7UUFDVG5CLGtFQUFlQSxDQUFDO1lBQ2RvQixVQUFVQyxrQ0FBaUNFO1lBQzNDQyxjQUFjSCxrQ0FBcUNJO1lBQ25EQyxrQkFBa0J4QixtREFBU0E7UUFDN0I7S0FDRDtJQUNEeUIsUUFBUU4sZUFBa0NPO0lBQzFDQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFDNUIsTUFBSyxFQUFFNkIsUUFBTyxFQUFFQyxLQUFJLEVBQUM7WUFDOUIsa0JBQWtCO1lBQ2xCLElBQUlELFdBQVdDLE1BQU07Z0JBQ25CLE9BQU87b0JBQ0w1QixhQUFhMkIsUUFBUXRCO29CQUNyQkgsY0FBY3lCLFFBQVFqQjtvQkFDdEJtQixVQUFVRixRQUFRRztvQkFDbEJ4QixvQkFBb0JxQixRQUFRSSxhQUFhO2dCQUMzQztZQUNGO1lBQ0EscURBQXFEO1lBQ3JELElBQUl4QixLQUFLQyxRQUFRVixNQUFNUSxvQkFBb0I7Z0JBQ3pDTSxRQUFRb0IsSUFBSTtnQkFDWixPQUFPbEM7WUFDVDtZQUVBLDBCQUEwQjtZQUMxQixPQUFPLE1BQU1ELG1CQUFtQkM7UUFDbEM7UUFDQSxNQUFNbUMsU0FBUSxFQUFDQSxRQUFPLEVBQUVuQyxNQUFLLEVBQUM7WUFDNUJtQyxRQUFRTCxLQUFLNUIsY0FBY0YsTUFBTUU7WUFDakNpQyxRQUFRTCxLQUFLMUIsZUFBZUosTUFBTUk7WUFDbEMrQixRQUFRTCxLQUFLQyxXQUFXL0IsTUFBTStCO1lBQzlCSSxRQUFRTCxLQUFLTSxRQUFRcEMsTUFBTXFDO1lBRTNCLE9BQU9GO1FBQ1Q7SUFDRjtBQUNGLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcGZvbGRlci8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanN4P2MxNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgU3BvdGlmeVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvc3BvdGlmeSdcbmltcG9ydCBzcG90aWZ5QVBJLCB7IExPR0lOX1VSTCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zcG90aWZ5JztcblxuY29uc3QgcmVmcmVzaEFjY2Vzc1Rva2VuID0gYXN5bmMgKHRva2VuKSA9PiB7XG4gIHRyeSB7XG4gICAgc3BvdGlmeUFQSS5zZXRBY2Nlc3NUb2tlbih0b2tlbi5hY2Nlc3NUb2tlbik7XG4gICAgc3BvdGlmeUFQSS5zZXRSZWZyZXNoVG9rZW4odG9rZW4ucmVmcmVzaFRva2VuKTtcblxuICAgIGNvbnN0IHsgYm9keTogcmVmcmVzaGVkVG9rZW4gfSA9IGF3YWl0IHNwb3RpZnlBUEkucmVmcmVzaEFjY2Vzc1Rva2VuKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udG9rZW4sXG4gICAgICBhY2Nlc3NUb2tlbjogcmVmcmVzaGVkVG9rZW4uYWNjZXNzX3Rva2VuLFxuICAgICAgYWNjZXNzVG9rZW5FeHBpcmVzOiBEYXRlLm5vdyArIHJlZnJlc2hlZFRva2VuLmV4cGlyZXNfaW4gKiAxMDAwLFxuICAgICAgcmVmcmVzaGVkVG9rZW46IHJlZnJlc2hlZFRva2VuLnJlZnJlc2hfdG9rZW4gPz8gdG9rZW4ucmVmcmVzaFRva2VuXG4gICAgICAvL3JlcGxhY2VzIHJlZnJlc2ggdG9rZW4gb3IgZWxzZSBmYWxscyBiYWNrIHRvIG9sZCByZWZyZXNoIHRva2VuXG4gICAgfVxuXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgLi4udG9rZW4sXG4gICAgICBlcnJvcjogXCJSZWZyZXNoQWNjZXNzVG9rZW5FcnJvclwiXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIFNwb3RpZnlQcm92aWRlcih7XG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUQsXG4gICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgYXV0aG9yaXphdGlvblVSTDogTE9HSU5fVVJMLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0pXVF9TRUNSRVQsXG4gICAgcGFnZXM6IHtcbiAgICAgIHNpZ25JbjogXCIvbG9naW5cIlxuICAgIH0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICBhc3luYyBqd3Qoe3Rva2VuLCBhY2NvdW50LCB1c2VyfSkge1xuICAgICAgICAvLyBpbml0aWFsIHNpZ24gaW5cbiAgICAgICAgaWYgKGFjY291bnQgJiYgdXNlcikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjb3VudC5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IGFjY291bnQucmVmcmVzaF90b2tlbixcbiAgICAgICAgICAgIHVzZXJuYW1lOiBhY2NvdW50LnByb3ZpZGVyQWNjb3VudElkLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmVzOiBhY2NvdW50LmV4cGlyZXNfYXQgKiAxMDAwLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy9yZXR1cm5zIGFjY2VzcyB0b2tlbiBpZiBhY2Nlc3MgdG9rZW4gZGlkIG5vdCBleHBpcmVcbiAgICAgICAgaWYgKERhdGUubm93KCkgPCB0b2tlbi5hY2Nlc3NUb2tlbkV4cGlyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRVhJU1RJTkcgVE9LRU4gSVMgVkFMSUQnKVxuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgYWNjZXNzIHRva2VuIGV4cGlyZXMgXG4gICAgICAgIHJldHVybiBhd2FpdCByZWZyZXNoQWNjZXNzVG9rZW4odG9rZW4pXG4gICAgICB9LFxuICAgICAgYXN5bmMgc2Vzc2lvbih7c2Vzc2lvbiwgdG9rZW59KSB7XG4gICAgICAgIHNlc3Npb24udXNlci5hY2Nlc3NUb2tlbiA9IHRva2VuLmFjY2Vzc1Rva2VuO1xuICAgICAgICBzZXNzaW9uLnVzZXIucmVmcmVzaFRva2VuID0gdG9rZW4ucmVmcmVzaFRva2VuO1xuICAgICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPSB0b2tlbi51c2VybmFtZTtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmltYWdlID0gdG9rZW4ucGljdHVyZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgfSxcbiAgICB9LFxuICB9KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJTcG90aWZ5UHJvdmlkZXIiLCJzcG90aWZ5QVBJIiwiTE9HSU5fVVJMIiwicmVmcmVzaEFjY2Vzc1Rva2VuIiwidG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwic2V0UmVmcmVzaFRva2VuIiwicmVmcmVzaFRva2VuIiwiYm9keSIsInJlZnJlc2hlZFRva2VuIiwiYWNjZXNzX3Rva2VuIiwiYWNjZXNzVG9rZW5FeHBpcmVzIiwiRGF0ZSIsIm5vdyIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwiZXJyb3IiLCJjb25zb2xlIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb25VUkwiLCJzZWNyZXQiLCJORVhUX1BVQkxJQ19KV1RfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJhY2NvdW50IiwidXNlciIsInVzZXJuYW1lIiwicHJvdmlkZXJBY2NvdW50SWQiLCJleHBpcmVzX2F0IiwibG9nIiwic2Vzc2lvbiIsImltYWdlIiwicGljdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].jsx"));
module.exports = __webpack_exports__;

})();