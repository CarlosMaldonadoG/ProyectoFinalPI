import { Particle } from "./particle.js";
import { DefaultSettings } from "./DefaultSettings.js";

let lienzo1: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

lienzo1 = <HTMLCanvasElement>document.getElementById('canvas1');
ctx = lienzo1.getContext("2d");
lienzo1.width = DefaultSettings.SIZE_WIDTH;
lienzo1.height = DefaultSettings.SIZE_HEIGHT;
let particlesArray: Particle[];
particlesArray = new Array(0);
const numerOfParticles = 300;

function init(){
    particlesArray = [];
    for(let i = 0; i < numerOfParticles; i++){
        const x = Math.random() * lienzo1.width;
        const y = Math.random() * lienzo1.height;
        particlesArray.push(new Particle(x, y));
    }
}
function animate(){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01';
    ctx.fillRect(0, 0, lienzo1.width, lienzo1.height);
    for( let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();  
    }
    requestAnimationFrame(animate);
}