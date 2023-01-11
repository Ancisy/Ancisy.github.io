var seed = "0";
var delay = 2; //Delay In Ticks
var amount = 40; //How Many Times It Generates A Number Before Moving On To The Next
var numLength = 3;

var amountNum = 0;
var frameNum = 0;
var numPosition = 7;
var body = document.getElementsByClassName("number")[0];
var rng = new Math.seedrandom(seed);

for (i = 0; i < numLength; i++) {
	body.innerHTML += "<li>0</li>";
}

var numbers = document.getElementsByTagName("li");
//const months = ["2", "3", "4", "5", "6", "7", "8"];


function tick() {
	frameNum++;
	if (frameNum > delay) {
		amountNum++;
		frameNum = 1;
		for (i = numPosition; i < numLength; i++) {
			numbers[i].innerHTML = Math.floor(Math.random() * 5)
		}
	}
	if (amountNum > amount) {
		numPosition++;
		amountNum = 0;
	}
	if (numPosition < numLength) {
		requestAnimationFrame(tick);
	} else {
		numPosition = 0;
	}

}
tick().then(
function addClass() {
	var elem = document.getElementsByClassName("winner_section");
	elem.classList.add("addCSS");
})
