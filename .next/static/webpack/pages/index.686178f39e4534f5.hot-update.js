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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_recordingButton_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/recordingButton.gif */ \"./images/recordingButton.gif\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//\n//  Header.h\n//  \n//\n//  Created by Rachael Mathew on 12/25/21.\n//\n\n\n\n\n\n\n\n\n\nfunction Voice() {\n    //add the listener to the btn\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                dangerouslySetInnerHTML: {\n                    __html: \"\\n                    var blinkingRecord = document.getElementsByClassName('blinkingRecord')[0];\\n                    blinkingRecord.style.display = \\\"none\\\";\\n                    var buttonTalk = document.getElementsByClassName('talk')[0];\\n                    var contentTalk = document.getElementsByClassName('contentTalk')[0];\\n                    var answerTalk = document.getElementsByClassName('answerTalk')[0];\\n                    var SpeechRecognitionTalk = window.SpeechRecognitionTalk || window.webkitSpeechRecognition;\\n                    var recognitionTalk = new SpeechRecognitionTalk();\\n        recognitionTalk.onstart = function () {\\n        blinkingRecord.style.display = \\\"inline-block\\\";\\n                    console.log(\\\"voice is activiated\\\");\\n                    contentTalk.innerHTML = \\\"\\\";\\n                    answerTalk.innerHTML = \\\"\\\";\\n                    buttonTalk.style.background = \\\"grey\\\";\\n                    \\n                };\\n                recognitionTalk.onresult = function(event) {\\n                    blinkingRecord.style.display = \\\"none\\\";\\n                    buttonTalk.style.background = \\\"white\\\";\\n                    const current = event.resultIndex;\\n                    const transcript = event.results[current][0].transcript;\\n                    contentTalk.innerHTML = transcript;\\n                    console.log(transcript);\\n                    if(transcript.includes(\\\"how old is Rachel\\\")) {\\n                        setTimeout(function(){\\n                            answerTalk.style.color = \\\"black\\\";\\n                            answerTalk.innerHTML = \\\"She is 21 years old, but doesn't drink :)\\\";\\n                        },1000);\\n                    }\\n        if(transcript.includes(\\\"who is Rachel\\\")) {\\n            setTimeout(function(){\\n                answerTalk.style.color = \\\"black\\\";\\n                answerTalk.innerHTML = \\\"An idiot, who's trying her best to code and survive\\\";\\n            },1000);\\n        }\\n        \\n        if(transcript.includes(\\\"how tall is Rachel\\\")) {\\n        setTimeout(function(){\\n            answerTalk.style.color = \\\"black\\\";\\n            answerTalk.innerHTML = \\\"She's 7'12 don't ask again.\\\";\\n\\n        },1000);\\n        }\\n        if(transcript.includes(\\\"how is Rachel\\\")) {\\n            setTimeout(function(){\\n                answerTalk.style.color = \\\"black\\\";\\n                answerTalk.innerHTML = \\\"Terrible now that you're here.\\\";\\n            },1000);\\n        }\\n                };\\n\\n                \"\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {\n                        className: \"talk\",\n                        onClick: function() {\n                            return recognitionTalk.start();\n                        },\n                        whileHover: {\n                            scale: 1.1,\n                            boxShadow: \"0px 0px 8px rgb(75,0,130)\"\n                        },\n                        __source: {\n                            fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                                lineNumber: 82,\n                                columnNumber: 150\n                            },\n                            __self: this,\n                            children: \"Press Me to Ask a Question About Rachael\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"blinkingRecord\",\n                        __source: {\n                            fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _images_recordingButton_gif__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: 100,\n                            height: 75,\n                            __source: {\n                                fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            },\n                            __self: this\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"contentTalk\",\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"answerTalk\",\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 89,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_c = Voice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voice);\nvar _c;\n$RefreshReg$(_c, \"Voice\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Wb2ljZUNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQUU7QUFDRixFQUFZO0FBQ1osRUFBSTtBQUNKLEVBQUU7QUFDRixFQUEwQztBQUMxQyxFQUFFO0FBR21DO0FBQzhCO0FBQ2hDO0FBQ0k7QUFDRjtBQUNMO0FBQ0k7QUFDTjtBQUN5QjtTQUU5Q1UsS0FBSyxHQUFHLENBQUM7SUFFZCxFQUE2QjtJQUU3QixNQUFNLHVFQUNHQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OztpRkFDekJOLG9EQUFNO2dCQUNMTyx1QkFBdUIsRUFBRSxDQUFDO29CQUN4QkMsTUFBTSxFQUFHLENBbURUO2dCQUNaLENBQUM7Ozs7Ozs7O2tGQUVRSCxDQUFHOzs7Ozs7Ozt5RkFDSEosd0RBQWE7d0JBQUNLLFNBQVMsRUFBQyxDQUFNO3dCQUFDSSxPQUFPLEVBQUUsUUFBUTs0QkFBRkMsTUFBTSxDQUFOQSxlQUFlLENBQUNDLEtBQUs7O3dCQUFJQyxVQUFVLEVBQUUsQ0FBQ0M7NEJBQUFBLEtBQUssRUFBQyxHQUFHOzRCQUFDQyxTQUFTLEVBQUUsQ0FBMkI7d0JBQUMsQ0FBQzs7Ozs7Ozt1R0FBR0MsQ0FBRTs7Ozs7OztzQ0FBQyxDQUF3Qzs7O3lGQUNwTFgsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQWdCOzs7Ozs7O3VHQUM5QkosbURBQUs7NEJBQUNlLEdBQUcsRUFBRWQsbUVBQVc7NEJBQUdlLEtBQUssRUFBRSxHQUFHOzRCQUNwQ0MsTUFBTSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7O2lGQUdUZCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7aUZBQzNCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7OztBQUl2QyxDQUFDO0tBMUVRRixLQUFLO0FBNEVkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVm9pY2VDb21wb25lbnQuanM/ZjFjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gIEhlYWRlci5oXG4vLyAgXG4vL1xuLy8gIENyZWF0ZWQgYnkgUmFjaGFlbCBNYXRoZXcgb24gMTIvMjUvMjEuXG4vL1xuXG5cbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBibGlua2luZ1JlYyBmcm9tICcuLi9pbWFnZXMvcmVjb3JkaW5nQnV0dG9uLmdpZic7XG5cbmZ1bmN0aW9uIFZvaWNlKCkge1xuICAgIFxuICAgIC8vYWRkIHRoZSBsaXN0ZW5lciB0byB0aGUgYnRuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgICAgICAgIHZhciBibGlua2luZ1JlY29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JsaW5raW5nUmVjb3JkJylbMF07XG4gICAgICAgICAgICAgICAgICAgIGJsaW5raW5nUmVjb3JkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ1dHRvblRhbGsgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWxrJylbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VGFsayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnRUYWxrJylbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbnN3ZXJUYWxrID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW5zd2VyVGFsaycpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgU3BlZWNoUmVjb2duaXRpb25UYWxrID0gd2luZG93LlNwZWVjaFJlY29nbml0aW9uVGFsayB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWNvZ25pdGlvblRhbGsgPSBuZXcgU3BlZWNoUmVjb2duaXRpb25UYWxrKCk7XG4gICAgICAgIHJlY29nbml0aW9uVGFsay5vbnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBibGlua2luZ1JlY29yZC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2b2ljZSBpcyBhY3RpdmlhdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50VGFsay5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJUYWxrLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRhbGsuc3R5bGUuYmFja2dyb3VuZCA9IFwiZ3JleVwiO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlY29nbml0aW9uVGFsay5vbnJlc3VsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGJsaW5raW5nUmVjb3JkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGFsay5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZXZlbnQucmVzdWx0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zY3JpcHQgPSBldmVudC5yZXN1bHRzW2N1cnJlbnRdWzBdLnRyYW5zY3JpcHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUYWxrLmlubmVySFRNTCA9IHRyYW5zY3JpcHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYW5zY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICBpZih0cmFuc2NyaXB0LmluY2x1ZGVzKFwiaG93IG9sZCBpcyBSYWNoZWxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJUYWxrLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlclRhbGsuaW5uZXJIVE1MID0gXCJTaGUgaXMgMjEgeWVhcnMgb2xkLCBidXQgZG9lc24ndCBkcmluayA6KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBpZih0cmFuc2NyaXB0LmluY2x1ZGVzKFwid2hvIGlzIFJhY2hlbFwiKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGFuc3dlclRhbGsuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgYW5zd2VyVGFsay5pbm5lckhUTUwgPSBcIkFuIGlkaW90LCB3aG8ncyB0cnlpbmcgaGVyIGJlc3QgdG8gY29kZSBhbmQgc3Vydml2ZVwiO1xuICAgICAgICAgICAgfSwxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodHJhbnNjcmlwdC5pbmNsdWRlcyhcImhvdyB0YWxsIGlzIFJhY2hlbFwiKSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbnN3ZXJUYWxrLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgYW5zd2VyVGFsay5pbm5lckhUTUwgPSBcIlNoZSdzIDcnMTIgZG9uJ3QgYXNrIGFnYWluLlwiO1xuXG4gICAgICAgIH0sMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHJhbnNjcmlwdC5pbmNsdWRlcyhcImhvdyBpcyBSYWNoZWxcIikpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBhbnN3ZXJUYWxrLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGFuc3dlclRhbGsuaW5uZXJIVE1MID0gXCJUZXJyaWJsZSBub3cgdGhhdCB5b3UncmUgaGVyZS5cIjtcbiAgICAgICAgICAgIH0sMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgYCxcbiAgICB9fVxuICAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uIGNsYXNzTmFtZT1cInRhbGtcIiBvbkNsaWNrPXsoKSA9PiByZWNvZ25pdGlvblRhbGsuc3RhcnQoKX0gd2hpbGVIb3Zlcj17e3NjYWxlOjEuMSxib3hTaGFkb3c6IFwiMHB4IDBweCA4cHggcmdiKDc1LDAsMTMwKVwiLH19PjxoMT5QcmVzcyBNZSB0byBBc2sgYSBRdWVzdGlvbiBBYm91dCBSYWNoYWVsPC9oMT48L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsaW5raW5nUmVjb3JkXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtibGlua2luZ1JlY30gIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezc1fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50VGFsa1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJUYWxrXCI+PC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVm9pY2U7XG4iXSwibmFtZXMiOlsiTGluayIsImV4cGVyaW1lbnRhbFN0eWxlZCIsInN0eWxlZCIsIkJveCIsIlBhcGVyIiwiR3JpZCIsIlNjcmlwdCIsIm1vdGlvbiIsIkltYWdlIiwiYmxpbmtpbmdSZWMiLCJWb2ljZSIsImRpdiIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYnV0dG9uIiwib25DbGljayIsInJlY29nbml0aW9uVGFsayIsInN0YXJ0Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwiYm94U2hhZG93IiwiaDEiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/VoiceComponent.js\n");

/***/ })

});