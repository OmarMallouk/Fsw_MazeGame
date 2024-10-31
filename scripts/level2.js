function preloadLevel2(window) {
	window.load.image("arrows", "assets/sprites/projectiles/arrow.png");
	window.load.tilemapTiledJSON("map2", "assets/tilemaps/level2.json");
	window.load.image("tiles", "assets/sprites/Environment/dungeon.png");
	window.load.image("fullheart", "assets/sprites/Environment/fullheart.png");
	window.load.image(
		"emptyheart",
		"assets/sprites/Environment/emptyheart.png"
	);
	window.load.image(
		"closeddoor",
		"assets/sprites/Environment/closeddoor.png"
	);
	window.load.image("opendoor", "assets/sprites/Environment/opendoor.png");
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

function setlayers2(window) {
	cursors = window.input.keyboard.createCursorKeys(); // setup cursor
	map = window.make.tilemap({ key: "map2" }); //load map
	tileset = map.addTilesetImage("0x72_DungeonTilesetII_v1.7", "tiles"); //
	GLayer = map.createLayer("Floor", tileset, 0, 0);
	GLayer.setScale(1.4);
	WLayer = map.createLayer("Walls", tileset, 0, 0);
	WLayer.setCollisionByProperty({ collides: true });
	WLayer.setScale(1.4);
}

function playersetup2(window) {
	player = window.physics.add.sprite(55, 383, "rouge-idle-sheet");
	player.anims.play("rogue-idle-anim");
	player.body.setCollideWorldBounds(true);
	window.physics.add.collider(player, WLayer);
}

function doors2(window) {
	opendooorimg = window.add.image(610, 20, "opendoor");
	opendooorimg.setScale(1.4);
	closeddoorimg = window.add.image(610, 20, "closeddoor");
	closeddoorimg.setScale(1.4);
}

function coinset2() {
	coinlocations2.forEach((location) => {
		coin = coins.get();
		coin.setActive(true);
		coin.setVisible(true);
		coin.setPosition(location[0], location[1]);
		coin.play("coin-anim");
		coin.scale = 1.2;
	});
}

function createLevel2(window) {
	createanims(window); //create animations
	setlayers2(window);
	playersetup2(window);
	doors2(window);
	physicsgroups(window);
	coinset2();
	physicscolliders2(window);
	score = window.add.text(
		550,
		20,
		`${coinscollected} / ${coinlocations1.length}`,
		{
			font: "16px Arial",
			fill: "#ffffff",
		}
	);

	arrowTimer = window.time.addEvent({
		delay: 1000, // Adjust this value to control the speed of the arrows
		callback: shootarrows2, // Ensure this function exists for Level 2
		callbackScope: window, // The scope in which to execute the function
		loop: true, // Set to true to repeat the event
	});
}
