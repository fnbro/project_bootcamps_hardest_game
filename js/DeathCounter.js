class DeathCounter {
    constructor(context, death) {
        this.death = death;
        this.context = context;
        this.img = document.getElementById("win");
    }
    draw() {

        this.context.font = "20px Arial";
        this.context.fillText(`Deaths: ${this.death}`, 690, 20);
        this.context.fill();
    }
    drawWin() {

        this.context.drawImage(this.img, 0, 0, 800, 800)

        this.context.font = "50px Arial";
        this.context.fillText(`You won!`, 200, 100);
        this.context.fillText(`You died ${this.death} times`, 200, 200);

    }
}
