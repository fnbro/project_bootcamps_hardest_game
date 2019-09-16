class VerticalBall {
    constructor(context, xPos, yPos, dy, radius, deathCounter) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.dy = dy;
        this.radius = radius;
        this.context = context;
        this.soundEfx = document.getElementById("soundEfx");
        this.draw = this.draw.bind(this);
        this.checkCollision = this.checkCollision.bind(this);
        this.deathCounter = deathCounter;
    }
    draw() {
        this.context.save()
        this.context.fillStyle = "black";

        this.context.beginPath();
        this.context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();

        if (this.yPos < 20 || this.yPos > 380) {
            this.dy = -this.dy;
        }
        this.yPos += this.dy;
        this.context.restore()

    }
    movingOfBall() {
        this.context.save()
        this.context.fillStyle = "black";

        this.context.beginPath();
        this.context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();

        if (this.yPos < 60 || this.yPos > 280) {
            this.dy = -this.dy;
        }
        this.yPos += this.dy;
        this.context.restore()
    }
    checkCollision(player) {
        if (distance(player, this) < player.radius + this.radius) {
            player.xPos = 20;
            player.yPos = 40;
            this.deathCounter.death += 1;
            this.soundEfx.play();
        }
        else return false;
    }
    enableMute() { 
        this.soundEfx.volume = true;
      } 
      
     disableMute() { 
        this.soundEfx.volume = false;
      } 
}