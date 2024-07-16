"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("./player"));
class Game {
    constructor() {
        this.loop = () => {
            this.update();
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.canvas = document.getElementById('gameCanvas');
        this.context = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.player = new player_1.default(this.context, this.width / 2, this.height - 60);
        this.loop();
    }
    update() {
        // Update game logic
        this.player.update();
    }
    draw() {
        // Draw game
        this.context.clearRect(0, 0, this.width, this.height);
        this.player.draw();
    }
}
window.onload = () => {
    new Game();
};
