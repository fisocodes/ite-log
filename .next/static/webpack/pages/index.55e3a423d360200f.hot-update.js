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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _components_Petition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Petition */ \"./components/Petition.tsx\");\n\n\n\n\nvar data = [\n    {\n        location: \"200\",\n        description: \"Formatear computadora\",\n        name: \"Oscar Tirado\"\n    },\n    {\n        location: \"300\",\n        description: \"No tiene internet\",\n        name: \"Sara Hern\\xe1ndez\"\n    },\n    {\n        location: \"100\",\n        description: \"Cambiar nodo\",\n        name: \"Alma Temis\"\n    },\n    {\n        location: \"600\",\n        description: \"Instalar office\",\n        name: \"Ulises Romeo\"\n    }, \n];\nfunction Home() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                order: 1,\n                children: \"Pendientes\"\n            }, void 0, false, {\n                fileName: \"/home/soporteserver/bitacora/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            data.map(function(petition) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Petition__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    data: petition\n                }, void 0, false, {\n                    fileName: \"/home/soporteserver/bitacora/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 31\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/soporteserver/bitacora/pages/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 12\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFzQztBQUNBO0FBR1E7QUFFOUMsSUFBTUcsSUFBSSxHQUFHO0lBQ1Q7UUFDSUMsUUFBUSxFQUFFLEtBQUs7UUFDZkMsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQ0MsSUFBSSxFQUFFLGNBQWM7S0FDdkI7SUFDRDtRQUNJRixRQUFRLEVBQUUsS0FBSztRQUNmQyxXQUFXLEVBQUUsbUJBQW1CO1FBQ2hDQyxJQUFJLEVBQUUsbUJBQWdCO0tBQ3pCO0lBQ0Q7UUFDSUYsUUFBUSxFQUFFLEtBQUs7UUFDZkMsV0FBVyxFQUFFLGNBQWM7UUFDM0JDLElBQUksRUFBRSxZQUFZO0tBQ3JCO0lBQ0Q7UUFDSUYsUUFBUSxFQUFFLEtBQUs7UUFDZkMsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QkMsSUFBSSxFQUFFLGNBQWM7S0FDdkI7Q0FDSjtBQUVjLFNBQVNDLElBQUksR0FBRTs7SUFDMUIscUJBQU8sOERBQUNQLGdEQUFLOzswQkFDVCw4REFBQ0MsZ0RBQUs7Z0JBQUNPLEtBQUssRUFBRSxDQUFDOzBCQUFFLFlBQVU7Ozs7O29CQUFRO1lBQ2xDTCxJQUFJLENBQUNNLEdBQUcsQ0FBQ0MsU0FBQUEsUUFBUTtxQ0FBSSw4REFBQ1IsNERBQVE7b0JBQUNDLElBQUksRUFBRU8sUUFBUTs7Ozs7eUJBQUc7YUFBQSxDQUFDOzs7Ozs7WUFDOUM7Q0FDWDtBQUx1QkgsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAbWFudGluZS9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdAbWFudGluZS9jb3JlJztcblxuaW1wb3J0IFBldGl0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGV0aXRpb24nO1xuXG5jb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgICAgbG9jYXRpb246ICcyMDAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Zvcm1hdGVhciBjb21wdXRhZG9yYScsXG4gICAgICAgIG5hbWU6ICdPc2NhciBUaXJhZG8nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxvY2F0aW9uOiAnMzAwJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdObyB0aWVuZSBpbnRlcm5ldCcsXG4gICAgICAgIG5hbWU6ICdTYXJhIEhlcm7DoW5kZXonXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxvY2F0aW9uOiAnMTAwJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYW1iaWFyIG5vZG8nLFxuICAgICAgICBuYW1lOiAnQWxtYSBUZW1pcydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbG9jYXRpb246ICc2MDAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0luc3RhbGFyIG9mZmljZScsXG4gICAgICAgIG5hbWU6ICdVbGlzZXMgUm9tZW8nXG4gICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xuICAgIHJldHVybiA8U3RhY2s+XG4gICAgICAgIDxUaXRsZSBvcmRlcj17MX0+UGVuZGllbnRlczwvVGl0bGU+XG4gICAgICAgIHtkYXRhLm1hcChwZXRpdGlvbiA9PiA8UGV0aXRpb24gZGF0YT17cGV0aXRpb259Lz4pfVxuICAgIDwvU3RhY2s+XG59Il0sIm5hbWVzIjpbIlN0YWNrIiwiVGl0bGUiLCJQZXRpdGlvbiIsImRhdGEiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwibmFtZSIsIkhvbWUiLCJvcmRlciIsIm1hcCIsInBldGl0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});