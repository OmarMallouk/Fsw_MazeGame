function shootup1() {
	var arrow;
	shootuplocations1.forEach((location) => {
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
function shootdown1() {
	var arrow;
	shootdownlocations1.forEach((location) => {
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
function shootleft1() {
	var arrow;
	shootleftlocations1.forEach((location) => {

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
function shootright1() {
	var arrow;
	shootrightlocations1.forEach((location) => {
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
function shootupFireball1() {
	var fireball;
	shootfireballuplocations1.forEach((location) => {
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
function shootdownFireball1() {
	var fireball;
	shootfireballdownlocations1.forEach((location) => {
		fireball = fireballs.get();
		
		if (fireball) {
			fireball.setAngle(90);
			fireball.play("fireball-anim");
			fireball.setActive(true);
			fireball.setVisible(true);
			fireball.setPosition(location[0], location[1]);
			fireball.setVelocityY(250);
		}
	});
}
function shootleftFireball1() {
	var fireball;
	shootfireballleftlocations1.forEach((location) => {
		fireball = fireballs.get();
		
		if (fireball) {
			fireball.setAngle(180);
			fireball.play("fireball-anim");
			fireball.setActive(true);
			fireball.setVisible(true);
			fireball.setPosition(location[0], location[1]);
			fireball.setVelocityX(-250);
		}
	});
}
function shootrightFireball1() {
	var fireball;
	shootfireballrightlocations1.forEach((location) => {
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
function shootfireballs1() {
	shootdownFireball1();
	shootupFireball1();
	shootleftFireball1();
	shootrightFireball1();
}
function shootarrows1() {
	shootdown1();
	shootup1();
	shootleft1();
	shootright1();
}
