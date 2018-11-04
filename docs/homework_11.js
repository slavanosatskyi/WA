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
/******/ 	return __webpack_require__(__webpack_require__.s = 352);
/******/ })
/************************************************************************/
/******/ ({

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(353);


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(354);

var _tabsWidgetHandler = __webpack_require__(355);

var firstTabText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
                      Enim consectetur ab, velit beatae neque fugit, vitae commodi\
                      sint quas dolorem amet voluptas delectus laudantium illum\
                      architecto voluptate. Praesentium, enim eius!';
var secondTabText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                       Voluptates, voluptas quo! Saepe, culpa atque officiis\
                       possimus ex impedit nostrum sint incidunt obcaecati.\
                       Obcaecati dolorem accusantium nostrum alias, sunt maiores velit.';
var thirdTabText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                      Accusamus ipsam molestias ea eos nulla explicabo blanditiis\
                      cumque nihil laborum nobis facere porro odio et mollitia totam,\
                      deleniti non doloribus officia.';
var tabsWidgetLorem = document.querySelector('#loremTabs');

(0, _tabsWidgetHandler.tabsWidgetHandler)(tabsWidgetLorem, [firstTabText, secondTabText, thirdTabText]);

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tabsWidgetHandler = tabsWidgetHandler;
function tabsWidgetHandler(tabsWidget, tabsContent) {
    var TAB_CLASS_NAME = 'tabs-container__tab';
    var ACTIVE_TAB_CLASS_NAME = TAB_CLASS_NAME + '_active';
    var CONTENT_CLASS_NAME = 'tabs-container__content';

    var tabs = tabsWidget.querySelectorAll('.' + TAB_CLASS_NAME);
    var content = tabsWidget.querySelector('.' + CONTENT_CLASS_NAME);
    var activeTab = null;

    //first tab is active by default
    activateTab(tabs[0], tabsContent[0]);

    var _loop = function _loop(i) {
        tabs[i].addEventListener('click', function () {
            handleClickOnTab(tabs[i], tabsContent[i]);
        });
    };

    for (var i = 0; i < tabs.length; ++i) {
        _loop(i);
    }

    function handleClickOnTab(tab, contentForTab) {
        if (activeTab === tab) {
            return;
        }

        if (activeTab !== null) {
            activeTab.classList.remove(ACTIVE_TAB_CLASS_NAME);
        }

        activateTab(tab, contentForTab);
    }

    function activateTab(tab, contetForTab) {
        tab.classList.add(ACTIVE_TAB_CLASS_NAME);
        content.textContent = contetForTab;
        activeTab = tab;
    }
}

/***/ })

/******/ });