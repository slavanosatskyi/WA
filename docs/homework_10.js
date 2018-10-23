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
/******/ 	return __webpack_require__(__webpack_require__.s = 342);
/******/ })
/************************************************************************/
/******/ ({

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(344);

var TOGGLE_OFF_CLASS_NAME = 'toggle_off';
var DEVICE_ON_CLASS_NAME = 'container__device_on';

var element1 = document.querySelector('#element1');
var element2 = document.querySelector('#element2');
var element3 = document.querySelector('#element3');

var toggle1 = element1.querySelector('#toggle');
var toggle2 = element2.querySelector('#toggle');
var toggle3 = element3.querySelector('#toggle');

function trigger(element) {
    var toggle = element.querySelector('#toggle');
    var device = element.querySelector('#device');
    toggle.classList.toggle(TOGGLE_OFF_CLASS_NAME);
    device.classList.toggle(DEVICE_ON_CLASS_NAME);
}

function triggerToggle1() {
    trigger(element1);
}

function triggerToggle2() {
    trigger(element2);
}

function triggerToggle3() {
    trigger(element3);
}

toggle1.addEventListener('click', function () {
    triggerToggle1();
});

toggle2.addEventListener('click', function () {
    triggerToggle2();
});

toggle3.addEventListener('click', function () {
    triggerToggle3();
});

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });