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

/***/ "./pages/VoiceComponent.js":
/*!*********************************!*\
  !*** ./pages/VoiceComponent.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//\n//  Header.h\n//  \n//\n//  Created by Rachael Mathew on 12/25/21.\n//\n\n\n\n\n\n\nfunction Voice() {\n    //add the listener to the btn\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                dangerouslySetInnerHTML: {\n                    __html: \"\\n        let h = document.getElementsByClassName('contentTalk')[0];\\n         \\n         var SpeechRecognitionTalk = window.SpeechRecognition || window.webkitSpeechRecognition;\\n         var recognitionTalk = new SpeechRecognitionTalk();\\n         recognitionTalk.onstart = function () {\\n             console.log(\\\"voice is activiated\\\");\\n         };\\n         recognitionTalk.onresult = function(event) {\\n             const current = event.resultIndex;\\n             const transcript = event.results[current][0].transcript;\\n             content.innerHTML = transcript;\\n             console.log(transcript);\\n         };\\n\\n \"\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"talk\",\n                onClick: function() {\n                    return console.log(\"hi\");\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Talk\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"contentTalk\",\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_c = Voice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voice);\nvar _c;\n$RefreshReg$(_c, \"Voice\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Wb2ljZUNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsRUFBRTtBQUNGLEVBQVk7QUFDWixFQUFJO0FBQ0osRUFBRTtBQUNGLEVBQTBDO0FBQzFDLEVBQUU7QUFHbUM7QUFDOEI7QUFDaEM7QUFDSTtBQUNGO0FBQ0w7U0FDdkJPLEtBQUssR0FBRyxDQUFDO0lBRWQsRUFBNkI7SUFFN0IsTUFBTSx1RUFDR0MsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7aUZBQ3pCSCxvREFBTTtnQkFDTEksdUJBQXVCLEVBQUUsQ0FBQztvQkFDeEJDLE1BQU0sRUFBRyxDQWV4QjtnQkFDZSxDQUFDOzs7Ozs7OztpRkFFSkMsQ0FBTTtnQkFBQ0gsU0FBUyxFQUFDLENBQU07Z0JBQUNJLE9BQU8sRUFBRSxRQUFRO29CQUFGQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUk7Ozs7Ozs7OzBCQUFHLENBQUk7O2lGQUM5RFAsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7Ozs7QUFHeEMsQ0FBQztLQTlCUUYsS0FBSztBQWdDZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1ZvaWNlQ29tcG9uZW50LmpzP2YxYzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vICBIZWFkZXIuaFxuLy8gIFxuLy9cbi8vICBDcmVhdGVkIGJ5IFJhY2hhZWwgTWF0aGV3IG9uIDEyLzI1LzIxLlxuLy9cblxuXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBleHBlcmltZW50YWxTdHlsZWQgYXMgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCdcbmZ1bmN0aW9uIFZvaWNlKCkge1xuICAgIFxuICAgIC8vYWRkIHRoZSBsaXN0ZW5lciB0byB0aGUgYnRuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgIGxldCBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudFRhbGsnKVswXTtcbiAgICAgICAgIFxuICAgICAgICAgdmFyIFNwZWVjaFJlY29nbml0aW9uVGFsayA9IHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb247XG4gICAgICAgICB2YXIgcmVjb2duaXRpb25UYWxrID0gbmV3IFNwZWVjaFJlY29nbml0aW9uVGFsaygpO1xuICAgICAgICAgcmVjb2duaXRpb25UYWxrLm9uc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2b2ljZSBpcyBhY3RpdmlhdGVkXCIpO1xuICAgICAgICAgfTtcbiAgICAgICAgIHJlY29nbml0aW9uVGFsay5vbnJlc3VsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGV2ZW50LnJlc3VsdEluZGV4O1xuICAgICAgICAgICAgIGNvbnN0IHRyYW5zY3JpcHQgPSBldmVudC5yZXN1bHRzW2N1cnJlbnRdWzBdLnRyYW5zY3JpcHQ7XG4gICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSB0cmFuc2NyaXB0O1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYW5zY3JpcHQpO1xuICAgICAgICAgfTtcblxuIGAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGFsa1wiIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwiaGlcIil9PlRhbGs8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFRhbGtcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVm9pY2U7XG4iXSwibmFtZXMiOlsiTGluayIsImV4cGVyaW1lbnRhbFN0eWxlZCIsInN0eWxlZCIsIkJveCIsIlBhcGVyIiwiR3JpZCIsIlNjcmlwdCIsIlZvaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJidXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/VoiceComponent.js\n");

/***/ })

});