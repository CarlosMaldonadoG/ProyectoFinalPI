import { Particle } from "./particle.js";
var canvas;
var ctx;
canvas = document.getElementById('canvas1');
ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var particlesArray;
var numerOfParticles = 400;
var titleElement = document.getElementById('title1');
var titleMeasurements = titleElement.getBoundingClientRect();
var title = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10
};
function init() {
    particlesArray = new Array(0);
    for (var i = 0; i < numerOfParticles; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y, canvas.width, canvas.height, ctx, title.x, title.y, title.width, title.height));
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
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasurements = titleElement.getBoundingClientRect();
    title = {
        x: titleMeasurements.left,
        y: titleMeasurements.top,
        width: titleMeasurements.width,
        height: 10
    };
    init();
});
