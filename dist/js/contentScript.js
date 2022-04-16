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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/contentScript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contentScript.ts":
/*!******************************!*\
  !*** ./src/contentScript.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
var apt = document.location.href.split("/")[4];
var from = document.location.href;
var $video = document.getElementById("player_Viblast_api");
var manualPlaying = false;
var manualPausing = false;
$video.onpause = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (manualPausing) {
        return;
    }
    chrome.runtime.sendMessage({
        name: types_1.Action.pause,
        from: from,
        apt: apt,
    });
};
$video.onplaying = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (manualPlaying) {
        return;
    }
    chrome.runtime.sendMessage({
        name: types_1.Action.play,
        from: from,
        apt: apt,
        time: $video.currentTime + 2,
    });
};
chrome.runtime.onMessage.addListener(function (request) { return __awaiter(void 0, void 0, void 0, function () {
    var name, time;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = request.name, time = request.time;
                if (!(name === types_1.Action.play)) return [3 /*break*/, 2];
                manualPlaying = true;
                $video.currentTime = time;
                return [4 /*yield*/, $video.play()];
            case 1:
                _a.sent();
                manualPlaying = false;
                return [3 /*break*/, 4];
            case 2:
                if (!(name === types_1.Action.pause)) return [3 /*break*/, 4];
                manualPausing = true;
                return [4 /*yield*/, $video.pause()];
            case 3:
                _a.sent();
                manualPausing = false;
                _a.label = 4;
            case 4: return [2 /*return*/, true];
        }
    });
}); });


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VHEvent = exports.Action = void 0;
var Action;
(function (Action) {
    Action["play"] = "play";
    Action["pause"] = "pause";
})(Action = exports.Action || (exports.Action = {}));
var VHEvent;
(function (VHEvent) {
    VHEvent["onPlay"] = "onPlay";
    VHEvent["onPause"] = "onPause";
})(VHEvent = exports.VHEvent || (exports.VHEvent = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRTY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxtRUFBaUM7QUFFakMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBRXBDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ3BDLG9CQUFvQixDQUNELENBQUM7QUFFdEIsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQzFCLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztBQUUxQixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQUMsY0FBTztTQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBUCx5QkFBTzs7SUFDdkIsSUFBSSxhQUFhLEVBQUU7UUFDakIsT0FBTztLQUNSO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDekIsSUFBSSxFQUFFLGNBQU0sQ0FBQyxLQUFLO1FBQ2xCLElBQUk7UUFDSixHQUFHO0tBQ0osQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLFNBQVMsR0FBRztJQUFDLGNBQU87U0FBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1FBQVAseUJBQU87O0lBQ3pCLElBQUksYUFBYSxFQUFFO1FBQ2pCLE9BQU87S0FDUjtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3pCLElBQUksRUFBRSxjQUFNLENBQUMsSUFBSTtRQUNqQixJQUFJO1FBQ0osR0FBRztRQUNILElBQUksRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUM7S0FDN0IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQU8sT0FBTzs7Ozs7Z0JBQ3pDLElBQUksR0FBVyxPQUFPLEtBQWxCLEVBQUUsSUFBSSxHQUFLLE9BQU8sS0FBWixDQUFhO3FCQUUzQixLQUFJLEtBQUssY0FBTSxDQUFDLElBQUksR0FBcEIsd0JBQW9CO2dCQUN0QixhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDMUIscUJBQU0sTUFBTSxDQUFDLElBQUksRUFBRTs7Z0JBQW5CLFNBQW1CLENBQUM7Z0JBQ3BCLGFBQWEsR0FBRyxLQUFLLENBQUM7OztxQkFDYixLQUFJLEtBQUssY0FBTSxDQUFDLEtBQUssR0FBckIsd0JBQXFCO2dCQUM5QixhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixxQkFBTSxNQUFNLENBQUMsS0FBSyxFQUFFOztnQkFBcEIsU0FBb0IsQ0FBQztnQkFDckIsYUFBYSxHQUFHLEtBQUssQ0FBQzs7b0JBR3hCLHNCQUFPLElBQUksRUFBQzs7O0tBQ2IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbERILElBQVksTUFHWDtBQUhELFdBQVksTUFBTTtJQUNoQix1QkFBYTtJQUNiLHlCQUFlO0FBQ2pCLENBQUMsRUFIVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFHakI7QUFFRCxJQUFZLE9BR1g7QUFIRCxXQUFZLE9BQU87SUFDakIsNEJBQWlCO0lBQ2pCLDhCQUFtQjtBQUNyQixDQUFDLEVBSFcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBR2xCIiwiZmlsZSI6ImNvbnRlbnRTY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb250ZW50U2NyaXB0LnRzXCIpO1xuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgYXB0ID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5zcGxpdChcIi9cIilbNF07XG5jb25zdCBmcm9tID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblxuY29uc3QgJHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwicGxheWVyX1ZpYmxhc3RfYXBpXCJcbikgYXMgSFRNTFZpZGVvRWxlbWVudDtcblxubGV0IG1hbnVhbFBsYXlpbmcgPSBmYWxzZTtcbmxldCBtYW51YWxQYXVzaW5nID0gZmFsc2U7XG5cbiR2aWRlby5vbnBhdXNlID0gKC4uLmFyZ3MpID0+IHtcbiAgaWYgKG1hbnVhbFBhdXNpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIG5hbWU6IEFjdGlvbi5wYXVzZSxcbiAgICBmcm9tLFxuICAgIGFwdCxcbiAgfSk7XG59O1xuXG4kdmlkZW8ub25wbGF5aW5nID0gKC4uLmFyZ3MpID0+IHtcbiAgaWYgKG1hbnVhbFBsYXlpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIG5hbWU6IEFjdGlvbi5wbGF5LFxuICAgIGZyb20sXG4gICAgYXB0LFxuICAgIHRpbWU6ICR2aWRlby5jdXJyZW50VGltZSArIDIsIC8vcmVjb25uZWN0aW9uIG9mZnNldFxuICB9KTtcbn07XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAocmVxdWVzdCkgPT4ge1xuICBjb25zdCB7IG5hbWUsIHRpbWUgfSA9IHJlcXVlc3Q7XG5cbiAgaWYgKG5hbWUgPT09IEFjdGlvbi5wbGF5KSB7XG4gICAgbWFudWFsUGxheWluZyA9IHRydWU7XG4gICAgJHZpZGVvLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgICBhd2FpdCAkdmlkZW8ucGxheSgpO1xuICAgIG1hbnVhbFBsYXlpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSBBY3Rpb24ucGF1c2UpIHtcbiAgICBtYW51YWxQYXVzaW5nID0gdHJ1ZTtcbiAgICBhd2FpdCAkdmlkZW8ucGF1c2UoKTtcbiAgICBtYW51YWxQYXVzaW5nID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuIiwiZXhwb3J0IGVudW0gQWN0aW9uIHtcbiAgcGxheSA9IFwicGxheVwiLFxuICBwYXVzZSA9IFwicGF1c2VcIixcbn1cblxuZXhwb3J0IGVudW0gVkhFdmVudCB7XG4gIG9uUGxheSA9IFwib25QbGF5XCIsXG4gIG9uUGF1c2UgPSBcIm9uUGF1c2VcIixcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=