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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\nvar _this = undefined;\n\n\nvar Session = function(props) {\n    console.log(props.sessions, \"session props are comming\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"its Session Components\"\n    }, void 0, false, {\n        fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = Session;\nvar IndexPage = function() {\n    console.log(\"+++data++\", _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speaker-list\",\n        children: [\n            \"Hello From Pluralsight!\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                    var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-xs-12 col-sm-12 com-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card card-height p-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"speaker-img d-flex flex-grow justify-content-center align-items-center h-300\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"contain-fit\",\n                                        src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                        width: \"300\",\n                                        alt: \"\".concat(first, \" \").concat(last)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"speaker-info\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex justify-content-between mb-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-truncate w-200\",\n                                                children: [\n                                                    first,\n                                                    \" \",\n                                                    last\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    bio,\n                                                    company,\n                                                    twitterHandle,\n                                                    favorite\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"sessionBox card h-250\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {}, void 0, false, {\n                                        fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, this)\n                    }, id, false, {\n                        fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Desktop/React-Dev/designing-components/clip-05-building-functional-components/pages/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQW1DO0FBRW5DLElBQU1DLE9BQU8sR0FBRyxTQUFDQyxLQUFLLEVBQUk7SUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNHLFFBQVEsRUFBRSwyQkFBMkIsQ0FBQztJQUV4RCxxQkFDRSw4REFBQ0MsS0FBRztrQkFBQyx3QkFDTDs7Ozs7YUFBTSxDQUNQO0FBQ0gsQ0FBQztBQVBLTCxLQUFBQSxPQUFPO0FBU2IsSUFBTU0sU0FBUyxHQUFHLFdBQU07SUFFdEJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRUosOENBQUksQ0FBQztJQUM5QixxQkFDRSw4REFBQ00sS0FBRztRQUFDRSxTQUFTLEVBQUMsd0JBQXdCOztZQUFDLHlCQUN0QzswQkFBQSw4REFBQ0YsS0FBRztnQkFBQ0UsU0FBUyxFQUFDLEtBQUs7MEJBQ2pCUixrREFBUSxDQUFDLFNBQVNVLE9BQU8sRUFBQztvQkFDdkIsSUFDRUMsRUFBRSxHQVFBRCxPQUFPLENBUlRDLEVBQUUsRUFDRkMsR0FBRyxHQU9ERixPQUFPLENBUFRFLEdBQUcsRUFDSEMsS0FBSyxHQU1ISCxPQUFPLENBTlRHLEtBQUssRUFDTEMsSUFBSSxHQUtGSixPQUFPLENBTFRJLElBQUksRUFDSkMsUUFBUSxHQUlOTCxPQUFPLENBSlRLLFFBQVEsRUFDUkMsYUFBYSxHQUdYTixPQUFPLENBSFRNLGFBQWEsRUFDYkMsT0FBTyxHQUVMUCxPQUFPLENBRlRPLE9BQU8sRUFDUFosUUFBUSxHQUNOSyxPQUFPLENBRFRMLFFBQVE7b0JBRVYscUJBQ0UsOERBQUNDLEtBQUc7d0JBQVVFLFNBQVMsRUFBQywyREFBMkQ7a0NBQ25GLDRFQUFDRixLQUFHOzRCQUFDRSxTQUFTLEVBQUMsMkJBQTJCOzs4Q0FDeEMsOERBQUNGLEtBQUc7b0NBQUNFLFNBQVMsRUFBQyw4RUFBOEU7OENBQzNGLDRFQUFDVSxLQUFHO3dDQUFDVixTQUFTLEVBQUMsYUFBYTt3Q0FDMUJXLEdBQUcsRUFBRSxrQkFBaUIsQ0FBSyxNQUFJLENBQVBSLEVBQUUsRUFBQyxNQUFJLENBQUM7d0NBQ2hDUyxLQUFLLEVBQUMsS0FBSzt3Q0FDWEMsR0FBRyxFQUFFLEVBQUMsQ0FBV1AsTUFBSSxDQUFiRCxLQUFLLEVBQUMsR0FBQyxDQUFPLFFBQUxDLElBQUksQ0FBRTs7Ozs7NENBQ3JCOzs7Ozt3Q0FDRTs4Q0FDTiw4REFBQ1IsS0FBRztvQ0FBQ0UsU0FBUyxFQUFDLGNBQWM7O3NEQUMzQiw4REFBQ0YsS0FBRzs0Q0FBQ0UsU0FBUyxFQUFDLHFDQUFxQztzREFDbEQsNEVBQUNjLElBQUU7Z0RBQUNkLFNBQVMsRUFBQyxxQkFBcUI7O29EQUNoQ0ssS0FBSztvREFBQyxHQUFDO29EQUFDQyxJQUFJOzs7Ozs7b0RBQ1Y7Ozs7O2dEQUNEO3NEQUNOLDhEQUFDUixLQUFHO3NEQUNGLDRFQUFDaUIsR0FBQzs7b0RBQUVYLEdBQUc7b0RBQUVLLE9BQU87b0RBQUVELGFBQWE7b0RBQUVELFFBQVE7Ozs7OztvREFBSzs7Ozs7Z0RBQzFDOzs7Ozs7d0NBQ0Y7OENBQ04sOERBQUNULEtBQUc7b0NBQUNFLFNBQVMsRUFBQyx1QkFBdUI7OENBQ3BDLDRFQUFDUCxPQUFPOzs7OzRDQUFFOzs7Ozt3Q0FDTjs7Ozs7O2dDQUNKO3VCQXRCSVUsRUFBRTs7Ozs0QkF1QlIsQ0FDTDtnQkFDTCxDQUFDLENBQUM7Ozs7O3FCQUVFOzs7Ozs7YUFDRixDQUNQO0FBQ0gsQ0FBQztBQWhES0osTUFBQUEsU0FBUztBQWtEZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tICcuLi9TcGVha2VyRGF0YSdcblxuY29uc3QgU2Vzc2lvbiA9IChwcm9wcykgPT57XG4gIGNvbnNvbGUubG9nKHByb3BzLnNlc3Npb25zLCAnc2Vzc2lvbiBwcm9wcyBhcmUgY29tbWluZycpXG4gIFxuICByZXR1cm4oXG4gICAgPGRpdj5pdHMgU2Vzc2lvbiBDb21wb25lbnRzXG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuXG4gIGNvbnNvbGUubG9nKCcrKytkYXRhKysnLCBkYXRhKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgc3BlYWtlci1saXN0Jz5IZWxsbyBGcm9tIFBsdXJhbHNpZ2h0IVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbihzcGVha2VyKXtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGJpbyxcbiAgICAgICAgICAgICAgZmlyc3QsIFxuICAgICAgICAgICAgICBsYXN0LFxuICAgICAgICAgICAgICBmYXZvcml0ZSxcbiAgICAgICAgICAgICAgdHdpdHRlckhhbmRsZSxcbiAgICAgICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICAgICAgc2Vzc2lvbnNcbiAgICAgICAgICAgIH0gPSBzcGVha2VyXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT0nY29sLXhzLTEyIGNvbC1zbS0xMiBjb20tbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgY2FyZC1oZWlnaHQgcC00IG10LTQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGVha2VyLWltZyBkLWZsZXggZmxleC1ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwJz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWluLWZpdCcgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTMnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUgdy0yMDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57YmlvfXtjb21wYW55fXt0d2l0dGVySGFuZGxlfXtmYXZvcml0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vzc2lvbkJveCBjYXJkIGgtMjUwJz5cbiAgICAgICAgICAgICAgICAgICAgPFNlc3Npb24vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pfVxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuXG4iXSwibmFtZXMiOlsiZGF0YSIsIlNlc3Npb24iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9ucyIsImRpdiIsIkluZGV4UGFnZSIsImNsYXNzTmFtZSIsIm1hcCIsInNwZWFrZXIiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});