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

var charselect = "rogue";
var mapselect = "map1";

var Level1 = new Phaser.Game(configLevel1);
var player;

var arrows;
var fireballs;

var closeddoorimg;

var hp = 5;
var coinscollected = 0

var shootleftlocations = [
	[610, 100],
	[610, 215],
	[610, 345],
];
var shootrightlocations = [];
var shootuplocations = [];
var shootdownlocations = [
	[145,50],
	[325,50],
	[505,50],
];

