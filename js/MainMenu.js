class MainMenu extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.text('GameText','gameText.txt');
        this.load.image('background', 'assets/starfield.png');
        this.load.image('meteor', 'assets/meteorite.png');
        this.load.image('planet', 'assets/space-planet.png');
        this.load.image('space-ring', 'assets/space-ring.png');
        this.load.spritesheet('spaceship', 'assets/Ligher.png',
            {
                frameWidth: 32,
                frameHeight: 32,
            });
        this.load.spritesheet('SaboteurEnemy', 'assets/Saboteur.png',
            {
                frameWidth: 32,
                frameHeight: 32,
            });
        this.load.spritesheet('beam', 'assets/beam.png',
            {
                frameWidth: 32,
                frameHeight: 32,
            });
        this.load.spritesheet('UFO', 'assets/UFO.png',
            {
                frameWidth: 32,
                frameHeight: 32,
            });
        this.load.spritesheet('LightningEnemy', 'assets/Lightning.png',
            {
                frameWidth: 32,
                frameHeight: 32,
            });
        this.load.spritesheet('DoveEnemy', 'assets/Dove.png',
            {
                frameWidth: 32,
                frameHeight: 32,
            });
    }

    create() {
        // This is where I created all the animations to be called on when I need them.
        this.anims.create({
            key: "Saboteur-animation",
            frames: this.anims.generateFrameNumbers("SaboteurEnemy"),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "Ufo-animation",
            frames: this.anims.generateFrameNumbers("UFO"),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "Dove-animation",
            frames: this.anims.generateFrameNumbers("DoveEnemy"),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "Lightning-animation",
            frames: this.anims.generateFrameNumbers("LightningEnemy"),
            frameRate: 10,
            repeat: -1
        });
        let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);
        // Added in all the meteors.
        this.add.image(75, 175, 'meteor').setScale(0.05);
        this.add.image(500, 69, 'meteor').setScale(0.05);
        this.add.image(150, 244, 'meteor').setScale(0.04);
        this.add.image(925, 300, 'meteor').setScale(0.03);
        this.add.image(625, 600, 'meteor').setScale(0.05);
        this.add.image(700, 100, 'meteor').setScale(0.02);
        this.add.image(85, 175, 'meteor').setScale(0.05);
        this.add.image(525, 84, 'meteor').setScale(0.05);
        this.add.image(360, 550, 'meteor').setScale(0.04);
        this.add.image(820, 310, 'meteor').setScale(0.03);
        this.add.image(425, 335, 'meteor').setScale(0.05);
        this.add.image(665, 445, 'meteor').setScale(0.02);
        this.planet = this.add.image(450, 75, 'planet').setScale(3);
        this.spaceRing = this.add.image(75, 75, 'space-ring').setScale(2.5);
        this.header = this.add.text(60, 150, "SPACE BLASTERS", {fontSize: '100px', fill: '#0f0'});
        const instructions = this.add.text(160, 220, "INSTRUCTIONS", {fontSize: '50px', fill: '#0f0', align: "center"});
        const helloButton = this.add.text(220, 280, "PLAY", {fontSize: '50px', fill: '#0f0', align: "center"});
        // For responsive buttons
        helloButton.setInteractive({useHandCursor: true});
        instructions.setInteractive({useHandCursor: true});
        helloButton.on('pointerdown', () => {
            // this.scene.start("playGame");
            this.scene.start("playGame");
        });
        helloButton.on("pointerover", function () {
            helloButton.setStyle({fill: '#ff0'});
        }, this);
        helloButton.on("pointerout", function () {
            helloButton.setStyle({fill: '#0f0'});
        });
        instructions.on("pointerdown", function () {
            this.scene.start("Instructionss");
        }, this);
        instructions.on("pointerover", function () {
            instructions.setStyle({fill: '#ff0'});
        }, this);
        instructions.on("pointerout", function () {
            instructions.setStyle({fill: '#0f0'});
        });
        // For alignment.
        Phaser.Display.Align.In.Center(this.header, this.add.zone(500, 250, 100, 650));
        Phaser.Display.Align.In.Center(instructions, this.add.zone(500, 400, 100, 650));
        Phaser.Display.Align.In.Center(helloButton, this.add.zone(500, 475, 100, 650));
        Phaser.Display.Align.In.Center(this.planet, this.add.zone(245, 460, 100, 650));
        Phaser.Display.Align.In.Center(this.spaceRing, this.add.zone(800, 125, 100, 650));
    }

}
