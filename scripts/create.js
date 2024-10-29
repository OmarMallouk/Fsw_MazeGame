var arrows;
var fireballs;
var shootleftlocations = [
	[810, 60],
	[810, 70],
];
var shootrightlocations = [];
var shootuplocations = [];
var shootdownlocations = [];
var hp = 5;
function createLevel1() {
	createanims();

	cursors = this.input.keyboard.createCursorKeys();

	map = this.make.tilemap({ key: "map" });
	tileset = map.addTilesetImage("newMap", "tiles");
	Layer = map.createLayer("Tile Layer 1", tileset, 0, 0);
	Layer.setCollisionByProperty({ collided: true });
	Layer.setScale(1.4);

	player = this.physics.add.sprite(400, 300, "rouge-idle-sheet");
	player.anims.play("rogue-idle-anim");
	player.body.setCollideWorldBounds(true);
	this.physics.add.collider(player, Layer);

	arrows = this.physics.add.group({
		defaultKey: "arrows",
		maxSize: -1,
	});

	fireballs = this.physics.add.group({
		defaultKey: "fireball-anim",
		maxSize: -1,
	});

	player.setImmovable(true);
	this.physics.add.collider(arrows, Layer, function () {}, null, this);
	this.physics.add.collider(
		arrows,
		player,
		function (player, arrow) {
			arrow.setActive(false);
			arrow.setVisible(false);
			hp--;
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
		delay: 500, // 500 milliseconds
		callback: shootleft, // The function to execute
		callbackScope: this, // The scope in which to execute the function
		loop: true, // Set to true to repeat the event
	});
}

function shootup(x, y) {
	var arrow = arrows.get();
	if (arrow) {
		arrow.setActive(true);
		arrow.setVisible(true);
		arrow.setPosition(x, y);
		arrow.setVelocityX(-600);
		setTimeout(() => {
			arrow.setActive(false);
			arrow.setVisible(false);
		}, 100);
	}
}

function shootdown(x, y) {
	var arrow = arrows.get();
	if (arrow) {
		arrow.setAngle(180);
		arrow.setActive(true);
		arrow.setVisible(true);
		arrow.setPosition(x, y);
		arrow.setVelocityY(600);
	}
}
function shootleft(x, y) {
	var arrow;
	shootleftlocations.forEach((location) => {
		arrow = arrows.get();
		if (arrow) {
			arrow.setAngle(-90);
			arrow.setActive(true);
			arrow.setVisible(true);
			arrow.setPosition(location[0], location[1]);
			arrow.setVelocityX(-600);
		}
	});
}

function shootright(x, y) {
	var arrow = arrows.get();
	if (arrow) {
		arrow.setActive(true);
		arrow.setVisible(true);
		arrow.setPosition(x, y);
		arrow.setVelocityY(600);
	}
}
