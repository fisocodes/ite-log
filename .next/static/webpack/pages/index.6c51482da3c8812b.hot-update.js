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

/***/ "./components/Petition.tsx":
/*!*********************************!*\
  !*** ./components/Petition.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Petition; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\nfunction Petition(param) {\n    var data = param.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                        order: 3,\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"/home/soporteserver/bitacora/components/Petition.tsx\",\n                        lineNumber: 6,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                        order: 3,\n                        children: data.location\n                    }, void 0, false, {\n                        fileName: \"/home/soporteserver/bitacora/components/Petition.tsx\",\n                        lineNumber: 7,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/soporteserver/bitacora/components/Petition.tsx\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                order: 6,\n                children: data.description\n            }, void 0, false, {\n                fileName: \"/home/soporteserver/bitacora/components/Petition.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/soporteserver/bitacora/components/Petition.tsx\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, this);\n};\n_c = Petition;\nvar _c;\n$RefreshReg$(_c, \"Petition\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BldGl0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBbUQ7QUFFcEMsU0FBU0csUUFBUSxDQUFDLEtBQU0sRUFBQztRQUFQLElBQUssR0FBTCxLQUFNLENBQUxDLElBQUk7SUFDbEMscUJBQU8sOERBQUNILGdEQUFLOzswQkFDVCw4REFBQ0QsZ0RBQUs7O2tDQUNGLDhEQUFDRSxnREFBSzt3QkFBQ0csS0FBSyxFQUFFLENBQUM7a0NBQUdELElBQUksQ0FBQ0UsSUFBSTs7Ozs7NEJBQVM7a0NBQ3BDLDhEQUFDSixnREFBSzt3QkFBQ0csS0FBSyxFQUFFLENBQUM7a0NBQUdELElBQUksQ0FBQ0csUUFBUTs7Ozs7NEJBQVM7Ozs7OztvQkFDcEM7MEJBQ0osOERBQUNMLGdEQUFLO2dCQUFDRyxLQUFLLEVBQUUsQ0FBQzswQkFBR0QsSUFBSSxDQUFDSSxXQUFXOzs7OztvQkFBUzs7Ozs7O1lBQzNDO0NBQ1g7QUFSdUJMLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZXRpdGlvbi50c3g/YjNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcm91cCwgU3RhY2ssIFRpdGxlIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXRpdGlvbih7ZGF0YX0pe1xuICAgIHJldHVybiA8U3RhY2s+XG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxUaXRsZSBvcmRlcj17M30+e2RhdGEubmFtZX08L1RpdGxlPlxuICAgICAgICAgICAgPFRpdGxlIG9yZGVyPXszfT57ZGF0YS5sb2NhdGlvbn08L1RpdGxlPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgPFRpdGxlIG9yZGVyPXs2fT57ZGF0YS5kZXNjcmlwdGlvbn08L1RpdGxlPlxuICAgIDwvU3RhY2s+IFxufSJdLCJuYW1lcyI6WyJHcm91cCIsIlN0YWNrIiwiVGl0bGUiLCJQZXRpdGlvbiIsImRhdGEiLCJvcmRlciIsIm5hbWUiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Petition.tsx\n"));

/***/ })

});