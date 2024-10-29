function shootup(x, y) {
	var arrow;
	shootuplocations.forEach((location) => {
		arrow = arrows.get();
		if (arrow) {
			arrow.setAngle(-90);//image angle
			arrow.setActive(true);//activate object
			arrow.setVisible(true);//make visible
			arrow.setPosition(location[0], location[1]);//position
			arrow.setVelocityX(-250);//velocity
		}
	});
}
function shootdown(x, y) {
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
function shootleft(x, y) {
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
function shootright(x, y) {
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
