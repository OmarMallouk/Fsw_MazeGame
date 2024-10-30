function shootup() {
	var arrow;
	shootuplocations.forEach((location) => {
		arrow = arrows.get();
		if (arrow) {
			arrow.setAngle(-90); //image angle
			arrow.setActive(true); //activate object
			arrow.setVisible(true); //make visible
			arrow.setPosition(location[0], location[1]); //position
			arrow.setVelocityX(-250); //velocity
		}
	});
}
function shootdown() {
	var arrow;
	shootdownlocations.forEach((location) => {
		arrow = arrows.get();
		if (arrow) {
			arrow.setAngle(180);
			arrow.setActive(true);
			arrow.setVisible(true);
			arrow.setPosition(location[0], location[1]);
			arrow.setVelocityY(250);
		}
	});
}
function shootleft() {
	var arrow;
	shootleftlocations.forEach((location) => {
		arrow = arrows.get();
		if (arrow) {
			arrow.setAngle(-90);
			arrow.setActive(true);
			arrow.setVisible(true);
			arrow.setPosition(location[0], location[1]);
			arrow.setVelocityX(-250);
		}
	});
}
function shootright() {
	var arrow;
	shootrightlocations.forEach((location) => {
		arrow = arrows.get();
		if (arrow) {
			arrow.setAngle(-90);
			arrow.setActive(true);
			arrow.setVisible(true);
			arrow.setPosition(location[0], location[1]);
			arrow.setVelocityY(250);
		}
	});
}
function shootupFireball() {
	var fireball;
	shootuplocations.forEach((location) => {
		fireball = fireballs.get();
		if (fireball) {
			fireball.setAngle(-90);
			fireball.setActive(true);
			fireball.setVisible(true);
			fireball.setPosition(location[0], location[1]);
			fireball.setVelocityX(-250);
		}
	});
}
function shootdownFireball() {
	var fireball;
	shootdownlocations.forEach((location) => {
		fireball = fireballs.get();
		if (fireball) {
			fireball.setAngle(90);
			fireball.play("fireball-anim")
			fireball.setActive(true);
			fireball.setVisible(true);
			fireball.setPosition(location[0], location[1]);
			fireball.setVelocityY(250);
		}
	});
}
function shootleftFireball() {
	var fireball;
	shootleftlocations.forEach((location) => {
		fireball = fireballs.get();
		if (fireball) {
			fireball.setAngle(180);
			fireball.play("fireball-anim")
			fireball.setActive(true);
			fireball.setVisible(true);
			fireball.setPosition(location[0], location[1]);
			fireball.setVelocityX(-250);
		}
	});
}
function shootrightFireball() {
	var fireball;
	shootrightlocations.forEach((location) => {
		fireball = fireballs.get();
		if (fireball) {
			fireball.setAngle(-90);
			fireball.setActive(true);
			fireball.setVisible(true);
			fireball.setPosition(location[0], location[1]);
			fireball.setVelocityY(250);
		}
	});
}
function shootfireballs()
{
	shootdownFireball()
	shootupFireball()
	shootleftFireball()
	shootrightFireball()
}
function shootarrows()
{
	shootdown()
	shootup()
	shootleft()
	shootright()
}
