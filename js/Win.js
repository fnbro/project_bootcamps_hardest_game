class Win {
    constructor(context) {
		this.context = context;
    }
    draw() {

        this.context.font = "30px Arial";
        this.context.fillText("Goal", 730, 370);
        this.context.fill();

        this.context.save();
        this.context.fillStyle = "rgba(0, 102, 34, 0.5)"
        this.context.fillRect(720, 320, 130, 85);
        this.context.restore();
        
    }
}