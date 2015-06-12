TheWalkingLady.About = function (game) {};

var creditsBackground;
var credsLink;

function gotoMenu() {
	//  Start the MainMenu state
	this.state.start('MainMenu');
}

function openLink() {
	window.open('https://github.com/gh0staria/the-walking-lady/blob/master/README.md#credits', '_blank');
}

TheWalkingLady.About.prototype = {
	create: function () {
		//  Set the screen's background
		creditsBackground = this.add.sprite(0, 0, 'creditsMenu');
		credsLink = this.add.text(this.world.centerX, 385, 'github.com/gh0staria/the-walking-lady/', {fontStyle: 'italic', fontSize: '18px', fill: '#dfa51b'});
		credsLink.anchor.setTo(0.5, 0);
		credsLink.inputEnabled = true;
		credsLink.events.onInputDown.add(openLink, this);
		
		//  Add back button
		var backButton = this.add.sprite(100, 410, 'gotoMenuBtn');
		//  Make it clickable
		backButton.inputEnabled = true;
		//  Make it so when you click on it, it runs the gotoMenu function
		backButton.events.onInputDown.add(gotoMenu, this);
	}
};
