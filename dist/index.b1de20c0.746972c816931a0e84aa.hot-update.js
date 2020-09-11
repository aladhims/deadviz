webpackHotUpdate("index.b1de20c0",{

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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deadlineVisualizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deadlineVisualizer */ "./src/visualizer/deadlineVisualizer.js");
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome */ "./src/visualizer/welcome.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/visualizer/visualizer.js";

/*global chrome*/





dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
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
        passed: false,
        info: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().to(startDate)
      });
    } else {
      passedCount++;
      boxes.push({
        passed: true,
        info: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDate).fromNow()
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
  }, []);
  return deadlineExists ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deadlineVisualizer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    deadline: deadline,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_welcome__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 74
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Visualizer);

/***/ })

})
//# sourceMappingURL=index.b1de20c0.746972c816931a0e84aa.hot-update.js.map