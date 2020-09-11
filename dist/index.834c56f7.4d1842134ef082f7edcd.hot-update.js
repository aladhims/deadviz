webpackHotUpdate("index.834c56f7",{

/***/ "./src/popup/menu.js":
/*!***************************!*\
  !*** ./src/popup/menu.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _deadlineList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deadlineList */ "./src/popup/deadlineList.js");
/* harmony import */ var _submission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submission */ "./src/popup/submission.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/popup/menu.js";

/*global chrome*/





const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"];
const StyledTabs = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"])`
    width: 300px;
`;

const Menu = () => {
  const [deadlines, setDeadlines] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.storage.sync.get('deadlines', data => {
      if (Array.isArray(data.deadline)) {
        setDeadlines(data.deadlines);
      }
    });
  });

  const handleDelete = (id, index) => {
    const newDeadlines = [...deadlines.slice(0, index), ...deadlines.slice(index + 1)];
    chrome.storage.sync.set({
      deadlines: newDeadlines
    }, () => {
      console.log(`Deadline with ID ${id} has been deleted`);
      setDeadlines(newDeadlines);
    });
  };

  const handleAdd = ({
    name,
    start,
    end
  }) => {
    const deadline = {
      id: Date.now(),
      name,
      start: start.toJSON(),
      end: end.toJSON()
    };
    const newDeadlines = [...deadlines, deadline];
    chrome.storage.sync.set({
      deadlines: newDeadlines
    }, function () {
      console.log('new goal/plan has been added');
      setDeadlines(newDeadlines);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTabs, {
    defaultActiveKey: "1",
    centered: true,
    animated: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: "New",
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_submission__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSubmit: handleAdd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: "List",
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deadlineList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: deadlines,
    onDelete: handleDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.834c56f7.4d1842134ef082f7edcd.hot-update.js.map