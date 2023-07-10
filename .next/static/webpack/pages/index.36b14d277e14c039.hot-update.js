"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Center.js":
/*!******************************!*\
  !*** ./components/Center.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_playlistAtom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/atoms/playlistAtom */ \"./atoms/playlistAtom.js\");\n/* harmony import */ var _Songs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Songs */ \"./components/Songs.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst colors = [\n    \"from-red-500\",\n    \"from-blue-500\",\n    \"from-green-500\",\n    \"from-yellow-500\",\n    \"from-indigo-500\",\n    \"from-purple-500\",\n    \"from-pink-500\",\n    \"from-orange-500\",\n    \"from-teal-500\",\n    \"from-cyan-500\"\n];\nconst Center = ()=>{\n    var _user_images, _playlist_images;\n    _s();\n    const spotifyAPI = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const defaultImage = \"/recordImage.png\";\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const playlistID = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_atoms_playlistAtom__WEBPACK_IMPORTED_MODULE_6__.playlistIdState);\n    const [playlist, setPlaylist] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_atoms_playlistAtom__WEBPACK_IMPORTED_MODULE_6__.playlistState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (spotifyAPI.getAccessToken()) {\n            spotifyAPI.getMe().then((data)=>setUser(data.body));\n        }\n    }, [\n        session,\n        spotifyAPI\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (spotifyAPI.getAccessToken()) {\n            spotifyAPI.getPlaylist(playlistID).then((data)=>setPlaylist(data.body)).catch((err)=>console.log(\"Playlist failed to load.\", err));\n        }\n    }, [\n        spotifyAPI,\n        playlistID\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setColor((0,lodash__WEBPACK_IMPORTED_MODULE_3__.shuffle)(colors).pop());\n    }, [\n        playlistID\n    ]);\n    // console.log(playlist)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-grow h-screen overflow-y-scroll scrollbar-hide\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"absolute top-5 right-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center bg-black space-x-3 text-white opacity-90 hover:opacity-80 cursor-pointer rounded-full p-2 pr-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"rounded-full h-6 w-6\",\n                            src: (user === null || user === void 0 ? void 0 : (_user_images = user.images) === null || _user_images === void 0 ? void 0 : _user_images[0].url) || defaultImage,\n                            alt: \"profile-image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                            lineNumber: 60,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: user === null || user === void 0 ? void 0 : user.display_name\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                            lineNumber: 61,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                            lineNumber: 62,\n                            columnNumber: 19\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                    lineNumber: 59,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                lineNumber: 58,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex items-end space-x-7 bg-gradient-to-b to-black \".concat(color, \" h-80 p-8\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"h-48 w-48 shadow-xl\",\n                        src: playlist === null || playlist === void 0 ? void 0 : (_playlist_images = playlist.images) === null || _playlist_images === void 0 ? void 0 : _playlist_images[0].url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"PLAYLIST\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl md:text-3xl lg:text-5xl font-bold\",\n                                children: playlist === null || playlist === void 0 ? void 0 : playlist.name\n                            }, void 0, false, {\n                                fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                lineNumber: 66,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Songs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    playlist: playlist\n                }, playlist.id, false, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n                lineNumber: 74,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Center.js\",\n        lineNumber: 57,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Center, \"d5g/MTh3He6tZMJv0aAh5rP7QNo=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = Center;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Center);\nvar _c;\n$RefreshReg$(_c, \"Center\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NlbnRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2dCO0FBQ2Y7QUFDWjtBQUNZO0FBQ1k7QUFDYztBQUMxQztBQUU1QixNQUFNVyxTQUFTO0lBQ1g7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDSDtBQUVELE1BQU1DLFNBQVM7UUFxQzhDQyxjQU9OQzs7SUEzQ25ELE1BQU1DLGFBQWFWLDZEQUFVQTtJQUM3QixNQUFNLEVBQUVXLE1BQU1DLFFBQU8sRUFBRSxHQUFHZCwyREFBVUE7SUFDcEMsTUFBTWUsZUFBZTtJQUNyQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksTUFBTVEsUUFBUSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTXFCLGFBQWFmLHNEQUFjQSxDQUFDRSxnRUFBZUE7SUFDakQsTUFBTSxDQUFDSyxVQUFVUyxZQUFZLEdBQUdqQixzREFBY0EsQ0FBQ0UsOERBQWFBO0lBRTVEUixnREFBU0EsQ0FBQztRQUNSLElBQUdlLFdBQVdTLGtCQUFpQjtZQUM3QlQsV0FBV1UsUUFDTkMsS0FBSyxDQUFDVixPQUNISyxRQUFRTCxLQUFLVztRQUN2QjtJQUNGLEdBQUc7UUFBQ1Y7UUFBU0Y7S0FBVztJQUV4QmYsZ0RBQVNBLENBQUM7UUFDTixJQUFHZSxXQUFXUyxrQkFBaUI7WUFDN0JULFdBQVdhLFlBQVlOLFlBQ3BCSSxLQUFLLENBQUNWLE9BQ0hPLFlBQVlQLEtBQUtXLE9BQ3BCRSxNQUFNLENBQUNDLE1BQ0pDLFFBQVFDLElBQUksNEJBQTRCRjtRQUNoRDtJQUNGLEdBQUc7UUFBQ2Y7UUFBWU87S0FBVztJQUU3QnRCLGdEQUFTQSxDQUFDO1FBQ05vQixTQUFTaEIsK0NBQU9BLENBQUNPLFFBQVFzQjtJQUMzQixHQUFHO1FBQUNYO0tBQVc7SUFFakIsd0JBQXdCO0lBRXhCLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU9ELFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQUlGLFdBQVU7NEJBQXVCRyxLQUFLekIsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxlQUFBQSxLQUFNMEIsb0JBQU4xQiwwQkFBQUEsS0FBQUEsSUFBQUEsWUFBYyxDQUFDLEVBQUUsQ0FBQzJCLFFBQU90Qjs0QkFBY3VCLEtBQUk7Ozs7OztzQ0FDdEYsOERBQUNDO3NDQUFJN0IsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNOEI7Ozs7OztzQ0FDWCw4REFBQ3pDLHFFQUFlQTs0QkFBQ2lDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluQyw4REFBQ1M7Z0JBQVFULFdBQVcsc0RBQTRELE9BQU5oQixPQUFNOztrQ0FDOUUsOERBQUNrQjt3QkFBSUYsV0FBVTt3QkFBc0JHLEdBQUcsRUFBR3hCLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsbUJBQUFBLFNBQVV5QixvQkFBVnpCLDhCQUFBQSxLQUFBQSxJQUFBQSxnQkFBa0IsQ0FBQyxFQUFFLENBQUMwQjt3QkFBTUMsS0FBSTs7Ozs7O2tDQUMzRSw4REFBQ1A7OzBDQUNHLDhEQUFDVzswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQztnQ0FBR1gsV0FBVTswQ0FBOENyQixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk1RSw4REFBQ2I7MEJBQ0MsNEVBQUN4Qiw4Q0FBS0E7b0JBQW1CSSxVQUFVQTttQkFBdkJBLFNBQVNrQzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQztHQXhETXBDOztRQUNpQlAseURBQVVBO1FBQ0hGLHVEQUFVQTtRQUlqQkksa0RBQWNBO1FBQ0RELGtEQUFjQTs7O0tBUDVDTTtBQTBETiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NlbnRlci5qcz9mODlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENoZXZyb25Eb3duSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgc2h1ZmZsZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB1c2VTcG90aWZ5IGZyb20gJ0AvaG9va3MvdXNlU3BvdGlmeSc7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgcGxheWxpc3RTdGF0ZSwgcGxheWxpc3RJZFN0YXRlIH0gZnJvbSAnQC9hdG9tcy9wbGF5bGlzdEF0b20nO1xuaW1wb3J0IFNvbmdzIGZyb20gJy4vU29uZ3MnO1xuXG5jb25zdCBjb2xvcnMgPSBbXG4gICAgJ2Zyb20tcmVkLTUwMCcsXG4gICAgJ2Zyb20tYmx1ZS01MDAnLFxuICAgICdmcm9tLWdyZWVuLTUwMCcsXG4gICAgJ2Zyb20teWVsbG93LTUwMCcsXG4gICAgJ2Zyb20taW5kaWdvLTUwMCcsXG4gICAgJ2Zyb20tcHVycGxlLTUwMCcsXG4gICAgJ2Zyb20tcGluay01MDAnLFxuICAgICdmcm9tLW9yYW5nZS01MDAnLFxuICAgICdmcm9tLXRlYWwtNTAwJyxcbiAgICAnZnJvbS1jeWFuLTUwMCdcbl07XG5cbmNvbnN0IENlbnRlciA9ICgpID0+IHtcbiAgICBjb25zdCBzcG90aWZ5QVBJID0gdXNlU3BvdGlmeSgpXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gICAgY29uc3QgZGVmYXVsdEltYWdlID0gJy9yZWNvcmRJbWFnZS5wbmcnXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgcGxheWxpc3RJRCA9IHVzZVJlY29pbFZhbHVlKHBsYXlsaXN0SWRTdGF0ZSlcbiAgICBjb25zdCBbcGxheWxpc3QsIHNldFBsYXlsaXN0XSA9IHVzZVJlY29pbFN0YXRlKHBsYXlsaXN0U3RhdGUpXG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZihzcG90aWZ5QVBJLmdldEFjY2Vzc1Rva2VuKCkpe1xuICAgICAgICBzcG90aWZ5QVBJLmdldE1lKClcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEuYm9keSkpXG4gICAgICB9XG4gICAgfSwgW3Nlc3Npb24sIHNwb3RpZnlBUEldKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoc3BvdGlmeUFQSS5nZXRBY2Nlc3NUb2tlbigpKXtcbiAgICAgICAgICBzcG90aWZ5QVBJLmdldFBsYXlsaXN0KHBsYXlsaXN0SUQpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gXG4gICAgICAgICAgICAgICAgc2V0UGxheWxpc3QoZGF0YS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGxheWxpc3QgZmFpbGVkIHRvIGxvYWQuJywgZXJyKSlcbiAgICAgICAgfVxuICAgICAgfSwgW3Nwb3RpZnlBUEksIHBsYXlsaXN0SURdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q29sb3Ioc2h1ZmZsZShjb2xvcnMpLnBvcCgpKVxuICAgICAgfSwgW3BsYXlsaXN0SURdKVxuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWxpc3QpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBoLXNjcmVlbiBvdmVyZmxvdy15LXNjcm9sbCBzY3JvbGxiYXItaGlkZSc+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC01IHJpZ2h0LTgnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgc3BhY2UteC0zIHRleHQtd2hpdGUgb3BhY2l0eS05MCBob3ZlcjpvcGFjaXR5LTgwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBwLTIgcHItMic+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTYgdy02XCIgc3JjPXt1c2VyPy5pbWFnZXM/LlswXS51cmwgfHwgZGVmYXVsdEltYWdlfSBhbHQ9XCJwcm9maWxlLWltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMj57dXNlcj8uZGlzcGxheV9uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd25JY29uIGNsYXNzTmFtZT0naC01IHctNScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWVuZCBzcGFjZS14LTcgYmctZ3JhZGllbnQtdG8tYiB0by1ibGFjayAke2NvbG9yfSBoLTgwIHAtOGB9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2gtNDggdy00OCBzaGFkb3cteGwnIHNyYz17IHBsYXlsaXN0Py5pbWFnZXM/LlswXS51cmwgfSBhbHQ9JycgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+UExBWUxJU1Q8L3A+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgbWQ6dGV4dC0zeGwgbGc6dGV4dC01eGwgZm9udC1ib2xkJz57cGxheWxpc3Q/Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U29uZ3Mga2V5PXtwbGF5bGlzdC5pZH0gcGxheWxpc3Q9e3BsYXlsaXN0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDZW50ZXIiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGV2cm9uRG93bkljb24iLCJ1c2VTZXNzaW9uIiwic2h1ZmZsZSIsInVzZVNwb3RpZnkiLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZVJlY29pbFZhbHVlIiwicGxheWxpc3RTdGF0ZSIsInBsYXlsaXN0SWRTdGF0ZSIsIlNvbmdzIiwiY29sb3JzIiwiQ2VudGVyIiwidXNlciIsInBsYXlsaXN0Iiwic3BvdGlmeUFQSSIsImRhdGEiLCJzZXNzaW9uIiwiZGVmYXVsdEltYWdlIiwiY29sb3IiLCJzZXRDb2xvciIsInNldFVzZXIiLCJwbGF5bGlzdElEIiwic2V0UGxheWxpc3QiLCJnZXRBY2Nlc3NUb2tlbiIsImdldE1lIiwidGhlbiIsImJvZHkiLCJnZXRQbGF5bGlzdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInBvcCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImltZyIsInNyYyIsImltYWdlcyIsInVybCIsImFsdCIsImgyIiwiZGlzcGxheV9uYW1lIiwic2VjdGlvbiIsInAiLCJoMSIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Center.js\n"));

/***/ })

});