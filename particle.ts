export class Particle {
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected size: number;
    protected weight : number;
    protected directionX = -2;
    protected ctx: CanvasRenderingContext2D;
    protected _2PI: number;
    
    constructor(width: number, height: number, x: number, y: number, screenCanvas?: CanvasRenderingContext2D) {
      this.ctx = screenCanvas;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.size = Math.random() * 15 + 1;
      this.weight = Math.random() * 1 +1;
      this.directionX = (Math.random() * 2) -1;;
      this._2PI = Math.PI * 2;
    }
  
    public update() {
        if(this.y > this.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 1 + 1;
            this.x = Math.random() * this.width * 1.3; 
        }
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;
        
        //verifique la colisión entre cada partícula y el elemento del título
        if(
            this.x < title.x + title.width &&
            this.x + this.size > title.x &&
            this.y < title.y + title.height &&
            this.y + this.size > title.y
        ){
            this.y -= 3;
            this.weight *= -0.3;
        }
    }
  
    public draw() { 
      this.ctx.fillStyle = 'purple';
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fill() //sin punto y coma lo dejo en el video
 
    }
  
  }