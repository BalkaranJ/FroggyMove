export default class Player {
    private x: number;
    private y: number;
    private initialX: number;
    private initialY: number;
    private width: number;
    private height: number;
    private context: CanvasRenderingContext2D;
    private speed: number;
    private movingUp: boolean;
    private movingDown: boolean;
    private movingLeft: boolean;
    private movingRight: boolean;
  
    constructor(context: CanvasRenderingContext2D, x: number, y: number) {
      this.context = context;
      this.x = x;
      this.y = y;
      this.initialX = x;
      this.initialY = y;
      this.width = 50;
      this.height = 50;
      this.speed = 5;
      this.movingUp = false;
      this.movingDown = false;
      this.movingLeft = false;
      this.movingRight = false;
  
      this.setupInput();
    }
  
    private setupInput() {
      window.addEventListener('keydown', (e) => this.handleKeyDown(e));
      window.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }
  
    private handleKeyDown(e: KeyboardEvent) {
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
  
    private handleKeyUp(e: KeyboardEvent) {
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
  
    public update() {
      if (this.movingUp) this.y -= this.speed;
      if (this.movingDown) this.y += this.speed;
      if (this.movingLeft) this.x -= this.speed;
      if (this.movingRight) this.x += this.speed;
  
      // Prevent the player from moving out of the canvas
      this.x = Math.max(0, Math.min(this.context.canvas.width - this.width, this.x));
      this.y = Math.max(0, Math.min(this.context.canvas.height - this.height, this.y));
    }
  
    public draw() {
      this.context.fillStyle = 'green';
      this.context.fillRect(this.x, this.y, this.width, this.height);
    }
  
    public resetPosition() {
      this.x = this.initialX;
      this.y = this.initialY;
    }
  
    public isCollidingWith(enemy: { x: number; y: number; width: number; height: number }): boolean {
      return !(
        this.x > enemy.x + enemy.width ||
        this.x + this.width < enemy.x ||
        this.y > enemy.y + enemy.height ||
        this.y + this.height < enemy.y
      );
    }
  }
  