webpackHotUpdate("index.b1de20c0",{

/***/ "./node_modules/dayjs/plugin/duration.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/duration.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, s) {
   true ? module.exports = s() : undefined;
}(this, function () {
  "use strict";

  var t,
      s,
      n = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
      i = {
    years: 31536e6,
    months: 2592e6,
    days: 864e5,
    hours: 36e5,
    minutes: 6e4,
    seconds: 1e3,
    weeks: 6048e5
  },
      e = function (t) {
    return t instanceof u;
  },
      r = function (t, s, n) {
    return new u(t, n, s.$l);
  },
      o = function (t) {
    return s.p(t) + "s";
  },
      u = function () {
    function s(t, s, e) {
      var u = this;
      if (this.$d = {}, this.$l = e, s) return r(t * i[o(s)], this);
      if ("number" == typeof t) return this.$ms = t, this.parseFromMilliseconds(), this;
      if ("object" == typeof t) return Object.keys(t).forEach(function (s) {
        u.$d[o(s)] = t[s];
      }), this.calMilliseconds(), this;

      if ("string" == typeof t) {
        var h = t.match(n);
        if (h) return this.$d.years = h[2], this.$d.months = h[3], this.$d.weeks = h[4], this.$d.days = h[5], this.$d.hours = h[6], this.$d.minutes = h[7], this.$d.seconds = h[8], this.calMilliseconds(), this;
      }

      return this;
    }

    var u = s.prototype;
    return u.calMilliseconds = function () {
      var t = this;
      this.$ms = Object.keys(this.$d).reduce(function (s, n) {
        return s + (t.$d[n] || 0) * (i[n] || 1);
      }, 0);
    }, u.parseFromMilliseconds = function () {
      var t = this.$ms;
      this.$d.years = Math.floor(t / 31536e6), t %= 31536e6, this.$d.months = Math.floor(t / 2592e6), t %= 2592e6, this.$d.days = Math.floor(t / 864e5), t %= 864e5, this.$d.hours = Math.floor(t / 36e5), t %= 36e5, this.$d.minutes = Math.floor(t / 6e4), t %= 6e4, this.$d.seconds = Math.floor(t / 1e3), t %= 1e3, this.$d.milliseconds = t;
    }, u.toISOString = function () {
      var t = this.$d.years ? this.$d.years + "Y" : "",
          s = this.$d.months ? this.$d.months + "M" : "",
          n = +this.$d.days || 0;
      this.$d.weeks && (n += 7 * this.$d.weeks);
      var i = n ? n + "D" : "",
          e = this.$d.hours ? this.$d.hours + "H" : "",
          r = this.$d.minutes ? this.$d.minutes + "M" : "",
          o = this.$d.seconds || 0;
      this.$d.milliseconds && (o += this.$d.milliseconds / 1e3);
      var u = o ? o + "S" : "",
          h = "P" + t + s + i + (e || r || u ? "T" : "") + e + r + u;
      return "P" === h ? "P0D" : h;
    }, u.toJSON = function () {
      return this.toISOString();
    }, u.as = function (t) {
      return this.$ms / (i[o(t)] || 1);
    }, u.get = function (t) {
      var s = this.$ms,
          n = o(t);
      return "milliseconds" === n ? s %= 1e3 : s = "weeks" === n ? Math.floor(s / i[n]) : this.$d[n], s;
    }, u.add = function (t, s, n) {
      var u;
      return u = s ? t * i[o(s)] : e(t) ? t.$ms : r(t, this).$ms, r(this.$ms + u * (n ? -1 : 1), this);
    }, u.subtract = function (t, s) {
      return this.add(t, s, !0);
    }, u.locale = function (t) {
      var s = this.clone();
      return s.$l = t, s;
    }, u.clone = function () {
      return r(this.$ms, this);
    }, u.humanize = function (s) {
      return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s);
    }, u.milliseconds = function () {
      return this.get("milliseconds");
    }, u.asMilliseconds = function () {
      return this.as("milliseconds");
    }, u.seconds = function () {
      return this.get("seconds");
    }, u.asSeconds = function () {
      return this.as("seconds");
    }, u.minutes = function () {
      return this.get("minutes");
    }, u.asMinutes = function () {
      return this.as("minutes");
    }, u.hours = function () {
      return this.get("hours");
    }, u.asHours = function () {
      return this.as("hours");
    }, u.days = function () {
      return this.get("days");
    }, u.asDays = function () {
      return this.as("days");
    }, u.weeks = function () {
      return this.get("weeks");
    }, u.asWeeks = function () {
      return this.as("weeks");
    }, u.months = function () {
      return this.get("months");
    }, u.asMonths = function () {
      return this.as("months");
    }, u.years = function () {
      return this.get("years");
    }, u.asYears = function () {
      return this.as("years");
    }, s;
  }();

  return function (n, i, o) {
    t = o, s = o().$utils(), o.duration = function (t, s) {
      var n = o.locale();
      return r(t, {
        $l: n
      }, s);
    }, o.isDuration = e;
  };
});

