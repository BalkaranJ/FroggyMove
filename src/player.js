"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(context, x, y) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        // Movement
        this.speed = 5;
        this.movingUp = false;
        this.movingDown = false;
        this.movingLeft = false;
        this.movingRight = false;
        this.setupInput();
    }
    setupInput() {
        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }
    handleKeyDown(e) {
        switch (e.key) {
            case 'ArrowUp':
                this.movingUp = true;
                break;
            case 'ArrowDown':
                this.movingDown = true;
                break;
            case 'ArrowLeft':
                this.movingLeft = true;
                break;
            case 'ArrowRight':
                this.movingRight = true;
                break;
        }
    }
    handleKeyUp(e) {
        switch (e.key) {
            case 'ArrowUp':
                this.movingUp = false;
                break;
            case 'ArrowDown':
                this.movingDown = false;
                break;
            case 'ArrowLeft':
                this.movingLeft = false;
                break;
            case 'ArrowRight':
                this.movingRight = false;
                break;
        }
    }
    update() {
        // Update player logic
        // Movement
        if (this.movingUp)
            this.y -= this.speed;
        if (this.movingDown)
            this.y += this.speed;
        if (this.movingLeft)
            this.x -= this.speed;
        if (this.movingRight)
            this.x += this.speed;
        // Prevent player from going out of bounds
        this.x = Math.max(0, Math.min(this.context.canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(this.context.canvas.height - this.height, this.y));
    }
    draw() {
        this.context.fillStyle = 'green';
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
}
exports.default = Player;
