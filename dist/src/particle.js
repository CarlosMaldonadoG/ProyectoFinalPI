var Particle = /** @class */ (function () {
    function Particle(x, y, width, height, screenCanvas, titleX, titleY, titleW, titleH) {
        this.width = width;
        this.height = height;
        this.ctx = screenCanvas;
        this.x = x;
        this.y = y;
        this.titleX = titleX;
        this.titleY = titleY;
        this.titleW = titleW;
        this.titleH = titleH;
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
        if (this.x < this.titleX + this.titleW &&
            this.x + this.size > this.titleX &&
            this.y < this.titleY + this.titleH &&
            this.y + this.size > this.titleY) {
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
