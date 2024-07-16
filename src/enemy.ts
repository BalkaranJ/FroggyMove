export default class Enemy {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    private speed: number;
    private context: CanvasRenderingContext2D;
  
    constructor(context: CanvasRenderingContext2D, x: number, y: number, speed: number) {
      this.context = context;
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 50;
      this.speed = speed;
    }
  
    public update() {
      this.x -= this.speed;
  
      // Reset enemy position if it goes off screen
      if (this.x + this.width < 0) {
        this.x = this.context.canvas.width;
        this.y = Math.random() * (this.context.canvas.height - this.height);
      }
    }
  
    public draw() {
      this.context.fillStyle = 'red';
      this.context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  