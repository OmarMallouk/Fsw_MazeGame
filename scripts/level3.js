function preloadLevel3(window) {
	window.load.image('arrows', 'assets/sprites/projectiles/arrow.png'); 
	window.load.tilemapTiledJSON("map", "assets/tilemaps/level3.json");
	window.load.image(
		"tiles",
		"assets/sprites/Environment/dungeon.png"
	);
	window.load.image(
		"fullheart",
		"assets/sprites/Environment/fullheart.png"
	);
	window.load.image(
		"emptyheart",
		"assets/sprites/Environment/emptyheart.png"
	);
	window.load.image(
		"closeddoor",
		"assets/sprites/Environment/closeddoor.png"
	);
	window.load.image(
		"opendoor",
		"assets/sprites/Environment/opendoor.png"
	);
	window.load.spritesheet(
		"knight-idle-sheet",
		"assets/sprites/Heroes/Knight/Idle/Idle-Sheet.png",
		{
			frameWidth: 32,
			frameHeight: 32,
		}
	);
	window.load.spritesheet(
		"coin-sheet",
		"assets/sprites/Environment/coinsprite.png",
		{
			frameWidth: 8,
			frameHeight: 8,
		}
	);
	window.load.spritesheet(
		"fireball-anim",
		"assets/sprites/projectiles/fireball.png",
		{
			frameWidth: 64,
			frameHeight: 32,
		}
	);
	window.load.spritesheet(
		"knight-run-sheet",
		"assets/sprites/Heroes/Knight/Run/Run-Sheet.png",
		{
			frameWidth: 32,
			frameHeight: 32,
		}
	);
	window.load.spritesheet(
		"knight-death-sheet",
		"assets/sprites/Heroes/Knight/Death/Death-Sheet.png",
		{
			frameWidth: 48,
			frameHeight: 32,
		}
	);
	window.load.spritesheet(
		"rogue-idle-sheet",
		"assets/sprites/Heroes/Rogue/Idle/Idle-Sheet.png",
		{
			frameWidth: 32,
			frameHeight: 32,
		}
	);
	window.load.spritesheet(
		"rogue-run-sheet",
		"assets/sprites/Heroes/Rogue/Run/Run-Sheet.png",
		{
			frameWidth: 64,
			frameHeight: 32,
		}
	);
	window.load.spritesheet(
		"rogue-death-sheet",
		"assets/sprites/Heroes/Rogue/Death/Death-Sheet.png",
		{
			frameWidth: 64,
			frameHeight: 32,
		}
	);
	window.load.spritesheet(
		"wizzard-idle-sheet",
		"assets/sprites/Heroes/Wizzard/Idle/Idle-Sheet.png",
		{
			frameWidth: 32,
			frameHeight: 32,
		}
	);
	window.load.spritesheet(
		"wizzard-run-sheet",
		"assets/sprites/Heroes/Wizzard/Run/Run-Sheet.png",
		{
			frameWidth: 64,
			frameHeight: 33,
		}
	);
	window.load.spritesheet(
		"wizzard-death-sheet",
		"assets/sprites/Heroes/Wizzard/Death/Death-Sheet.png",
		{
			frameWidth: 64,
			frameHeight: 32,
		}
	);
}



function setlayers3(window) {
	cursors = window.input.keyboard.createCursorKeys(); // setup cursor
	map = window.make.tilemap({ key: "map" }); //load map
	tileset = map.addTilesetImage("level3", "tiles"); //
	GLayer = map.createLayer("Tile Layer 1", tileset, 0, 0);
	GLayer.setScale(1.4);
	WLayer = map.createLayer("objects", tileset, 0, 0);
	WLayer.setCollisionByProperty({ collided: true });
	WLayer.setScale(1.4);
}

function playersetup3(window) {
	player = window.physics.add.sprite(52, 58, "rouge-idle-sheet");
	player.anims.play("rogue-idle-anim");
	player.body.setCollideWorldBounds(true);
	window.physics.add.collider(player, WLayer);
}

function doors3(window) {
	opendooorimg = window.add.image(438, 226,"opendoor");
	opendooorimg.setScale(1.4);
	closeddoorimg = window.add.image(438, 226,"closeddoor");
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
		maxSize: -1,
	});
}

function coinset3() {
	coinlocations3.forEach((location) => {
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
			coin.disableBody(true, true);
			coinscollected += 1;
			if (coinscollected == coinlocations3.length)
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
		callback: shootarrows3, // The function to execute
		callbackScope: window, // The scope in which to execute the function
		loop: true, // Set to true to repeat the event
	});
}

function createLevel3(window) {
	createanims(window); //create animations
	setlayers3(window);
	playersetup3(window);
	doors3(window);
	physicsgroups(window);
	coinset3();
	physicscolliders(window);
}
