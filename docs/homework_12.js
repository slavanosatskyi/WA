/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 356);
/******/ })
/************************************************************************/
/******/ ({

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(357);


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(358);

var _clock = __webpack_require__(359);

var clock = new _clock.Clock(document.querySelector('#clock'));
clock.render();
clock.startUpdate();

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
};

var Clock = exports.Clock = function () {
    function Clock(parentObj) {
        _classCallCheck(this, Clock);

        this.hours = null;
        this.minutes = null;
        this.seconds = null;
        this.interval = null;
        this.firstDelimeter = null;
        this.secondDelimeter = null;
        this.date = null;
        this.parentObj = parentObj;
    }

    _createClass(Clock, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var buttonsSection = document.createElement('div');
            buttonsSection.classList.add('clock__buttons-section');

            var stopButton = document.createElement('button');
            stopButton.textContent = 'Stop';

            stopButton.addEventListener('click', function (event) {
                _this.stopUpdate();
                event.stopPropagation();
            });

            var startButton = document.createElement('button');
            startButton.textContent = 'Start';

            startButton.addEventListener('click', function (event) {
                _this.startUpdate();
                event.stopPropagation();
            });

            var clock = document.createElement('div');
            clock.classList.add('clock');

            clock.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                if (_this.areSecondsVisible()) {
                    _this.hideSeconds();
                } else {
                    _this.showSeconds();
                }
            });

            clock.addEventListener('click', function () {
                if (_this.isDateVisible()) {
                    _this.hideDate();
                } else {
                    _this.showDate();
                }
            });

            var time = document.createElement('div');
            time.classList.add('clock__time');

            this.hours = document.createElement('div');
            this.hours.classList.add('clock__hours');

            this.firstDelimeter = document.createElement('div');
            this.firstDelimeter.classList.add('clock__delimeter');
            this.firstDelimeter.textContent = ':';

            this.minutes = document.createElement('div');
            this.minutes.classList.add('clock__minutes');

            this.secondDelimeter = document.createElement('div');
            this.secondDelimeter.classList.add('clock__delimeter');
            this.secondDelimeter.textContent = ':';

            this.seconds = document.createElement('div');
            this.seconds.classList.add('clock__seconds');

            this.date = document.createElement('div');
            this.date.classList.add('clock__date');
            this.date.style.display = 'none';

            this.updateTime();
            this.updateDate();

            buttonsSection.appendChild(stopButton);
            buttonsSection.appendChild(startButton);

            time.appendChild(this.hours);
            time.appendChild(this.firstDelimeter);
            time.appendChild(this.minutes);
            time.appendChild(this.secondDelimeter);
            time.appendChild(this.seconds);

            clock.appendChild(time);
            clock.appendChild(this.date);
            clock.appendChild(buttonsSection);

            this.parentObj.appendChild(clock);
        }
    }, {
        key: 'startUpdate',
        value: function startUpdate() {
            var _this2 = this;

            this.interval = setInterval(function () {
                _this2.updateTime();
            }, 1000);
        }
    }, {
        key: 'updateTime',
        value: function updateTime() {
            var now = new Date();
            this.hours.textContent = now.getHours();
            this.minutes.textContent = now.getMinutes();
            this.seconds.textContent = now.getSeconds();
        }
    }, {
        key: 'updateDate',
        value: function updateDate() {
            var now = new Date();
            this.date.textContent = now.getDate() + '/' + months[now.getMonth()] + '/' + now.getFullYear();
        }
    }, {
        key: 'stopUpdate',
        value: function stopUpdate() {
            clearInterval(this.interval);
        }
    }, {
        key: 'hideSeconds',
        value: function hideSeconds() {
            this.secondDelimeter.style.display = 'none';
            this.seconds.style.display = 'none';
        }
    }, {
        key: 'showSeconds',
        value: function showSeconds() {
            this.secondDelimeter.style.display = 'block';
            this.seconds.style.display = 'block';
        }
    }, {
        key: 'areSecondsVisible',
        value: function areSecondsVisible() {
            return this.seconds.style.display != 'none';
        }
    }, {
        key: 'hideDate',
        value: function hideDate() {
            this.date.style.display = 'none';
        }
    }, {
        key: 'showDate',
        value: function showDate() {
            this.date.style.display = 'block';
        }
    }, {
        key: 'isDateVisible',
        value: function isDateVisible() {
            return this.date.style.display != 'none';
        }
    }]);

    return Clock;
}();

/***/ })

/******/ });