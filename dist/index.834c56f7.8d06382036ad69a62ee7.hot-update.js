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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/popup/menu.js";

/*global chrome*/






const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"];
const StyledTabs = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"])`
    width: 300px;
`;
const StyledAimIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["AimOutlined"])`
    margin: 0 auto !important;
    display: block;
    width: 30px;
`;
const StyledBars = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["BarsOutlined"])`
    margin: 0 auto !important;
    display: block;
    width: 30px;
`;
const newTabURL = "chrome://newtab/";

const Menu = () => {
  const [deadlines, setDeadlines] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.storage.sync.get('deadlines', data => {
      if (!!data && !!data.deadlines) {
        setDeadlines(data.deadlines);
      }
    });
  });

  const newTabReload = () => {
    chrome.tabs.getCurrent(tab => {
      if (tab.url === newTabURL) {
        chrome.tabs.reload();
      }
    });
  };

  const handleDelete = (id, index) => {
    const newDeadlines = [...deadlines.slice(0, index), ...deadlines.slice(index + 1)];
    chrome.storage.sync.set({
      deadlines: newDeadlines
    }, () => {
      console.log(`Deadline with ID ${id} has been deleted`);
      setDeadlines(newDeadlines);
      newTabReload();
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
      newTabReload();
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTabs, {
    defaultActiveKey: "1",
    centered: true,
    animated: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAimIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    }), "Add"),
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_submission__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSubmit: handleAdd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBars, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }), "List"),
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deadlineList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: deadlines,
    onDelete: handleDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.834c56f7.8d06382036ad69a62ee7.hot-update.js.map