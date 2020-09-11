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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/visualizer/deadlineVisualizer.js";



const {
  Header,
  Footer,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    left: 50%;
  position: relative;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
const BoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
`;
const FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
      0% {
        opacity: 0;
        transform: scale(0);
      }
    
      50% {
        transform: scale(1.5);
      }
    
      100% {
        opacity: 1;
        transform: scale(1);
      }
`;
const Box = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
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
    animation: 0.3s ease-in-out both ${FadeIn}, 0.5s ease-in-out both color;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.25s ease-in-out;
    
    &:hover {
       box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

`;
const PassedBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Box)`
    background-color: red;
`;
const Summary = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    
`;

const DeadlineVisualizer = ({
  deadline
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
  style: {
    height: '100vh',
    width: '100vw'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
  style: {
    backgroundColor: '#fff'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 13
  }
}, deadline.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 17
  }
}, deadline.boxes.map((item, index) => item.passed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PassedBox, {
  key: index,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 72
  }
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
  key: index,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 99
  }
}))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
  style: {
    backgroundColor: '#fff'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 13
  }
}, deadline.summary)));

/* harmony default export */ __webpack_exports__["default"] = (DeadlineVisualizer);

/***/ })

})
//# sourceMappingURL=index.b1de20c0.b17e056aa5aa2be1cd96.hot-update.js.map