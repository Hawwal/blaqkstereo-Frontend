"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Disclosure_headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Disclosure!=!@headlessui/react */ \"__barrel_optimize__?names=Disclosure!=!../../node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var _barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Bars3Icon,XMarkIcon!=!@heroicons/react/24/outline */ \"__barrel_optimize__?names=Bars3Icon,XMarkIcon!=!../../node_modules/@heroicons/react/24/outline/esm/index.js\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"../../node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"../../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"../../node_modules/wagmi/dist/esm/exports/index.js\");\n/* harmony import */ var wagmi_connectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors */ \"../../node_modules/wagmi/dist/esm/exports/connectors.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [hideConnectBtn, setHideConnectBtn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { connect } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (window.ethereum && window.ethereum.isMiniPay) {\n            setHideConnectBtn(true);\n            connect({\n                connector: (0,wagmi_connectors__WEBPACK_IMPORTED_MODULE_4__.injected)({\n                    target: \"metaMask\"\n                })\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Disclosure_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure, {\n        as: \"nav\",\n        className: \"bg-prosperity secondary border-black\",\n        children: (param)=>{\n            let { open } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative flex h-16 justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-y-0 left-0 flex items-center sm:hidden\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Disclosure_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Button, {\n                                        className: \"inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"sr-only\",\n                                                children: \"Open main menu\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 19\n                                            }, this),\n                                            open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.XMarkIcon, {\n                                                className: \"block h-6 w-6\",\n                                                \"aria-hidden\": \"true\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 21\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.Bars3Icon, {\n                                                className: \"block h-6 w-6\",\n                                                \"aria-hidden\": \"true\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-shrink-0 items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                className: \"block h-8 w-auto sm:block lg:block\",\n                                                src: \"/logo.svg\",\n                                                width: \"24\",\n                                                height: \"24\",\n                                                alt: \"Celo Logo\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"hidden sm:ml-6 sm:flex sm:space-x-8\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                className: \"inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900\",\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0\",\n                                    children: !hideConnectBtn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.ConnectButton, {\n                                        showBalance: {\n                                            smallScreen: true,\n                                            largeScreen: false\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Disclosure_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Panel, {\n                        className: \"sm:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-1 pt-2 pb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Disclosure_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Button, {\n                                as: \"a\",\n                                href: \"#\",\n                                className: \"block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Developer/blaqkstereo-app/packages/react-app/components/Header.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"CvPoz6Y5Z1LjPerEyxGXXVlTGZA=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDb0I7QUFDWjtBQUN4QjtBQUNhO0FBQ1Q7QUFDUztBQUU3QixTQUFTUzs7SUFDdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLEVBQUVNLE9BQU8sRUFBRSxHQUFHTCxpREFBVUE7SUFFOUJGLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVEsT0FBT0MsUUFBUSxJQUFJRCxPQUFPQyxRQUFRLENBQUNDLFNBQVMsRUFBRTtZQUNoREosa0JBQWtCO1lBQ2xCQyxRQUFRO2dCQUFFSSxXQUFXUiwwREFBUUEsQ0FBQztvQkFBRVMsUUFBUTtnQkFBVztZQUFHO1FBQ3hEO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNqQiwwRkFBVUE7UUFBQ2tCLElBQUc7UUFBTUMsV0FBVTtrQkFDNUI7Z0JBQUMsRUFBRUMsSUFBSSxFQUFFO2lDQUNSOztrQ0FDRSw4REFBQ0M7d0JBQUlGLFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFJRixXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUlGLFdBQVU7OENBRWIsNEVBQUNuQiwwRkFBVUEsQ0FBQ3NCLE1BQU07d0NBQUNILFdBQVU7OzBEQUMzQiw4REFBQ0k7Z0RBQUtKLFdBQVU7MERBQVU7Ozs7Ozs0Q0FDekJDLHFCQUNDLDhEQUFDbEIsNEdBQVNBO2dEQUFDaUIsV0FBVTtnREFBZ0JLLGVBQVk7Ozs7O3FFQUVqRCw4REFBQ3ZCLDRHQUFTQTtnREFBQ2tCLFdBQVU7Z0RBQWdCSyxlQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJdkQsOERBQUNIO29DQUFJRixXQUFVOztzREFDYiw4REFBQ0U7NENBQUlGLFdBQVU7c0RBQ2IsNEVBQUNmLG1EQUFLQTtnREFDSmUsV0FBVTtnREFDVk0sS0FBSTtnREFDSkMsT0FBTTtnREFDTkMsUUFBTztnREFDUEMsS0FBSTs7Ozs7Ozs7Ozs7c0RBR1IsOERBQUNQOzRDQUFJRixXQUFVO3NEQUNiLDRFQUFDVTtnREFDQ0MsTUFBSztnREFDTFgsV0FBVTswREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS0wsOERBQUNFO29DQUFJRixXQUFVOzhDQUNaLENBQUNULGdDQUNBLDhEQUFDUCxpRUFBYUE7d0NBQ1o0QixhQUFhOzRDQUNYQyxhQUFhOzRDQUNiQyxhQUFhO3dDQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU9WLDhEQUFDakMsMEZBQVVBLENBQUNrQyxLQUFLO3dCQUFDZixXQUFVO2tDQUMxQiw0RUFBQ0U7NEJBQUlGLFdBQVU7c0NBQ2IsNEVBQUNuQiwwRkFBVUEsQ0FBQ3NCLE1BQU07Z0NBQ2hCSixJQUFHO2dDQUNIWSxNQUFLO2dDQUNMWCxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVZjtHQTVFd0JWOztRQUVGRiw2Q0FBVUE7OztLQUZSRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNjbG9zdXJlIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnO1xuaW1wb3J0IHsgQmFyczNJY29uLCBYTWFya0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbm5lY3QgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtoaWRlQ29ubmVjdEJ0biwgc2V0SGlkZUNvbm5lY3RCdG5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGNvbm5lY3QgfSA9IHVzZUNvbm5lY3QoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0gJiYgd2luZG93LmV0aGVyZXVtLmlzTWluaVBheSkge1xuICAgICAgc2V0SGlkZUNvbm5lY3RCdG4odHJ1ZSk7XG4gICAgICBjb25uZWN0KHsgY29ubmVjdG9yOiBpbmplY3RlZCh7IHRhcmdldDogJ21ldGFNYXNrJyB9KSB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxEaXNjbG9zdXJlIGFzPVwibmF2XCIgY2xhc3NOYW1lPVwiYmctcHJvc3Blcml0eSBzZWNvbmRhcnkgYm9yZGVyLWJsYWNrXCI+XG4gICAgICB7KHsgb3BlbiB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC0yIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGgtMTYganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBzbTpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICB7LyogTW9iaWxlIG1lbnUgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgIDxEaXNjbG9zdXJlLkJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBwLTIgdGV4dC1ibGFjayBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cm91bmRlZC1ub25lIGZvY3VzOnJpbmctYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtvcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8WE1hcmtJY29uIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEJhcnMzSWNvbiBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9EaXNjbG9zdXJlLkJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2ggc206anVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGgtOCB3LWF1dG8gc206YmxvY2sgbGc6YmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5zdmdcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDZWxvIExvZ29cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTptbC02IHNtOmZsZXggc206c3BhY2UteC04XCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIGJvcmRlci1ibGFjayBweC0xIHB0LTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwci0yIHNtOnN0YXRpYyBzbTppbnNldC1hdXRvIHNtOm1sLTYgc206cHItMFwiPlxuICAgICAgICAgICAgICAgIHshaGlkZUNvbm5lY3RCdG4gJiYgKFxuICAgICAgICAgICAgICAgICAgPENvbm5lY3RCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgc2hvd0JhbGFuY2U9e3tcbiAgICAgICAgICAgICAgICAgICAgICBzbWFsbFNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYXJnZVNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8RGlzY2xvc3VyZS5QYW5lbCBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xIHB0LTIgcGItNFwiPlxuICAgICAgICAgICAgICA8RGlzY2xvc3VyZS5CdXR0b25cbiAgICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBib3JkZXItbC00IGJvcmRlci1ibGFjayBweS0yIHBsLTMgcHItNCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvRGlzY2xvc3VyZS5CdXR0b24+XG4gICAgICAgICAgICAgIHsvKiBBZGQgaGVyZSB5b3VyIGN1c3RvbSBtZW51IGVsZW1lbnRzICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9EaXNjbG9zdXJlLlBhbmVsPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9EaXNjbG9zdXJlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkRpc2Nsb3N1cmUiLCJCYXJzM0ljb24iLCJYTWFya0ljb24iLCJDb25uZWN0QnV0dG9uIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbm5lY3QiLCJpbmplY3RlZCIsIkhlYWRlciIsImhpZGVDb25uZWN0QnRuIiwic2V0SGlkZUNvbm5lY3RCdG4iLCJjb25uZWN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJpc01pbmlQYXkiLCJjb25uZWN0b3IiLCJ0YXJnZXQiLCJhcyIsImNsYXNzTmFtZSIsIm9wZW4iLCJkaXYiLCJCdXR0b24iLCJzcGFuIiwiYXJpYS1oaWRkZW4iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImEiLCJocmVmIiwic2hvd0JhbGFuY2UiLCJzbWFsbFNjcmVlbiIsImxhcmdlU2NyZWVuIiwiUGFuZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});