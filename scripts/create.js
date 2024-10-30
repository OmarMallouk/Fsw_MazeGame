function createLevel1() {
	createanims();

	cursors = this.input.keyboard.createCursorKeys();
	map = this.make.tilemap({ key: "map" });
	tileset = map.addTilesetImage("level2", "tiles");
	GLayer = map.createLayer("Ground", tileset, 0, 0);
	GLayer.setScale(1.4);
	WLayer = map.createLayer("Walls", tileset, 0, 0);
	WLayer.setCollisionByProperty({ collided: true });
	WLayer.setScale(1.4);

	player = this.physics.add.sprite(200, 300, "rouge-idle-sheet");
	player.anims.play("rogue-idle-anim");
	player.body.setCollideWorldBounds(true);
	this.physics.add.collider(player, WLayer);

	opendooorimg = this.add.image(67, 110, "opendoor");
	opendooorimg.setScale(1.4);
	closeddoorimg = this.add.image(67, 110, "closeddoor");
	closeddoorimg.setScale(1.4);
	arrows = this.physics.add.group({
		defaultKey: "arrows",
		maxSize: -1,
	});

	fireballs = this.physics.add.group({
		defaultKey: "fireball-anim",
		maxSize: -1,
	});

	coins = this.physics.add.group({
		defaultKey: "coin-sheet",
		maxSize: 10,
	});

	coin = coins.get();
	coin.setActive(true);
	coin.setVisible(true);
	coin.setPosition(200, 200);
	coin.play("coin-anim");
	coin.scale = 1.2;
	player.setImmovable(true);
	this.physics.add.collider(
		coins,
		player,
		function (player, coin) {
			coin.setActive(false);
			coin.setVisible(false);
			coinscollected += 1
			if (coinscollected == 1)
				closeddoorimg.visible = false
		},
		null,
		this
	);
	this.physics.add.collider(
		arrows,
		WLayer,
		function (arrow) {
			arrow.setActive(false);
			arrow.setVisible(false);
		},
		null,
		this
	);
	this.physics.add.collider(
		arrows,
		player,
		function (player, arrow) {
			arrow.setActive(false);
			arrow.setVisible(false);
			// hp--;
		},
		null,
		this
	);
	this.physics.add.collider(
		fireballs,
		player,
		function (player, fireball) {
			fireball.setActive(false);
			fireball.setVisible(false);
			hp -= 2;
		},
		null,
		this
	);
	this.time.addEvent({
		delay: 1000, // 500 milliseconds
		callback: shootleft, // The function to execute
		callbackScope: this, // The scope in which to execute the function
		loop: true, // Set to true to repeat the event
	});
	this.time.addEvent({
		delay: 1000, // 500 milliseconds
		callback: shootright, // The function to execute
		callbackScope: this, // The scope in which to execute the function
		loop: true, // Set to true to repeat the event
	});
	this.time.addEvent({
		delay: 1000, // 500 milliseconds
		callback: shootdown, // The function to execute
		callbackScope: this, // The scope in which to execute the function
		loop: true, // Set to true to repeat the event
	});
	this.time.addEvent({
		delay: 1000, // 500 milliseconds
		callback: shootup, // The function to execute
		callbackScope: this, // The scope in which to execute the function
		loop: true, // Set to true to repeat the event
	});
}