/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (r, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  "use strict";

  return function (r, t, e) {
    r = r || {};
    var n = t.prototype,
        o = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    e.en.relativeTime = o;

    var d = function (t, n, d, i) {
      for (var u, a, s, f = d.$locale().relativeTime || o, l = r.thresholds || [{
        l: "s",
        r: 44,
        d: "second"
      }, {
        l: "m",
        r: 89
      }, {
        l: "mm",
        r: 44,
        d: "minute"
      }, {
        l: "h",
        r: 89
      }, {
        l: "hh",
        r: 21,
        d: "hour"
      }, {
        l: "d",
        r: 35
      }, {
        l: "dd",
        r: 25,
        d: "day"
      }, {
        l: "M",
        r: 45
      }, {
        l: "MM",
        r: 10,
        d: "month"
      }, {
        l: "y",
        r: 17
      }, {
        l: "yy",
        d: "year"
      }], h = l.length, m = 0; m < h; m += 1) {
        var c = l[m];
        c.d && (u = i ? e(t).diff(d, c.d, !0) : d.diff(t, c.d, !0));
        var y = (r.rounding || Math.round)(Math.abs(u));

        if (s = u > 0, y <= c.r || !c.r) {
          y <= 1 && m > 0 && (c = l[m - 1]);
          var p = f[c.l];
          a = "string" == typeof p ? p.replace("%d", y) : p(y, n, c.l, s);
          break;
        }
      }

      return n ? a : (s ? f.future : f.past).replace("%s", a);
    };

    n.to = function (r, t) {
      return d(r, t, this, !0);
    }, n.from = function (r, t) {
      return d(r, t, this);
    };

    var i = function (r) {
      return r.$u ? e.utc() : e();
    };

    n.toNow = function (r) {
      return this.to(i(this), r);
    }, n.fromNow = function (r) {
      return this.from(i(this), r);
    };
  };
});

/***/ }),

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
    animation: 0.1s ease-in-out both ${FadeIn};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.25s ease-in-out;
    animation-delay: ${props => props.delay * 0.1}s;
    
    &:hover {
       box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

`;
const PassedBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Box)`
    background-color: red;
`;
const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"])`
    font-size: 20px !important;
`;

const DeadlineVisualizer = ({
  deadline
}) => {
  document.title = `${deadline.name} - ${deadline.summary}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    style: {
      height: '100vh',
      width: '100vw'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    style: {
      backgroundColor: '#fff'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, deadline.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, deadline.boxes.map((item, index) => item.passed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: item.info,
    color: "red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PassedBox, {
    key: index,
    delay: index + 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: item.info,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    key: index,
    delay: index + 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    style: {
      backgroundColor: '#fff'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, deadline.summary)));
};

/* harmony default export */ __webpack_exports__["default"] = (DeadlineVisualizer);

/***/ }),

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

const parseData = deadlines => {
  const random = Math.ceil(Math.random() * 100);
  const index = random % deadlines.length;
  const deadline = deadlines[index];
  let startDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(deadline.start);
  let endDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(deadline.end);
  let summaryUnit = "days";
  const diff = endDate.duration().subtract(startDate.duration());
  let numOfBoxes = diff.days();

  if (numOfBoxes > 30) {
    summaryUnit = "weeks";
    numOfBoxes = diff.weeks();
  }

  const now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()();
  let passedCount = 0;
  let boxes = [];

  for (let i = 1; i <= numOfBoxes; i++) {
    const date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDate);
    const lastTime = date.fromNow();
    const remainingTime = date.toNow();

    if (date.isAfter(now)) {
      boxes.push({
        passed: false,
        info: lastTime
      });
    } else {
      passedCount++;
      boxes.push({
        passed: true,
        info: remainingTime
      });
    }

    if (summaryUnit === 'days') {
      startDate.add(1, 'day');
    } else {
      startDate.add(7, 'day');
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
  return deadlineExists ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deadlineVisualizer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    deadline: deadline,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_welcome__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 74
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Visualizer);

/***/ }),

/***/ "./src/visualizer/welcome.js":
/*!***********************************!*\
  !*** ./src/visualizer/welcome.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/visualizer/welcome.js";


const Welcome = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, "Please add a new goal/plan's deadline");

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ })

})
//# sourceMappingURL=index.b1de20c0.5f75f41b6cf1d26b9a2d.hot-update.js.map