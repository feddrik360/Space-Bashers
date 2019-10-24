var config = {
    type: Phaser.webGL, //set Phaser to Auto, rather than webGL or Canvas
    // width: this.window.innerWidth * this.window.devicePixelRatio, //sets the game viewport width
    //height: this.window.innerHeight * this.window.devicePixelRatio, //sets the game viewport height
    width: 1000,
    height: 650,
    backgroundColor: 0x000000,
    scene: [MainMenu, Level1, Level2, Level3, Instructions,],
    pixelArt: true,
    // 1.1 set the physics to arcade
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    parent: 'game',
};
var game = new Phaser.Game(config);
