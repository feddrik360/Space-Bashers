class Instructions extends Phaser.Scene {
    constructor() {
        super("Instructionss");
    }

    create() {
        let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);
        // Added in all the meteors.
        this.header = this.add.text(0, 0, "SPACE BLASTERS", {fontSize: '100px', fill: '#0f0'});
        this.keys = this.add.text(0, 0, "Use the arrows to move your ship.", {fontSize: '32px', fill: '#0f0'});
        this.space = this.add.text(0, 0, "Use the space bar to shoot.", {fontSize: '32px', fill: '#0f0'});
        this.time = this.add.text(0, 0, "Each level will have a target score.", {fontSize: '32px', fill: '#0f0'});
        this.level = this.add.text(0, 0, "If you hit the target, you will pass the level.", {
            fontSize: '32px',
            fill: '#0f0'
        });
        this.avoidEnemy = this.add.text(0, 0, "Avoid the enemies and their lasers.", {fontSize: '32px', fill: '#0f0'});
        this.UfoScore = this.add.text(0, 0, "UFO's are worth 5 points.", {fontSize: '32px', fill: '#0f0'});
        this.GunshipScore = this.add.text(0, 0, "Gunship's are worth 10 points.", {fontSize: '32px', fill: '#0f0'});
        const Exit = this.add.text(0, 0, "EXIT", {fontSize: '75px', fill: '#0f0'});
        Exit.setInteractive({useHandCursor: true});
        Exit.on("pointerdown", function () {
            this.scene.start("bootGame");
        }, this);
        Exit.on("pointerover", function () {
            Exit.setStyle({fill: '#ff0'});
        }, this);
        Exit.on("pointerout", function () {
            Exit.setStyle({fill: '#0f0'});
        });
        // For alignment.
        Phaser.Display.Align.In.Center(this.header, this.add.zone(500, 100, 100, 650));
        Phaser.Display.Align.In.Center(this.keys, this.add.zone(500, 200, 100, 650));
        Phaser.Display.Align.In.Center(this.space, this.add.zone(500, 250, 100, 650));
        Phaser.Display.Align.In.Center(this.time, this.add.zone(500, 300, 100, 650));
        Phaser.Display.Align.In.Center(this.avoidEnemy, this.add.zone(500, 350, 100, 650));
        Phaser.Display.Align.In.Center(this.level, this.add.zone(500, 400, 100, 650));
        Phaser.Display.Align.In.Center(this.UfoScore, this.add.zone(500, 450, 100, 650));
        Phaser.Display.Align.In.Center(this.GunshipScore, this.add.zone(500, 500, 100, 650));
        Phaser.Display.Align.In.Center(Exit, this.add.zone(500, 600, 100, 650));
    }
}
