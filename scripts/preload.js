function preloadLevel1(window) {
	window.load.image('arrows', 'assets/sprites/projectiles/arrow.png'); 
	window.load.tilemapTiledJSON("map", "assets/tilemaps/level1.json");
	window.load.image(
		"tiles",
		"assets/sprites/Environment/dungeon.png"
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
		"fireball",
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
