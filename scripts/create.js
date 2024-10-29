function create() {
	// Define the knight's animations
	this.anims.create({
		key: "knight-idle-anim",
		frames: this.anims.generateFrameNumbers("knight-idle-sheet", {
			start: 0,
			end: 3,
		}),
		frameRate: 10,
		repeat: -1, // Loop indefinitely
	});

	this.anims.create({
		key: "knight-run-anim",
		frames: this.anims.generateFrameNumbers("knight-run-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 12,
		repeat: -1, // Loop indefinitely
	});

	this.anims.create({
		key: "knight-death-anim",
		frames: this.anims.generateFrameNumbers("knight-death-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 10,
		repeat: 0, // Play once
	});

	// Define the rogue's animations
	this.anims.create({
		key: "rogue-idle-anim",
		frames: this.anims.generateFrameNumbers("rogue-idle-sheet", {
			start: 0,
			end: 3,
		}),
		frameRate: 10,
		repeat: -1, // Loop indefinitely
	});

	this.anims.create({
		key: "rogue-run-anim",
		frames: this.anims.generateFrameNumbers("rogue-run-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 12,
		repeat: -1, // Loop indefinitely
	});

	this.anims.create({
		key: "rogue-death-anim",
		frames: this.anims.generateFrameNumbers("rogue-death-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 10,
		repeat: 0, // Play once
	});

	// Define the wizard's animations (with two Zs)
	this.anims.create({
		key: "wizzard-idle-anim",
		frames: this.anims.generateFrameNumbers("wizzard-idle-sheet", {
			start: 0,
			end: 3,
		}),
		frameRate: 10,
		repeat: -1, // Loop indefinitely
	});

	this.anims.create({
		key: "wizzard-run-anim",
		frames: this.anims.generateFrameNumbers("wizzard-run-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 10,
		repeat: -1, // Loop indefinitely
	});

	this.anims.create({
		key: "wizzard-death-anim",
		frames: this.anims.generateFrameNumbers("wizzard-death-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 10,
		repeat: 0, // Play once
	});

	// Add the player sprite and play the knight's idle animation initially

	// Create cursor keys for handling input
	cursors = this.input.keyboard.createCursorKeys();
	map = this.make.tilemap({ key: "map" });
	tileset = map.addTilesetImage("newMap", "tiles");
	Layer = map.createLayer("Tile Layer 1", tileset, 0, 0);
	Layer.setCollisionByProperty({ collided: true });
	Layer.setScale(1.5);
	player = this.physics.add.sprite(400, 300, "rouge-idle-sheet");
	player.anims.play("rogue-idle-anim"); // Start with knight idle animation
	player.body.setCollideWorldBounds(true);
	this.physics.add.collider(player, Layer);
}
