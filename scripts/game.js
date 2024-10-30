var configLevel1 = {
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
	scene: {
		preload: preloadLevel1,
		create: createLevel1,
		update: updateLevel1,
	},
	parent: "Level1frame",
};

var Level1 = new Phaser.Game(configLevel1);

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

function updateLevel1() {
	if (charselect === "wizzard") wizzardanimation();
	if (charselect === "knight") knightanimation();
	if (charselect === "rogue") rogueanimation();
	playerMovement();
	if (hp <= 0)
	{
		alert("you lose")
		hp = 5
		window.location.reload();
	}
	console.log ("x: "+ player.x +" y:" + player.y)
}
