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
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title */ "./src/visualizer/title.js");
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
  const diffTime = undefined.getDiffTime(startDate, endDate);
  return Math.ceil(diffTime / weekInMilliseconds);
};

const parseData = deadlines => {
  const random = Math.ceil(Math.random() * 100);
  const index = random % deadlines.length;
  const deadline = deadlines[index];
  let startDate = new Date(deadline.start);
  let endDate = new Date(deadline.end);
  let summaryUnit = "days";
  let numOfBoxes = undefined.getDiffDay(startDate, endDate);

  if (numOfBoxes > 30) {
    summaryUnit = "weeks";
    numOfBoxes = undefined.getDiffWeek(startDate, endDate);
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

const Visualizer = () => {
  const [deadlines, setDeadlines] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.storage.sync.get('deadlines', data => {
      const {
        name,
        boxes,
        summary
      } = undefined.parseData(data.deadlines);
      undefined.name = name;
      undefined.boxes = boxes;
      undefined.summary = summary;
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Visualizer);

/***/ })

})
//# sourceMappingURL=index.b1de20c0.2bd886f6fbbe7f8a7969.hot-update.js.map