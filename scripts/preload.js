function preload() {
	// Load the knight's sprite sheets
	this.load.tilemapTiledJSON("map", "assets/tilemaps/map1.json");
	this.load.image(
		"tiles",
		"assets/sprites/Environment/Green Woods/Assets/Tiles.png"
	);
	this.load.spritesheet(
		"knight-idle-sheet",
		"assets/sprites/Heroes/Knight/Idle/Idle-Sheet.png",
		{
			frameWidth: 32,
			frameHeight: 32,
		}
	);
	this.load.spritesheet(
		"knight-run-sheet",
		"assets/sprites/Heroes/Knight/Run/Run-Sheet.png",
		{
			frameWidth: 32,
			frameHeight: 32,
		}
	);
	this.load.spritesheet(
		"knight-death-sheet",
		"assets/sprites/Heroes/Knight/Death/Death-Sheet.png",
		{
			frameWidth: 48,
			frameHeight: 32,
		}
	);

	// Load the rogue's sprite sheets
	this.load.spritesheet(
		"rogue-idle-sheet",
		"assets/sprites/Heroes/Rogue/Idle/Idle-Sheet.png",
		{
			frameWidth: 32,
			frameHeight: 32,
		}
	);
	this.load.spritesheet(
		"rogue-run-sheet",
		"assets/sprites/Heroes/Rogue/Run/Run-Sheet.png",
		{
			frameWidth: 64,
			frameHeight: 32,
		}
	);
	this.load.spritesheet(
		"rogue-death-sheet",
		"assets/sprites/Heroes/Rogue/Death/Death-Sheet.png",
		{
			frameWidth: 64,
			frameHeight: 32,
		}
	);

	// Load the wizard's sprite sheets (with two Zs)
	this.load.spritesheet(
		"wizzard-idle-sheet",
		"assets/sprites/Heroes/Wizzard/Idle/Idle-Sheet.png",
		{
			frameWidth: 32,
			frameHeight: 32,
		}
	);
	this.load.spritesheet(
		"wizzard-run-sheet",
		"assets/sprites/Heroes/Wizzard/Run/Run-Sheet.png",
		{
			frameWidth: 64,
			frameHeight: 33,
		}
	);
	this.load.spritesheet(
		"wizzard-death-sheet",
		"assets/sprites/Heroes/Wizzard/Death/Death-Sheet.png",
		{
			frameWidth: 64,
			frameHeight: 32,
		}
	);
}
