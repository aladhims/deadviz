webpackHotUpdate("index.834c56f7",{

/***/ "./src/popup/pinnedDeadline.js":
/*!*************************************!*\
  !*** ./src/popup/pinnedDeadline.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/popup/pinnedDeadline.js";




const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"];
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    text-align: center;
`;
const Unpin = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
    position: relative;
    top: 16px;
    right: 16px;
`;

const PinnedDeadline = ({
  title,
  description
}, onUnpin) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
  level: 3,
  strong: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
  level: 5,
  type: "secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Unpin, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
  title: "Are you sure\uFF1F",
  okText: "Yes",
  placement: "left",
  cancelText: "No",
  onConfirm: () => onUnpin(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PushpinTwoTone"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 17
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (PinnedDeadline);

/***/ })

})
//# sourceMappingURL=index.834c56f7.339b511d7b8a79689ba3.hot-update.js.map