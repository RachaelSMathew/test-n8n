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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//\n//  Header.h\n//  \n//\n//  Created by Rachael Mathew on 12/25/21.\n//\n\n\n\n\n\n\nfunction Voice() {\n    //add the listener to the btn\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                dangerouslySetInnerHTML: {\n                    __html: \"\\n                    var contentTalk = document.getElementsByClassName('contentTalk')[0];\\n                    var SpeechRecognitionTalk = window.SpeechRecognitionTalk || window.webkitSpeechRecognition;\\n        var recognitionTalk = new SpeechRecognitionTalk();\\n        recognitionTalk.onstart = function () {\\n                    console.log(\\\"voice is activiated\\\");\\n                };\\n                recognitionTalk.onresult = function(event) {\\n                    const current = event.resultIndex;\\n                    const transcript = event.results[current][0].transcript;\\n                    content.innerHTML = transcript;\\n                    console.log(transcript);\\n                };\\n\\n                \"\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"talk\",\n                onClick: function() {\n                    return console.log(\"hi\");\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Talk\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"contentTalk\",\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_c = Voice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voice);\nvar _c;\n$RefreshReg$(_c, \"Voice\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Wb2ljZUNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsRUFBRTtBQUNGLEVBQVk7QUFDWixFQUFJO0FBQ0osRUFBRTtBQUNGLEVBQTBDO0FBQzFDLEVBQUU7QUFHbUM7QUFDOEI7QUFDaEM7QUFDSTtBQUNGO0FBQ0w7U0FFdkJPLEtBQUssR0FBRyxDQUFDO0lBRWQsRUFBNkI7SUFFN0IsTUFBTSx1RUFDR0MsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7aUZBQ3pCSCxvREFBTTtnQkFDTEksdUJBQXVCLEVBQUUsQ0FBQztvQkFDeEJDLE1BQU0sRUFBRyxDQWNUO2dCQUNaLENBQUM7Ozs7Ozs7O2lGQUdRQyxDQUFNO2dCQUFDSCxTQUFTLEVBQUMsQ0FBTTtnQkFBQ0ksT0FBTyxFQUFFLFFBQVE7b0JBQUZDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBSTs7Ozs7Ozs7MEJBQUcsQ0FBSTs7aUZBQzlEUCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7OztBQUd4QyxDQUFDO0tBOUJRRixLQUFLO0FBZ0NkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVm9pY2VDb21wb25lbnQuanM/ZjFjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gIEhlYWRlci5oXG4vLyAgXG4vL1xuLy8gIENyZWF0ZWQgYnkgUmFjaGFlbCBNYXRoZXcgb24gMTIvMjUvMjEuXG4vL1xuXG5cbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuXG5mdW5jdGlvbiBWb2ljZSgpIHtcbiAgICBcbiAgICAvL2FkZCB0aGUgbGlzdGVuZXIgdG8gdGhlIGJ0blxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFNjcmlwdFxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFRhbGsgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250ZW50VGFsaycpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgU3BlZWNoUmVjb2duaXRpb25UYWxrID0gd2luZG93LlNwZWVjaFJlY29nbml0aW9uVGFsayB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb247XG4gICAgICAgIHZhciByZWNvZ25pdGlvblRhbGsgPSBuZXcgU3BlZWNoUmVjb2duaXRpb25UYWxrKCk7XG4gICAgICAgIHJlY29nbml0aW9uVGFsay5vbnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvaWNlIGlzIGFjdGl2aWF0ZWRcIik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWNvZ25pdGlvblRhbGsub25yZXN1bHQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZXZlbnQucmVzdWx0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zY3JpcHQgPSBldmVudC5yZXN1bHRzW2N1cnJlbnRdWzBdLnRyYW5zY3JpcHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gdHJhbnNjcmlwdDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codHJhbnNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGAsXG4gICAgfX1cbiAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWxrXCIgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJoaVwiKX0+VGFsazwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50VGFsa1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWb2ljZTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiZXhwZXJpbWVudGFsU3R5bGVkIiwic3R5bGVkIiwiQm94IiwiUGFwZXIiLCJHcmlkIiwiU2NyaXB0IiwiVm9pY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/VoiceComponent.js\n");

/***/ })

});