var config = {
    type: Phaser.webGL,
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