class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
    }
}
class Background extends Entity {
    constructor(scene, x, y,) {
        super(scene, x, y, "background", "GunShip");
        let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);

    }
}

class GunShip extends Entity {
    constructor(scene, x, y,speedx,speedy) {
        super(scene, x, y, "DoveEnemy", "GunShip");
        this.body.velocity.y = Phaser.Math.Between(speedx, speedy);
        this.angle= 180;
    }
}
class SaboteurGunship extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "SaboteurEnemy", "SaboteurGunship");
        this.body.velocity.y = Phaser.Math.Between(60, 70);
    }
}

class LightningGunship extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "LightningEnemy", "LightningGunship");
        this.body.velocity.y = Phaser.Math.Between(70, 80);

        this.angle = 180;
    }
}

class UfoShipLeft extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "UFO", "UfoShipLeft");
        this.body.velocity.x = Phaser.Math.Between(20, 30);
    }
}
class UfoShipRight extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "UFO", "UfoShipRight");
        this.body.velocity.x = Phaser.Math.Between(-20, -30);
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
        this.angle = 180;

    }
}









