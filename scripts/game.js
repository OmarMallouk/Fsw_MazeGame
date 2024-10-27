const config = {
	type: Phaser.AUTO,
	width: 30 * 24,
	height: 20 * 24,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0 }, // No gravity
			debug: false, // Set to true if you want to see debug graphics
		},
	},
	backgroundColor: "#337504",
	scene: {
		preload: preload,
		create: create,
		update: update,
	},
	parent: "gameframe",
};

const game = new Phaser.Game(config);

let player;

function playerMovement() {
	player.setVelocity(0); // Reset both velocityX and velocityY

	if (cursors.left.isDown) {
		player.setVelocityX(-160);
		player.setFlipX(true);
	} else if (cursors.right.isDown) {
		player.setVelocityX(160);
		player.setFlipX(false);
	}

	if (cursors.up.isDown) {
		player.setVelocityY(-160);
	} else if (cursors.down.isDown) {
		player.setVelocityY(160);
	}
}
var charselect = "wizzard";
var mapselect = "map1";
function update() {
	if (charselect === "wizzard") wizzardanimation();
	if (charselect === "knight") knightanimation();
	if (charselect === "rogue") rogueanimation();
	playerMovement();
	if (player.x > 350 && player.x < 390 && player.y > 70 && player.y < 100) {
		alert("you win");
		this.scene.restart()
	}
}
