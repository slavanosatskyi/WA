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
/******/ 	return __webpack_require__(__webpack_require__.s = 347);
/******/ })
/************************************************************************/
/******/ ({

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(348);


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(349);

var _phoneToggler = __webpack_require__(350);

var _accordionHandler = __webpack_require__(351);

var phoneTogglers = document.querySelectorAll('.container__switching-element');
for (var i = 0; i < phoneTogglers.length; ++i) {
    (0, _phoneToggler.phoneToggler)(phoneTogglers[i]);
}

var accordions = document.querySelectorAll('.accordion');
for (var _i = 0; _i < accordions.length; ++_i) {
    (0, _accordionHandler.accordionHandler)(accordions[_i]);
}

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.phoneToggler = phoneToggler;
function phoneToggler(targetElement) {
    var TOGGLE_OFF_CLASS_NAME = 'toggle_off';
    var DEVICE_ON_CLASS_NAME = 'container__device_on';
    var TOGGLE_CLASS_NAME = '.toggle';
    var DEVICE_CLASS_NAME = '.container__device';

    function toggle(element) {
        var toggle = element.querySelector(TOGGLE_CLASS_NAME);
        var device = element.querySelector(DEVICE_CLASS_NAME);
        toggle.classList.toggle(TOGGLE_OFF_CLASS_NAME);
        device.classList.toggle(DEVICE_ON_CLASS_NAME);
    }

    var toggleWidget = targetElement.querySelector(TOGGLE_CLASS_NAME);
    toggleWidget.addEventListener('click', function () {
        toggle(targetElement);
    });
}

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accordionHandler = accordionHandler;
function accordionHandler(accordion) {
    var ITEM_CLASS_NAME = 'accordion__item';
    var HEADER_CLASS_NAME = 'accordion__header';
    var OPENED_SUFFIX = '_opened';

    var items = accordion.querySelectorAll('.' + ITEM_CLASS_NAME);
    var activeItem = null;

    var _loop = function _loop(i) {
        var currentItem = items[i];
        var header = currentItem.querySelector('.' + HEADER_CLASS_NAME);

        header.addEventListener('click', function () {
            if (activeItem !== null && activeItem !== currentItem) {
                activeItem.classList.remove(ITEM_CLASS_NAME + OPENED_SUFFIX);
            }
            currentItem.classList.toggle(ITEM_CLASS_NAME + OPENED_SUFFIX);
            activeItem = currentItem;
        });
    };

    for (var i = 0; i < items.length; ++i) {
        _loop(i);
    }
}

/***/ })

/******/ });