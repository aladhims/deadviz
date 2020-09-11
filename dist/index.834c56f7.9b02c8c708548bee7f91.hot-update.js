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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _deadlineList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deadlineList */ "./src/popup/deadlineList.js");
/* harmony import */ var _submission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submission */ "./src/popup/submission.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/popup/menu.js";

/*global chrome*/







const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"];
const StyledTabs = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"])`
    width: 300px;
`;
const StyledSetting = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SettingTwoTone"])`
    margin-right: 16px;
`;
const newTabURL = "chrome://newtab/";

const Menu = () => {
  const [deadlines, setDeadlines] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [existingPinnedDeadline, setExistingPinnedDeadline] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.storage.sync.get('deadlines', data => {
      console.log(data);

      if (!data) {
        return;
      }

      if (!!data.pinned) {
        setExistingPinnedDeadline(data.pinned);
      }

      if (!!data.deadlines) {
        setDeadlines(data.deadlines);
      }
    });
  }, []);

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

  const handlePin = index => {
    const pinnedDeadline = deadlines[index];
    const newDeadlines = [...deadlines.slice(0, index), ...deadlines.slice(index + 1)]; // check if there is no existing pinned deadline

    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isEmptyObject"])(existingPinnedDeadline)) {
      newDeadlines.push(existingPinnedDeadline);
    } // if there is an existing pinned deadline then swap


    chrome.storage.sync.set({
      deadlines: newDeadlines,
      pinned: pinnedDeadline
    }, function () {
      console.log('a new pinned deadline has been set');
      setExistingPinnedDeadline(pinnedDeadline);
      setDeadlines(newDeadlines);
      newTabReload();
    });
  };

  const handleUnpin = () => {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isEmptyObject"])(existingPinnedDeadline)) {
      return;
    }

    deadlines.push(existingPinnedDeadline);
    chrome.storage.sync.set({
      deadlines,
      pinned: {}
    }, function () {
      console.log('a new pinned deadline has been set');
      setExistingPinnedDeadline({});
      setDeadlines(deadlines);
      newTabReload();
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTabs, {
    tabBarExtraContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSetting, {
      twoToneColor: "#a6a6a6",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 41
      }
    }),
    defaultActiveKey: "1",
    centered: true,
    animated: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["AimOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }), "New"),
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_submission__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSubmit: handleAdd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["BarsOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    }), "List"),
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deadlineList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pinned: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isEmptyObject"])(existingPinnedDeadline) ? undefined : existingPinnedDeadline,
    data: deadlines,
    onPin: handlePin,
    onUnpin: handleUnpin,
    onDelete: handleDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.834c56f7.9b02c8c708548bee7f91.hot-update.js.map