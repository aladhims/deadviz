webpackHotUpdate("index.834c56f7",{

/***/ "./src/popup/deadlineList.js":
/*!***********************************!*\
  !*** ./src/popup/deadlineList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/popup/deadlineList.js";




const StyledList = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"])`
    padding: 16px;
`;

const DeadlineList = ({
  data,
  onDelete
}) => {
  const formatDate = date => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const formatDescription = item => `${formatDate(new Date(item.start))} ~ ${formatDate(new Date(item.end))}`;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledList, {
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: (item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
      actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DeleteTwoTone"], {
        onClick: () => onDelete(item.id),
        twoToneColor: "#eb2f96",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 31
        }
      })],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
      title: item.title,
      description: formatDescription(index),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DeadlineList);

/***/ })

})
//# sourceMappingURL=index.834c56f7.aea72a723cff3e760021.hot-update.js.map