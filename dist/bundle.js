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

/***/ "./src/enemy.ts":
/*!**********************!*\
  !*** ./src/enemy.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Enemy {\n    constructor(context, x, y, speed) {\n        this.context = context;\n        this.x = x;\n        this.y = y;\n        this.width = 50;\n        this.height = 50;\n        this.speed = speed;\n    }\n    update() {\n        this.x -= this.speed;\n        // Reset enemy position if it goes off screen\n        if (this.x + this.width < 0) {\n            this.x = this.context.canvas.width;\n            this.y = Math.random() * (this.context.canvas.height - this.height);\n        }\n    }\n    draw() {\n        this.context.fillStyle = 'red';\n        this.context.fillRect(this.x, this.y, this.width, this.height);\n    }\n}\nexports[\"default\"] = Enemy;\n\n\n//# sourceURL=webpack:///./src/enemy.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst player_1 = __importDefault(__webpack_require__(/*! ./player */ \"./src/player.ts\"));\nconst enemy_1 = __importDefault(__webpack_require__(/*! ./enemy */ \"./src/enemy.ts\"));\nclass Game {\n    constructor() {\n        this.loop = () => {\n            this.update();\n            this.draw();\n            requestAnimationFrame(this.loop);\n        };\n        this.canvas = document.getElementById('gameCanvas');\n        this.context = this.canvas.getContext('2d');\n        this.width = window.innerWidth;\n        this.height = window.innerHeight;\n        this.canvas.width = this.width;\n        this.canvas.height = this.height;\n        this.player = new player_1.default(this.context, this.width / 2, this.height - 60);\n        this.enemies = this.createEnemies(5); // Create 5 enemies\n        this.loop();\n    }\n    createEnemies(num) {\n        const enemies = [];\n        for (let i = 0; i < num; i++) {\n            const x = Math.random() * this.width;\n            const y = Math.random() * (this.height - 50);\n            const speed = 2 + Math.random() * 3; // Random speed between 2 and 5\n            enemies.push(new enemy_1.default(this.context, x, y, speed));\n        }\n        return enemies;\n    }\n    update() {\n        this.player.update();\n        this.enemies.forEach(enemy => enemy.update());\n        this.checkCollisions();\n    }\n    draw() {\n        this.context.clearRect(0, 0, this.width, this.height);\n        this.player.draw();\n        this.enemies.forEach(enemy => enemy.draw());\n    }\n    checkCollisions() {\n        this.enemies.forEach(enemy => {\n            if (this.player.isCollidingWith(enemy)) {\n                this.player.resetPosition();\n            }\n        });\n    }\n}\nwindow.onload = () => {\n    new Game();\n};\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Player {\n    constructor(context, x, y) {\n        this.context = context;\n        this.x = x;\n        this.y = y;\n        this.initialX = x;\n        this.initialY = y;\n        this.width = 50;\n        this.height = 50;\n        this.speed = 5;\n        this.movingUp = false;\n        this.movingDown = false;\n        this.movingLeft = false;\n        this.movingRight = false;\n        this.setupInput();\n    }\n    setupInput() {\n        window.addEventListener('keydown', (e) => this.handleKeyDown(e));\n        window.addEventListener('keyup', (e) => this.handleKeyUp(e));\n    }\n    handleKeyDown(e) {\n        switch (e.key) {\n            case 'ArrowUp':\n                this.movingUp = true;\n                break;\n            case 'ArrowDown':\n                this.movingDown = true;\n                break;\n            case 'ArrowLeft':\n                this.movingLeft = true;\n                break;\n            case 'ArrowRight':\n                this.movingRight = true;\n                break;\n        }\n    }\n    handleKeyUp(e) {\n        switch (e.key) {\n            case 'ArrowUp':\n                this.movingUp = false;\n                break;\n            case 'ArrowDown':\n                this.movingDown = false;\n                break;\n            case 'ArrowLeft':\n                this.movingLeft = false;\n                break;\n            case 'ArrowRight':\n                this.movingRight = false;\n                break;\n        }\n    }\n    update() {\n        if (this.movingUp)\n            this.y -= this.speed;\n        if (this.movingDown)\n            this.y += this.speed;\n        if (this.movingLeft)\n            this.x -= this.speed;\n        if (this.movingRight)\n            this.x += this.speed;\n        // Prevent the player from moving out of the canvas\n        this.x = Math.max(0, Math.min(this.context.canvas.width - this.width, this.x));\n        this.y = Math.max(0, Math.min(this.context.canvas.height - this.height, this.y));\n    }\n    draw() {\n        this.context.fillStyle = 'green';\n        this.context.fillRect(this.x, this.y, this.width, this.height);\n    }\n    resetPosition() {\n        this.x = this.initialX;\n        this.y = this.initialY;\n    }\n    isCollidingWith(enemy) {\n        return !(this.x > enemy.x + enemy.width ||\n            this.x + this.width < enemy.x ||\n            this.y > enemy.y + enemy.height ||\n            this.y + this.height < enemy.y);\n    }\n}\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack:///./src/player.ts?");

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