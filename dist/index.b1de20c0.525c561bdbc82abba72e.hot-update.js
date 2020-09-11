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
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/duration */ "./node_modules/dayjs/plugin/duration.js");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _deadlineVisualizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deadlineVisualizer */ "./src/visualizer/deadlineVisualizer.js");
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome */ "./src/visualizer/welcome.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/visualizer/visualizer.js";

/*global chrome*/






dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_3___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
const limitNumberOfBoxes = 30;
const day = "day";
const week = "day";
const month = "month";

const parseData = deadlines => {
  const random = Math.ceil(Math.random() * 100);
  const index = random % deadlines.length;
  const deadline = deadlines[index];
  let startDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(deadline.start);
  let endDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(deadline.end);
  let timeUnit = day;
  let diff = dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.duration(endDate.diff(startDate));
  let numOfBoxes = Math.ceil(diff.asDays());

  if (numOfBoxes > limitNumberOfBoxes) {
    timeUnit = week;
    numOfBoxes = Math.ceil(diff.asWeeks());
  } // if the number of boxes are still big, then convert it to month


  if (numOfBoxes > limitNumberOfBoxes) {
    timeUnit = month;
    numOfBoxes = Math.ceil(diff.asMonths());
  }

  const now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()();
  let passedCount = 0;
  let boxes = [];

  for (let i = 1; i <= numOfBoxes; i++) {
    const remainingTime = startDate.from(now);
    const passedTime = now.to(startDate);

    if (startDate.isAfter(now)) {
      boxes.push({
        passed: false,
        info: remainingTime
      });
    } else {
      passedCount++;
      boxes.push({
        passed: true,
        info: passedTime
      });
    }

    startDate = startDate.add(1, timeUnit);
  }

  const remaining = numOfBoxes - passedCount;
  const percentage = (passedCount / numOfBoxes * 100).toFixed(2);

  if (remaining > 1) {
    timeUnit = `${timeUnit}s`;
  }

  return {
    name: deadline.name,
    boxes,
    summary: `${remaining} ${timeUnit} remaining (${percentage}%)`
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
  return deadlineExists ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deadlineVisualizer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    deadline: deadline,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_welcome__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 74
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Visualizer);

/***/ })

})
//# sourceMappingURL=index.b1de20c0.525c561bdbc82abba72e.hot-update.js.map