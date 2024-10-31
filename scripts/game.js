class Level1Scene extends Phaser.Scene {
    constructor() {
        super({key: "Level1"});
    }

    preload() {
        preloadLevel1(this);
    }

    create() {
        createLevel1(this);
    }

    update() {
        updateLevel1(this);
    }
}

class Level2Scene extends Phaser.Scene {
    constructor() {
        super({key: "Level2"});
    }

    preload() {
        preloadLevel1(this);
    }

    create() {
        createLevel1(this);
    }

    update() {
        updateLevel1(this);
        console.log("level2");
    }
}

class Level3Scene extends Phaser.Scene {
    constructor() {
        super({key: "Level3"});
    }

    preload() {
        preloadLevel3(this);
    }

    create() {
        createLevel3(this);
    }

    update() {
        updateLevel1(this);
    }
}

var config = {
    type: Phaser.AUTO,
    width: 30 * 24,
    height: 20 * 24,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 0}, // No gravity
            debug: false, // Set to true if you want to see debug graphics
        },
    },
    scene: [Level3Scene, Level2Scene, Level1Scene],
    parent: "Level1frame",
};

var game = new Phaser.Game(config);

function playerMovement() {
    player.setVelocity(0); // Reset both velocityX and velocityY

    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.setFlipX(true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.setFlipX(false);
    } else player.setVelocityX(0);

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    } else player.setVelocityY(0);
}

function updateLevel1(window) {
    if (charselect === "wizzard") wizzardanimation();
    if (charselect === "knight") knightanimation();
    if (charselect === "rogue") rogueanimation();
    playerMovement();
    console.log(hp);
    console.log(coinscollected);
    console.log(coinlocations1.length);
    if (hp <= 0) {
        window.physics.pause();
        window.tweens.pauseAll();
        window.time.paused = true;
        window.anims.pauseAll();
        setTimeout(() => {
            window.physics.resume();
            window.tweens.resumeAll();
            window.time.paused = false;
            window.anims.resumeAll();
            window.scene.stop();
            window.scene.start();
        }, 2000);
        hp = 5;
        coinscollected = 0;
    }
    console.log("x: " + player.x + " y:" + player.y);
    if (
        player.x > 60 &&
        player.x < 80 &&
        player.y > 125 &&
        player.y < 130 &&
        coinscollected == coinlocations1.length
    ) {
        window.physics.pause();
        window.tweens.pauseAll();
        window.time.paused = true;
        window.anims.pauseAll();
        setTimeout(() => {
            window.physics.resume();
            window.tweens.resumeAll();
            window.time.paused = false;
            window.anims.resumeAll();
            window.scene.stop();
            window.scene.start("Level2");
        }, 2000);
        hp = 5;
        coinscollected = 0;
    }
}
