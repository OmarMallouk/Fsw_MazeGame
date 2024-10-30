function setlayers1(window) {
	cursors = window.input.keyboard.createCursorKeys(); // setup cursor
	map = window.make.tilemap({ key: "map" }); //load map
	tileset = map.addTilesetImage("dungeon", "tiles"); //
	GLayer = map.createLayer("Ground", tileset, 0, 0);
	GLayer.setScale(1.4);
	WLayer = map.createLayer("Walls", tileset, 0, 0);
	WLayer.setCollisionByProperty({ collided: true });
	WLayer.setScale(1.4);
}

function playersetup1(window) {
	player = window.physics.add.sprite(200, 300, "rouge-idle-sheet");
	player.anims.play("rogue-idle-anim");
	player.body.setCollideWorldBounds(true);
	window.physics.add.collider(player, WLayer);
}

function doors1(window) {
	opendooorimg = window.add.image(67, 110, "opendoor");
	opendooorimg.setScale(1.4);
	closeddoorimg = window.add.image(67, 110, "closeddoor");
	closeddoorimg.setScale(1.4);
}

function physicsgroups(window) {
	// can be used across levels
	arrows = window.physics.add.group({
		defaultKey: "arrows",
		maxSize: -1, //infinite arrows, set number to specify amount
	});

	fireballs = window.physics.add.group({
		defaultKey: "fireball-anim",
		maxSize: -1,
	});

	coins = window.physics.add.group({
		defaultKey: "coin-sheet",
		maxSize: 10,
	});
}

function coinset1() {
	coinlocations1.forEach((location) => {
		coin = coins.get();
		coin.setActive(true);
		coin.setVisible(true);
		coin.setPosition(location[0], location[1]);
		coin.play("coin-anim");
		coin.scale = 1.2;
	});
}

function physicscolliders(window) {
	player.setImmovable(true); // make player immovable by projectiles
	window.physics.add.collider(
		coins,
		player,
		function (player, coin) {
			coin.setActive(false);
			coin.setVisible(false);
			coinscollected += 1;
			if (coinscollected == coinlocations1.length)
				closeddoorimg.visible = false;
		},
		null,
		window
	);
	window.physics.add.collider(
		arrows,
		WLayer,
		function (arrow) {
			arrow.setActive(false);
			arrow.setVisible(false);
		},
		null,
		window
	);
	window.physics.add.collider(
		fireballs,
		WLayer,
		function (arrow) {
			arrow.setActive(false);
			arrow.setVisible(false);
		},
		null,
		window
	);
	window.physics.add.collider(
		arrows,
		player,
		function (player, arrow) {
			arrow.setActive(false);
			arrow.setVisible(false);
			hp--;
		},
		null,
		window
	);
	window.physics.add.collider(
		fireballs,
		player,
		function (player, fireball) {
			fireball.setActive(false);
			fireball.setVisible(false);
			if (charselect != "wizzard")
				hp -= 2;
		},
		null,
		window
	);
	window.time.addEvent({
		delay: 1000,
		callback: shootarrows1, // The function to execute
		callbackScope: window, // The scope in which to execute the function
		loop: true, // Set to true to repeat the event
	});
}

function createLevel1(window) {
	createanims(window); //create animations
	setlayers1(window);
	playersetup1(window);
	doors1(window);
	physicsgroups(window);
	coinset1();
	physicscolliders(window);
}
