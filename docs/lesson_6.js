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
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
/******/ })
/************************************************************************/
/******/ ({

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(334);


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(335);

function switchVisibility(element) {
    element.classList.toggle('footer__column-header_opened');
    element.nextElementSibling.classList.toggle('footer__column-section_opened');
}

var switchVisibilityHeader1 = function switchVisibilityHeader1() {
    switchVisibility(header_1);
};

var switchVisibilityHeader2 = function switchVisibilityHeader2() {
    switchVisibility(header_2);
};

var switchVisibilityHeader3 = function switchVisibilityHeader3() {
    switchVisibility(header_3);
};

var switchVisibilityHeader4 = function switchVisibilityHeader4() {
    switchVisibility(header_4);
};

var switchVisibilityHeader5 = function switchVisibilityHeader5() {
    switchVisibility(header_5);
};

var switchVisibilityHeader6 = function switchVisibilityHeader6() {
    switchVisibility(header_6);
};

var switchVisibilityHeader7 = function switchVisibilityHeader7() {
    switchVisibility(header_7);
};

var header_1 = document.querySelector('#header_1');
var header_2 = document.querySelector('#header_2');
var header_3 = document.querySelector('#header_3');
var header_4 = document.querySelector('#header_4');
var header_5 = document.querySelector('#header_5');
var header_6 = document.querySelector('#header_6');
var header_7 = document.querySelector('#header_7');

header_1.onclick = switchVisibilityHeader1;
header_2.onclick = switchVisibilityHeader2;
header_3.onclick = switchVisibilityHeader3;
header_4.onclick = switchVisibilityHeader4;
header_5.onclick = switchVisibilityHeader5;
header_6.onclick = switchVisibilityHeader6;
header_7.onclick = switchVisibilityHeader7;

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });