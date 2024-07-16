import Player from './player';
import Enemy from './enemy';
import Objective from './objective';

class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private player: Player;
  private enemies: Enemy[];
  private objective: Objective;
  private score: number;


  constructor() {
    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.player = new Player(this.context, this.width / 2, this.height - 60);
    this.enemies = this.createEnemies(5); // Create 5 enemies
    this.objective = new Objective(this.context, Math.random() * this.width, Math.random() * this.height); // Create an objective and send it to a random position
    //Initiallize score
    this.score = 0;

    this.loop();
  }

  private createEnemies(num: number): Enemy[] {
    const enemies: Enemy[] = [];
    for (let i = 0; i < num; i++) {
      const x = Math.random() * this.width;
      const y = Math.random() * (this.height - 50);
      const speed = 2 + Math.random() * 3; // Random speed between 2 and 5
      enemies.push(new Enemy(this.context, x, y, speed));
    }
    return enemies;
  }

  private loop = () => {
    this.update();
    this.draw();
    requestAnimationFrame(this.loop);
  }

  private update() {
    this.player.update();
    this.enemies.forEach(enemy => enemy.update());
    this.checkCollisions();
  }

  private draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.player.draw();
    this.enemies.forEach(enemy => enemy.draw());
    this.objective.draw();
    this.drawScore();
  }

  private checkCollisions() {
    this.enemies.forEach(enemy => {
      if (this.player.isCollidingWith(enemy)) {
        this.player.resetPosition();
        this.score = 0; //Reset score on collision with enemy
      }
    });

    // Check collision with objective
    if (this.player.isCollidingWith(this.objective)) {
      this.objective.resetPosition();
      this.score += 1; //Increase score on collision with objective
    }
  }

  private drawScore() {
    this.context.fillStyle = 'black';
    this.context.font = '24px Arial';
    this.context.fillText(`Score: ${this.score}`, 10, 30);
  }

} // End of Game class

window.onload = () => {
  new Game();
}
