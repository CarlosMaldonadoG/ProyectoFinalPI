import { Particle } from "./particle.js";
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('canvas1');
ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particlesArray: Particle[];
const numerOfParticles = 300;

function init(){
    particlesArray = new Array(0);
    for(let i = 0; i < numerOfParticles; i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y, canvas.width, canvas.height, ctx));
        //particlesArray.push(new Particle(x, y));
    }
}
init();

function animate(){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for( let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();  
    }
    requestAnimationFrame(animate);
}
animate();

