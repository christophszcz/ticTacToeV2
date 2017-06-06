// Check if 3 in a row!

function checkIfWin(){
	if( !($('#box1').is(':empty'))  &&  $("#box1").attr("value") ===  $("#box4").attr("value")  &&  ($("#box4").attr("value") ===  $("#box7").attr("value")) ){
		win = true;
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box1").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		endTheGame();
	} else if( !($('#box2').is(':empty'))  &&  $("#box2").attr("value") ===  $("#box5").attr("value")  &&  ($("#box5").attr("value") ===  $("#box8").attr("value")) ){
		win = true;
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box2").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		endTheGame();
	} else if( !($('#box3').is(':empty'))  &&  $("#box3").attr("value") ===  $("#box6").attr("value")  &&  ($("#box6").attr("value") ===  $("#box9").attr("value")) ){
		win = true;
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box3").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		endTheGame();
	} else if( !($('#box1').is(':empty'))  &&  $("#box1").attr("value") ===  $("#box2").attr("value")  &&  ($("#box2").attr("value") ===  $("#box3").attr("value")) ){
		win = true;
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box1").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		endTheGame();
	} else if( !($('#box4').is(':empty'))  &&  $("#box4").attr("value") ===  $("#box5").attr("value")  &&  ($("#box5").attr("value") ===  $("#box6").attr("value")) ){
		win = true;
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box4").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		endTheGame();
	} else if( !($('#box7').is(':empty'))  &&  $("#box7").attr("value") ===  $("#box8").attr("value")  &&  ($("#box8").attr("value") ===  $("#box9").attr("value")) ){
		win = true;
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", "<div id='winner-text'>" + $("#box7").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>" + "</div>");
		endTheGame();
	} else if( !($('#box1').is(':empty'))  &&  $("#box1").attr("value") ===  $("#box5").attr("value")  &&  ($("#box5").attr("value") ===  $("#box9").attr("value")) ){
		win = true;
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", "<div id='winner-text'>" + $("#box1").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>" + "</div>");
		endTheGame();
	} else if( !($('#box3').is(':empty'))  &&  $("#box3").attr("value") ===  $("#box5").attr("value")  &&  ($("#box5").attr("value") ===  $("#box7").attr("value")) ){
		win = true;
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", "<div id='winner-text'>" + $("#box3").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>" + "</div>");
		endTheGame();
	}
}

function endTheGame(){
	for (var a = 1; a < 10; a ++){
		if ($("#box" + a).attr("value").length < 1){
			document.getElementById("box" + a).setAttribute("value", "none");
			document.getElementById("speech-bubble-id").style.display = 'block';
		}
	}
}
 