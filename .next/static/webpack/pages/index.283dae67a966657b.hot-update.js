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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_recordingButton_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/recordingButton.gif */ \"./images/recordingButton.gif\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//\n//  Header.h\n//  \n//\n//  Created by Rachael Mathew on 12/25/21.\n//\n\n\n\n\n\n\n\n\n\nfunction Voice() {\n    //add the listener to the btn\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                dangerouslySetInnerHTML: {\n                    __html: \"\\n        var buttonTalk = document.getElementsByClassName('talk')[0];\\n                    var contentTalk = document.getElementsByClassName('contentTalk')[0];\\n                    var answerTalk = document.getElementsByClassName('answerTalk')[0];\\n                    var SpeechRecognitionTalk = window.SpeechRecognitionTalk || window.webkitSpeechRecognition;\\n        var recognitionTalk = new SpeechRecognitionTalk();\\n        recognitionTalk.onstart = function () {\\n                    console.log(\\\"voice is activiated\\\");\\n                    contentTalk.innerHTML = \\\"\\\";\\n                    answerTalk.innerHTML = \\\"\\\";\\n                    buttonTalk.style.background = \\\"grey\\\";\\n                    \\n                };\\n                recognitionTalk.onresult = function(event) {\\n                    buttonTalk.style.background = \\\"white\\\";\\n                    const current = event.resultIndex;\\n                    const transcript = event.results[current][0].transcript;\\n                    contentTalk.innerHTML = transcript;\\n                    console.log(transcript);\\n                    if(transcript.includes(\\\"how old is Rachel\\\")) {\\n                        setTimeout(function(){\\n                            answerTalk.style.color = \\\"black\\\";\\n                            answerTalk.innerHTML = \\\"She is 21 years old, but doesn't drink :)\\\";\\n                        },5000);\\n                    }\\n        if(transcript.includes(\\\"who is Rachel\\\")) {\\n            setTimeout(function(){\\n                answerTalk.style.color = \\\"black\\\";\\n                answerTalk.innerHTML = \\\"An idiot, who's trying her best to code and survive\\\";\\n            },5000);\\n        }\\n        \\n        if(transcript.includes(\\\"how tall is Rachel\\\")) {\\n        setTimeout(function(){\\n            answerTalk.style.color = \\\"black\\\";\\n            answerTalk.innerHTML = \\\"She's 7'12 don't ask again.\\\";\\n\\n        },5000);\\n        }\\n        if(transcript.includes(\\\"how is Rachel\\\")) {\\n            setTimeout(function(){\\n                answerTalk.style.color = \\\"black\\\";\\n                answerTalk.innerHTML = \\\"Terrible now that you're here.\\\";\\n            },5000);\\n        }\\n                };\\n\\n                \"\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {\n                className: \"talk\",\n                onClick: function() {\n                    return recognitionTalk.start();\n                },\n                whileHover: {\n                    scale: 1.1,\n                    boxShadow: \"0px 0px 8px rgb(75,0,130)\"\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                        lineNumber: 78,\n                        columnNumber: 150\n                    },\n                    __self: this,\n                    children: \"Press Me to Ask a Question About Rachael\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"contentTalk\",\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"answerTalk\",\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"blinkingRecord\",\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _images_recordingButton_gif__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    width: 200,\n                    className: \"zIndexmyPic\",\n                    height: 150,\n                    __source: {\n                        fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    },\n                    __self: this\n                })\n            })\n        ]\n    }));\n}\n_c = Voice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voice);\nvar _c;\n$RefreshReg$(_c, \"Voice\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Wb2ljZUNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQUU7QUFDRixFQUFZO0FBQ1osRUFBSTtBQUNKLEVBQUU7QUFDRixFQUEwQztBQUMxQyxFQUFFO0FBR21DO0FBQzhCO0FBQ2hDO0FBQ0k7QUFDRjtBQUNMO0FBQ0k7QUFDTjtBQUN5QjtTQUU5Q1UsS0FBSyxHQUFHLENBQUM7SUFFZCxFQUE2QjtJQUU3QixNQUFNLHVFQUNHQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OztpRkFDekJOLG9EQUFNO2dCQUNMTyx1QkFBdUIsRUFBRSxDQUFDO29CQUN4QkMsTUFBTSxFQUFHLENBK0NUO2dCQUNaLENBQUM7Ozs7Ozs7O2lGQUdRUCx3REFBYTtnQkFBQ0ssU0FBUyxFQUFDLENBQU07Z0JBQUNJLE9BQU8sRUFBRSxRQUFRO29CQUFGQyxNQUFNLENBQU5BLGVBQWUsQ0FBQ0MsS0FBSzs7Z0JBQUlDLFVBQVUsRUFBRSxDQUFDQztvQkFBQUEsS0FBSyxFQUFDLEdBQUc7b0JBQUNDLFNBQVMsRUFBRSxDQUEyQjtnQkFBQyxDQUFDOzs7Ozs7OytGQUFHQyxDQUFFOzs7Ozs7OzhCQUFDLENBQXdDOzs7aUZBQ3BMWCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7aUZBQzNCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7aUZBQzFCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7K0ZBQzlCSixtREFBSztvQkFBQ2UsR0FBRyxFQUFFZCxtRUFBVztvQkFBR2UsS0FBSyxFQUFFLEdBQUc7b0JBQUVaLFNBQVMsRUFBQyxDQUFhO29CQUM3RGEsTUFBTSxFQUFFLEdBQUc7Ozs7Ozs7Ozs7O0FBSXZCLENBQUM7S0FwRVFmLEtBQUs7QUFzRWQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Wb2ljZUNvbXBvbmVudC5qcz9mMWM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vXG4vLyAgSGVhZGVyLmhcbi8vICBcbi8vXG4vLyAgQ3JlYXRlZCBieSBSYWNoYWVsIE1hdGhldyBvbiAxMi8yNS8yMS5cbi8vXG5cblxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgZXhwZXJpbWVudGFsU3R5bGVkIGFzIHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IGJsaW5raW5nUmVjIGZyb20gJy4uL2ltYWdlcy9yZWNvcmRpbmdCdXR0b24uZ2lmJztcblxuZnVuY3Rpb24gVm9pY2UoKSB7XG4gICAgXG4gICAgLy9hZGQgdGhlIGxpc3RlbmVyIHRvIHRoZSBidG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxTY3JpcHRcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgdmFyIGJ1dHRvblRhbGsgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWxrJylbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VGFsayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnRUYWxrJylbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbnN3ZXJUYWxrID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW5zd2VyVGFsaycpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgU3BlZWNoUmVjb2duaXRpb25UYWxrID0gd2luZG93LlNwZWVjaFJlY29nbml0aW9uVGFsayB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb247XG4gICAgICAgIHZhciByZWNvZ25pdGlvblRhbGsgPSBuZXcgU3BlZWNoUmVjb2duaXRpb25UYWxrKCk7XG4gICAgICAgIHJlY29nbml0aW9uVGFsay5vbnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvaWNlIGlzIGFjdGl2aWF0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUYWxrLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGFuc3dlclRhbGsuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGFsay5zdHlsZS5iYWNrZ3JvdW5kID0gXCJncmV5XCI7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVjb2duaXRpb25UYWxrLm9ucmVzdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGFsay5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZXZlbnQucmVzdWx0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zY3JpcHQgPSBldmVudC5yZXN1bHRzW2N1cnJlbnRdWzBdLnRyYW5zY3JpcHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUYWxrLmlubmVySFRNTCA9IHRyYW5zY3JpcHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYW5zY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICBpZih0cmFuc2NyaXB0LmluY2x1ZGVzKFwiaG93IG9sZCBpcyBSYWNoZWxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJUYWxrLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlclRhbGsuaW5uZXJIVE1MID0gXCJTaGUgaXMgMjEgeWVhcnMgb2xkLCBidXQgZG9lc24ndCBkcmluayA6KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSw1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBpZih0cmFuc2NyaXB0LmluY2x1ZGVzKFwid2hvIGlzIFJhY2hlbFwiKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGFuc3dlclRhbGsuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgYW5zd2VyVGFsay5pbm5lckhUTUwgPSBcIkFuIGlkaW90LCB3aG8ncyB0cnlpbmcgaGVyIGJlc3QgdG8gY29kZSBhbmQgc3Vydml2ZVwiO1xuICAgICAgICAgICAgfSw1MDAwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodHJhbnNjcmlwdC5pbmNsdWRlcyhcImhvdyB0YWxsIGlzIFJhY2hlbFwiKSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbnN3ZXJUYWxrLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgYW5zd2VyVGFsay5pbm5lckhUTUwgPSBcIlNoZSdzIDcnMTIgZG9uJ3QgYXNrIGFnYWluLlwiO1xuXG4gICAgICAgIH0sNTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHJhbnNjcmlwdC5pbmNsdWRlcyhcImhvdyBpcyBSYWNoZWxcIikpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBhbnN3ZXJUYWxrLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGFuc3dlclRhbGsuaW5uZXJIVE1MID0gXCJUZXJyaWJsZSBub3cgdGhhdCB5b3UncmUgaGVyZS5cIjtcbiAgICAgICAgICAgIH0sNTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgYCxcbiAgICB9fVxuICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8bW90aW9uLmJ1dHRvbiBjbGFzc05hbWU9XCJ0YWxrXCIgb25DbGljaz17KCkgPT4gcmVjb2duaXRpb25UYWxrLnN0YXJ0KCl9IHdoaWxlSG92ZXI9e3tzY2FsZToxLjEsYm94U2hhZG93OiBcIjBweCAwcHggOHB4IHJnYig3NSwwLDEzMClcIix9fT48aDE+UHJlc3MgTWUgdG8gQXNrIGEgUXVlc3Rpb24gQWJvdXQgUmFjaGFlbDwvaDE+PC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50VGFsa1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJUYWxrXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsaW5raW5nUmVjb3JkXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtibGlua2luZ1JlY30gIHdpZHRoPXsyMDB9IGNsYXNzTmFtZT1cInpJbmRleG15UGljXCJcbiAgICAgICAgICAgIGhlaWdodD17MTUwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVm9pY2U7XG4iXSwibmFtZXMiOlsiTGluayIsImV4cGVyaW1lbnRhbFN0eWxlZCIsInN0eWxlZCIsIkJveCIsIlBhcGVyIiwiR3JpZCIsIlNjcmlwdCIsIm1vdGlvbiIsIkltYWdlIiwiYmxpbmtpbmdSZWMiLCJWb2ljZSIsImRpdiIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYnV0dG9uIiwib25DbGljayIsInJlY29nbml0aW9uVGFsayIsInN0YXJ0Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwiYm94U2hhZG93IiwiaDEiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/VoiceComponent.js\n");

/***/ })

});