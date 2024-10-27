function rogueanimation() {
	var state = "idle";
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
	var state = "idle";
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
	if (state === "dead") {
		player.anims.play("knight-death-anim", true);
	}
	if (state === "idle") {
		player.anims.play("knight-idle-anim", true);
	}
}

function wizzardanimation() {
	var state = "idle";
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
