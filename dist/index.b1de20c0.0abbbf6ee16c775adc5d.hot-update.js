webpackHotUpdate("index.b1de20c0",{

/***/ "./src/visualizer/deadlineVisualizer.js":
/*!**********************************************!*\
  !*** ./src/visualizer/deadlineVisualizer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/visualizer/deadlineVisualizer.js";



const Box = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    flex-grow: 0;
    border-radius: 4px;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    height: 30px;
    margin: 4px;
    width: 30px;
    cursor: pointer;
    background-color: #fff;
    animation: 0.3s ease-in-out both fade-in, 0.5s ease-in-out both color;
`;
const Summary = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    
`;

const DeadlineVisualizer = ({
  deadline
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}, deadline.title), deadline.boxes.map((index, item) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
  key: index,
  passed: item.passed,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 46
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Summary, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}, deadline.summary));

/* harmony default export */ __webpack_exports__["default"] = (DeadlineVisualizer);

/***/ })

})
//# sourceMappingURL=index.b1de20c0.0abbbf6ee16c775adc5d.hot-update.js.map