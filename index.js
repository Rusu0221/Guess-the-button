var random = Math.floor(Math.random() * 3) + 1;
var score = 0, round = 0, double = 0;

function button(x) {
	if (random == x) {
		document.getElementById("display").innerHTML = "Win";
  		document.getElementById("display").style.color = "green";
		random = Math.floor(Math.random() * 3) + 1;
		score += 1 + double;
		++double;
		document.getElementById("score").innerHTML = "Score " + score;
	} else {
		document.getElementById("display").innerHTML = "Lose";
	        document.getElementById("display").style.color = "red";
	        document.getElementById("1").disabled = true;
		document.getElementById("2").disabled = true;
		document.getElementById("3").disabled = true;
	        double = 0;
	}
	++round;
	document.getElementById("round").innerHTML = "Round " + round;
}

function restart() {
	document.getElementById("1").disabled = false;
	document.getElementById("2").disabled = false;
    	document.getElementById("3").disabled = false;
	document.getElementById("display").innerHTML = "";
	random = Math.floor(Math.random() * 3) + 1;
}
