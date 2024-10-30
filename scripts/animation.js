function rogueanimation() {
	state = "idle";
	if (state === "idle") {
		player.body.setOffset(0, 0);

		if (
			cursors.left.isDown ||
			cursors.right.isDown ||
			cursors.up.isDown ||
			cursors.down.isDown
		) {
			state = "running";
		}
		// } else if (cursors.space.isDown) {
		// 	state = "dead";
		// }
	}
	if (cursors.left.isDown) {
		player.setFlipX(false);
	}
	if (cursors.right.isDown) {
		player.setFlipX(true);
	}
	if (state === "running") {
		player.body.setOffset(16, 0);
		player.anims.play("rogue-run-anim", true);
		if (
			!cursors.right.isDown &&
			!cursors.left.isDown &&
			!cursors.up.isDown &&
			!cursors.down.isDown
		) {
			state = "idle";
		}
	}
	if (state === "dead") {
		player.anims.play("rogue-death-anim", true);
	}
	if (state === "idle") {
		player.anims.play("rogue-idle-anim", true);
	}
}

function knightanimation() {
	state = "idle";
	if (state === "idle") {
		if (
			cursors.left.isDown ||
			cursors.right.isDown ||
			cursors.up.isDown ||
			cursors.down.isDown
		) {
			state = "running";
		} else if (cursors.space.isDown) {
			state = "dead";
		}
	}
	if (cursors.left.isDown) {
		player.setFlipX(false);
	}
	if (cursors.right.isDown) {
		player.setFlipX(true);
	}
	if (state === "running") {
		player.anims.play("knight-run-anim", true);
		if (
			!cursors.right.isDown &&
			!cursors.left.isDown &&
			!cursors.up.isDown &&
			!cursors.down.isDown
		) {
			state = "idle";
		}
	}
	// if (state === "dead") {
	// 	player.anims.play("knight-death-anim", true);
	// }
	if (state === "idle") {
		player.anims.play("knight-idle-anim", true);
	}
}

function wizzardanimation() {
	state = "idle";
	if (state === "idle") {
		player.body.setOffset(0, 0);
		if (
			cursors.left.isDown ||
			cursors.right.isDown ||
			cursors.up.isDown ||
			cursors.down.isDown
		) {
			state = "running";
			player.body.setOffset(16, 0);
		}
		// } else if (cursors.space.isDown) {
		// 	state = "dead";
		// }
	}
	if (cursors.left.isDown) {
		player.setFlipX(false);
	}
	if (cursors.right.isDown) {
		player.setFlipX(true);
	}
	if (state === "running") {
		player.anims.play("wizzard-run-anim", true);
		if (
			!cursors.right.isDown &&
			!cursors.left.isDown &&
			!cursors.up.isDown &&
			!cursors.down.isDown
		) {
			state = "idle";
		}
	}
	if (state === "dead") {
		player.anims.play("wizzard-death-anim", true);
	}
	if (state === "idle") {
		player.anims.play("wizzard-idle-anim", true);
	}
}

function createanims(window) {
	window.anims.create({
		key: "coin-anim",
		frames: window.anims.generateFrameNumbers("coin-sheet", {
			start: 0,
			end: 3,
		}),
		frameRate: 10,
		repeat: -1, // Loop indefinitely
	});
	window.anims.create({
		key: "knight-idle-anim",
		frames: window.anims.generateFrameNumbers("knight-idle-sheet", {
			start: 0,
			end: 3,
		}),
		frameRate: 10,
		repeat: -1, // Loop indefinitely
	});
	window.anims.create({
		key: "fireball-anim",
		frames: window.anims.generateFrameNumbers("fireball-anim", {
			start: 0,
			end: 4,
		}),
		frameRate: 10,
		repeat: -1,
	});
	window.anims.create({
		key: "knight-run-anim",
		frames: window.anims.generateFrameNumbers("knight-run-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 12,
		repeat: -1, // Loop indefinitely
	});

	window.anims.create({
		key: "knight-death-anim",
		frames: window.anims.generateFrameNumbers("knight-death-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 10,
		repeat: 0, // Play once
	});

	// Define the rogue's animations
	window.anims.create({
		key: "rogue-idle-anim",
		frames: window.anims.generateFrameNumbers("rogue-idle-sheet", {
			start: 0,
			end: 3,
		}),
		frameRate: 10,
		repeat: -1, // Loop indefinitely
	});

	window.anims.create({
		key: "rogue-run-anim",
		frames: window.anims.generateFrameNumbers("rogue-run-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 12,
		repeat: -1, // Loop indefinitely
	});

	window.anims.create({
		key: "rogue-death-anim",
		frames: window.anims.generateFrameNumbers("rogue-death-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 10,
		repeat: 0, // Play once
	});

	// Define the wizard's animations (with two Zs)
	window.anims.create({
		key: "wizzard-idle-anim",
		frames: window.anims.generateFrameNumbers("wizzard-idle-sheet", {
			start: 0,
			end: 3,
		}),
		frameRate: 10,
		repeat: -1, // Loop indefinitely
	});

	window.anims.create({
		key: "wizzard-run-anim",
		frames: window.anims.generateFrameNumbers("wizzard-run-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 10,
		repeat: -1, // Loop indefinitely
	});

	window.anims.create({
		key: "wizzard-death-anim",
		frames: window.anims.generateFrameNumbers("wizzard-death-sheet", {
			start: 0,
			end: 5,
		}),
		frameRate: 10,
		repeat: 0, // Play once
	});
}
