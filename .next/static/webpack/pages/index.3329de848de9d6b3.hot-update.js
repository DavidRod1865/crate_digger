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

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_playlistAtom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/atoms/playlistAtom */ \"./atoms/playlistAtom.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const spotifyAPI = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [playlists, setPlaylists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [playlistID, setPlaylistID] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_atoms_playlistAtom__WEBPACK_IMPORTED_MODULE_5__.playlistIdState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (spotifyAPI.getAccessToken()) {\n            spotifyAPI.getUserPlaylists().then((data)=>{\n                setPlaylists(data.body.items);\n            });\n        }\n    }, [\n        session,\n        spotifyAPI\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll h-screen scroll-bar-hide sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.HomeIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.SearchIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.LibraryIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Your Playlists\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"border-t-[0.1px] border-gray-900\"\n                }, void 0, false, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.PlusCircleIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Create Playlist\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.HeartIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Liked Songs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.RssIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Your Episodes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"border-t-[0.1px] border-gray-900\"\n                }, void 0, false, {\n                    fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                playlists.map((playlist)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>setPlaylistID(playlist.id),\n                        className: \"cursor-pointer hover:text-white\",\n                        children: playlist.name\n                    }, playlist.id, false, {\n                        fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/davidrodriguez/Desktop/crate_digger/components/Sidebar.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"5vtUrj/qB3HLYzO4rNtmajQXclw=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUM4RDtBQUNuRTtBQUNEO0FBQ0o7QUFDZTtBQUV2RCxNQUFNYSxVQUFVOztJQUNkLE1BQU1DLGFBQWFKLDZEQUFVQTtJQUM3QixNQUFNLEVBQUVLLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdSLDJEQUFVQTtJQUM1QyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDa0IsWUFBWUMsY0FBYyxHQUFHVixzREFBY0EsQ0FBQ0MsZ0VBQWVBO0lBRWxFWCxnREFBU0EsQ0FBQztRQUNSLElBQUdhLFdBQVdRLGtCQUFpQjtZQUM3QlIsV0FBV1MsbUJBQW1CQyxLQUFLLENBQUNUO2dCQUNsQ0ksYUFBYUosS0FBS1UsS0FBS0M7WUFDekI7UUFDRjtJQUNGLEdBQUc7UUFBQ1Y7UUFBU0Y7S0FBVztJQUV4QixxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFPRCxXQUFVOztzQ0FDaEIsOERBQUN6Qiw4REFBUUE7NEJBQUN5QixXQUFVOzs7Ozs7c0NBQ3BCLDhEQUFDRTtzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUVMLDhEQUFDRDtvQkFBT0QsV0FBVTs7c0NBQ2hCLDhEQUFDeEIsZ0VBQVVBOzRCQUFDd0IsV0FBVTs7Ozs7O3NDQUN0Qiw4REFBQ0U7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFFTCw4REFBQ0Q7b0JBQU9ELFdBQVU7O3NDQUNoQiw4REFBQ3ZCLGlFQUFXQTs0QkFBQ3VCLFdBQVU7Ozs7OztzQ0FDdkIsOERBQUNFO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBRUwsOERBQUNDO29CQUFHSCxXQUFVOzs7Ozs7OEJBRWQsOERBQUNDO29CQUFPRCxXQUFVOztzQ0FDaEIsOERBQUNyQixvRUFBY0E7NEJBQUNxQixXQUFVOzs7Ozs7c0NBQzFCLDhEQUFDRTtzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUVMLDhEQUFDRDtvQkFBT0QsV0FBVTs7c0NBQ2hCLDhEQUFDdEIsK0RBQVNBOzRCQUFDc0IsV0FBVTs7Ozs7O3NDQUNyQiw4REFBQ0U7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFFTCw4REFBQ0Q7b0JBQU9ELFdBQVU7O3NDQUNoQiw4REFBQ3BCLDZEQUFPQTs0QkFBQ29CLFdBQVU7Ozs7OztzQ0FDbkIsOERBQUNFO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBRUwsOERBQUNDO29CQUFHSCxXQUFVOzs7Ozs7Z0JBRWJWLFVBQVVjLElBQUksQ0FBQ0MseUJBQ2QsOERBQUNIO3dCQUFvQkksU0FBUyxJQUFNYixjQUFjWSxTQUFTRTt3QkFBS1AsV0FBVTtrQ0FDdkVLLFNBQVNHO3VCQURKSCxTQUFTRTs7Ozs7Ozs7Ozs7Ozs7OztBQVEzQjtHQXRETXRCOztRQUNlSCx5REFBVUE7UUFDS0QsdURBQVVBO1FBRVJFLGtEQUFjQTs7O0tBSjlDRTtBQXdETiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanM/M2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSG9tZUljb24sIFNlYXJjaEljb24sIExpYnJhcnlJY29uLCBIZWFydEljb24sIFBsdXNDaXJjbGVJY29uLCBSc3NJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB1c2VTcG90aWZ5IGZyb20gJ0AvaG9va3MvdXNlU3BvdGlmeSc7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyBwbGF5bGlzdElkU3RhdGUgfSBmcm9tICdAL2F0b21zL3BsYXlsaXN0QXRvbSc7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNwb3RpZnlBUEkgPSB1c2VTcG90aWZ5KClcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW3BsYXlsaXN0cywgc2V0UGxheWxpc3RzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcGxheWxpc3RJRCwgc2V0UGxheWxpc3RJRF0gPSB1c2VSZWNvaWxTdGF0ZShwbGF5bGlzdElkU3RhdGUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihzcG90aWZ5QVBJLmdldEFjY2Vzc1Rva2VuKCkpe1xuICAgICAgc3BvdGlmeUFQSS5nZXRVc2VyUGxheWxpc3RzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRQbGF5bGlzdHMoZGF0YS5ib2R5Lml0ZW1zKVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtzZXNzaW9uLCBzcG90aWZ5QVBJXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHAtNSB0ZXh0LXhzIGxnOnRleHQtc20gYm9yZGVyLXIgYm9yZGVyLWdyYXktOTAwIG92ZXJmbG93LXktc2Nyb2xsIGgtc2NyZWVuIHNjcm9sbC1iYXItaGlkZSBzbTptYXgtdy1bMTJyZW1dIGxnOm1heC13LVsxNXJlbV0gaGlkZGVuIG1kOmlubGluZS1mbGV4Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTQnPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUnPlxuICAgICAgICAgIDxIb21lSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICA8cD5Ib21lPC9wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBob3Zlcjp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICA8cD5TZWFyY2g8L3A+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUnPlxuICAgICAgICAgIDxMaWJyYXJ5SWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICA8cD5Zb3VyIFBsYXlsaXN0czwvcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItdC1bMC4xcHhdIGJvcmRlci1ncmF5LTkwMFwiLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUnPlxuICAgICAgICAgIDxQbHVzQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICA8cD5DcmVhdGUgUGxheWxpc3Q8L3A+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUnPlxuICAgICAgICAgIDxIZWFydEljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgPHA+TGlrZWQgU29uZ3M8L3A+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUnPlxuICAgICAgICAgIDxSc3NJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgIDxwPllvdXIgRXBpc29kZXM8L3A+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLXQtWzAuMXB4XSBib3JkZXItZ3JheS05MDBcIi8+XG5cbiAgICAgICAge3BsYXlsaXN0cy5tYXAoKHBsYXlsaXN0KSA9PiAoXG4gICAgICAgICAgPHAga2V5PXtwbGF5bGlzdC5pZH0gb25DbGljaz17KCkgPT4gc2V0UGxheWxpc3RJRChwbGF5bGlzdC5pZCl9IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICB7cGxheWxpc3QubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWVJY29uIiwiU2VhcmNoSWNvbiIsIkxpYnJhcnlJY29uIiwiSGVhcnRJY29uIiwiUGx1c0NpcmNsZUljb24iLCJSc3NJY29uIiwidXNlU2Vzc2lvbiIsInVzZVNwb3RpZnkiLCJ1c2VSZWNvaWxTdGF0ZSIsInBsYXlsaXN0SWRTdGF0ZSIsIlNpZGViYXIiLCJzcG90aWZ5QVBJIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJwbGF5bGlzdHMiLCJzZXRQbGF5bGlzdHMiLCJwbGF5bGlzdElEIiwic2V0UGxheWxpc3RJRCIsImdldEFjY2Vzc1Rva2VuIiwiZ2V0VXNlclBsYXlsaXN0cyIsInRoZW4iLCJib2R5IiwiaXRlbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJwIiwiaHIiLCJtYXAiLCJwbGF5bGlzdCIsIm9uQ2xpY2siLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n"));

/***/ })

});