import { Particle } from "./particle.js";
var canvas;
var ctx;
canvas = document.getElementById('canvas1');
ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var particlesArray;
var numerOfParticles = 300;
//elemento de título de medida
/*let titleElement = document.getElementById('title1');
let titleMeasurements = titleElement.getBoundingClientRect();
let title = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10
}

class Particle {
    public x: number;
    public y: number;
    public size: number;
    public weight: number;
    public _2PI: number;
    public directionX: number;
    
   
        constructor(x : number , y: number){
            this.x = x;
            this.y = y;
            this.size = Math.random() * 15 + 1;
            this.weight = Math.random() * 1 + 1;
            this.directionX = (Math.random() * 2) -1;
        }
  
        public update(){
            if(this.y > canvas.height) {
                this.y = 0 - this.size;
                this.weight = Math.random() * 1 + 1;
                this.x = Math.random() * canvas.width * 1.3;
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
        public draw(){
            ctx.fillStyle = 'purple';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill(); //sin punto y coma lo dejo en el video
        }
  }*/
function init() {
    particlesArray = new Array(0);
    for (var i = 0; i < numerOfParticles; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y, canvas.width, canvas.height, ctx));
        //particlesArray.push(new Particle(x, y));
    }
}
init();
function animate() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}
animate();
