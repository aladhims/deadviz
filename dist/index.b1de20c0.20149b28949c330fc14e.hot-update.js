webpackHotUpdate("index.b1de20c0",{

/***/ "./src/visualizer/title.js":
false,

/***/ "./src/visualizer/visualizer.js":
/*!**************************************!*\
  !*** ./src/visualizer/visualizer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/visualizer/visualizer.js";

/*global chrome*/

const dayInMilliseconds = 1000 * 60 * 60 * 24;
const weekInMilliseconds = dayInMilliseconds * 7;

const getDiffTime = (startDate, endDate) => Math.abs(endDate - startDate);

const getDiffDay = (startDate, endDate) => {
  const diffTime = getDiffTime(startDate, endDate);
  return Math.ceil(diffTime / dayInMilliseconds);
};

const getDiffWeek = (startDate, endDate) => {
  const diffTime = getDiffTime(startDate, endDate);
  return Math.ceil(diffTime / weekInMilliseconds);
};

const parseData = deadlines => {
  const random = Math.ceil(Math.random() * 100);
  const index = random % deadlines.length;
  const deadline = deadlines[index];
  let startDate = new Date(deadline.start);
  let endDate = new Date(deadline.end);
  let summaryUnit = "days";
  let numOfBoxes = getDiffDay(startDate, endDate);

  if (numOfBoxes > 30) {
    summaryUnit = "weeks";
    numOfBoxes = getDiffWeek(startDate, endDate);
  }

  const now = new Date();
  let passedCount = 0;
  let boxes = [];

  for (let i = 1; i <= numOfBoxes; i++) {
    if (summaryUnit === 'days') {
      startDate.setDate(startDate.getDate() + 1);
    } else {
      startDate.setDate(startDate.getDate() + 7);
    }

    if (startDate > now) {
      boxes.push({
        passed: false
      });
    } else {
      passedCount++;
      boxes.push({
        passed: true
      });
    }
  }

  const remainingDays = numOfBoxes - passedCount;
  const percentage = (passedCount / numOfBoxes * 100).toFixed(2);
  return {
    name: deadline.name,
    boxes,
    summary: `${remainingDays} ${summaryUnit} remaining (${percentage}%)`
  };
};

const Welcome = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }
});

const DeadlineVisualizer = ({
  deadline
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }
});

const Visualizer = () => {
  const [deadline, setDeadline] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [deadlineExists, setDeadlineExists] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.storage.sync.get('deadlines', data => {
      if (!!data && !!data.deadlines) {
        setDeadline(parseData(data.deadlines));
        setDeadlineExists(true);
      }
    });
  });
  return deadlineExists ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeadlineVisualizer, {
    deadline: deadline,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Welcome, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 74
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Visualizer);

/***/ })

})
//# sourceMappingURL=index.b1de20c0.20149b28949c330fc14e.hot-update.js.map