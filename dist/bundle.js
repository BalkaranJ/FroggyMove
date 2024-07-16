/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst player_1 = __importDefault(__webpack_require__(/*! ./player */ \"./src/player.ts\"));\nclass Game {\n    constructor() {\n        this.loop = () => {\n            this.update();\n            this.draw();\n            requestAnimationFrame(this.loop);\n        };\n        this.canvas = document.getElementById('gameCanvas');\n        this.context = this.canvas.getContext('2d');\n        this.width = window.innerWidth;\n        this.height = window.innerHeight;\n        this.canvas.width = this.width;\n        this.canvas.height = this.height;\n        this.player = new player_1.default(this.context, this.width / 2, this.height - 60);\n        this.loop();\n    }\n    update() {\n        // Update game logic\n        this.player.update();\n    }\n    draw() {\n        // Draw game\n        this.context.clearRect(0, 0, this.width, this.height);\n        this.player.draw();\n    }\n}\nwindow.onload = () => {\n    new Game();\n};\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Player {\n    constructor(context, x, y) {\n        this.context = context;\n        this.x = x;\n        this.y = y;\n        this.width = 50;\n        this.height = 50;\n        // Movement\n        this.speed = 5;\n        this.movingUp = false;\n        this.movingDown = false;\n        this.movingLeft = false;\n        this.movingRight = false;\n        this.setupInput();\n    }\n    setupInput() {\n        window.addEventListener('keydown', (e) => this.handleKeyDown(e));\n        window.addEventListener('keyup', (e) => this.handleKeyUp(e));\n    }\n    handleKeyDown(e) {\n        switch (e.key) {\n            case 'ArrowUp':\n                this.movingUp = true;\n                break;\n            case 'ArrowDown':\n                this.movingDown = true;\n                break;\n            case 'ArrowLeft':\n                this.movingLeft = true;\n                break;\n            case 'ArrowRight':\n                this.movingRight = true;\n                break;\n        }\n    }\n    handleKeyUp(e) {\n        switch (e.key) {\n            case 'ArrowUp':\n                this.movingUp = false;\n                break;\n            case 'ArrowDown':\n                this.movingDown = false;\n                break;\n            case 'ArrowLeft':\n                this.movingLeft = false;\n                break;\n            case 'ArrowRight':\n                this.movingRight = false;\n                break;\n        }\n    }\n    update() {\n        // Update player logic\n        // Movement\n        if (this.movingUp)\n            this.y -= this.speed;\n        if (this.movingDown)\n            this.y += this.speed;\n        if (this.movingLeft)\n            this.x -= this.speed;\n        if (this.movingRight)\n            this.x += this.speed;\n        // Prevent player from going out of bounds\n        this.x = Math.max(0, Math.min(this.context.canvas.width - this.width, this.x));\n        this.y = Math.max(0, Math.min(this.context.canvas.height - this.height, this.y));\n    }\n    draw() {\n        this.context.fillStyle = 'green';\n        this.context.fillRect(this.x, this.y, this.width, this.height);\n    }\n}\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack:///./src/player.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;