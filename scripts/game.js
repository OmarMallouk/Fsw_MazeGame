class Level1Scene extends Phaser.Scene {
	constructor() {
		super({ key: "Level1" });
	}
	preload()
	{
		preloadLevel1(this)
	}
	create()
	{
		createLevel1(this)
	}
	update()
	{
		updateLevel1(this)
	}
}

class Level2Scene extends Phaser.Scene {
	constructor() {
		super({ key: "Level2" });
	}
	preload()
	{
		preloadLevel2(this)
	}
	create()
	{
		createLevel2(this)
	}
	update()
	{
		updateLevel2(this)
	}
}

class Level3Scene extends Phaser.Scene {
	constructor() {
		super({ key: "Level3" });
	}
	preload()
	{
		preloadLevel1(this)
	}
	create()
	{
		createLevel1(this)
	}
	update()
	{
		updateLevel1(this)
	}
}


var config = {
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
	scene:[Level1Scene,Level2Scene,Level3Scene],
	parent: "Level1frame",
};

var game = new Phaser.Game(config);
console.log(this); 
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
	if (hp <= 0)
	{
		alert("you lose")
		hp = 5
		window.location.reload();
	}
	console.log ("x: "+ player.x +" y:" + player.y)
	if (player.x > 60 && player.x < 80 && player.y > 125 && player.y < 130 && coinscollected == 1){
		alert("you win")
		window.location.reload();
		coinscollected = 0
	}
}
