import { Particle } from "./particle.js";
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('canvas1');
ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particlesArray: Particle[];
const numerOfParticles = 400;

let titleElement = document.getElementById('title1');
let titleMeasurements = titleElement.getBoundingClientRect();

interface Titulo{
    x: number,
    y: number,
    width: number,
    height: number
}
let title: Titulo = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10
}

function init(){
    particlesArray = new Array(0);
    for(let i = 0; i < numerOfParticles; i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y, canvas.width, canvas.height, ctx, title.x, title.y, title.width, title.height));
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

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasurements = titleElement.getBoundingClientRect();
    title = {
        x: titleMeasurements.left,
        y: titleMeasurements.top,
        width: titleMeasurements.width,
        height: 10
    }
    init();
});