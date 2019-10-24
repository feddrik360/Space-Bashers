class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
    }
}

class DoveGunShip extends Entity {
    constructor(scene, x, y,) {
        super(scene, x, y, "DoveEnemy", "DoveGunShip");
        this.body.velocity.y = Phaser.Math.Between(20, 30);
        scene.DoveEnemies.add(this);
        this.angle = 180; // To turn the ship upside down.
        this.anims.play('Dove-animation', true);
    }
}

class SaboteurGunship extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "SaboteurEnemy", "SaboteurGunship");
        this.body.velocity.y = Phaser.Math.Between(60, 70);
        scene.SaboteurEnemies.add(this);
        this.anims.play('Saboteur-animation', true);
    }
}

class LightningGunship extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "LightningEnemy", "LightningGunship");
        this.body.velocity.y = Phaser.Math.Between(70, 80);
        this.angle = 180; // To turn the ship upside down.
        scene.LightningEnemies.add(this);
        this.anims.play('Lightning-animation', true);
    }
}

class UfoShipLeft extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "UFO", "UfoShipLeft");
        this.body.velocity.x = Phaser.Math.Between(20, 30);
        scene.UfoEnemiesLeft.add(this);
        this.anims.play('Ufo-animation', true);
    }
}

class UfoShipRight extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "UFO", "UfoShipRight");
        this.body.velocity.x = Phaser.Math.Between(-20, -30);
        scene.UfoEnemiesRight.add(this);
        this.anims.play('Ufo-animation', true);
    }
}

class BEAM extends Entity {
    constructor(scene, x, y) {
        var x = scene.player.x;
        var y = scene.player.y - 25;
        super(scene, x, y, "beam", "BEAM");
        scene.playerLasers.add(this);
        this.body.velocity.y = -300;
        this.setScale(0.5);
    }
}

class BEAM2 extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "beam", "BEAM2");
        scene.enemyLasers.add(this);
        this.body.velocity.y = 100;
        this.setScale(0.3);
        this.angle = 180; // To turn the beam upside down.
    }
}









