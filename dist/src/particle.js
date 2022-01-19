var Particle = /** @class */ (function () {
    function Particle(x, y, width, height, screenCanvas) {
        this.width = width;
        this.height = height;
        this.ctx = screenCanvas;
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 1;
        this.weight = Math.random() * 1 + 1;
        this.directionX = (Math.random() * 2) - 1;
    }
    Particle.prototype.update = function () {
        if (this.y > this.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 1 + 1;
            this.x = Math.random() * this.width * 1.3;
        }
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;
        //verifique la colisión entre cada partícula y el elemento del título
        if (this.x < 59.25 + 1417.5 &&
            this.x + this.size > 59.25 &&
            this.y < 303.3000183105469 + 10 &&
            this.y + this.size > 303.3000183105469) {
            this.y -= 3;
            this.weight *= -0.3;
        }
    };
    Particle.prototype.draw = function () {
        this.ctx.fillStyle = 'purple';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill(); //sin punto y coma lo dejo en el video
    };
    return Particle;
}());
export { Particle };
