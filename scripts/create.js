function createLevel1() {
	createanims();


	cursors = this.input.keyboard.createCursorKeys();

	map = this.make.tilemap({ key: "map" });
	tileset = map.addTilesetImage("newMap", "tiles");
	Layer = map.createLayer("Tile Layer 1", tileset, 0, 0);
	Layer.setCollisionByProperty({ collided: true });
	Layer.setScale(1.4);

	player = this.physics.add.sprite(400, 300, "rouge-idle-sheet");
	player.anims.play("rogue-idle-anim"); // Start with knight idle animation
	player.body.setCollideWorldBounds(true);
	this.physics.add.collider(player, Layer);

	projectiles = this.physics.add.group({
		defaultKey: 'projectile', // The key for the projectile image
		maxSize: 10 // Limit the number of active projectiles
	  });
}
