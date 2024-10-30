function shootup3() {
	var arrow;
	shootuplocations1.forEach((location) => {
		arrow = arrows.get();
		if (arrow) {

			arrow.setAngle(0); //image angle
			arrow.setActive(true); //activate object
			arrow.setVisible(true); //make visible
			arrow.setPosition(location[0], location[1]); //position
			arrow.setVelocityY(-250); //velocity
		}
	});
}



