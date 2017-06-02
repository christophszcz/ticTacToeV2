// Check if 3 in a row!

function checkIfWin(){
	if( !($('#box1').is(':empty'))  &&  $("#box1").attr("value") ===  $("#box4").attr("value")  &&  ($("#box4").attr("value") ===  $("#box7").attr("value")) ){
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box1").attr("value") + ' has won the game!');
		endTheGame();
	} else if( !($('#box2').is(':empty'))  &&  $("#box2").attr("value") ===  $("#box5").attr("value")  &&  ($("#box5").attr("value") ===  $("#box8").attr("value")) ){
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box2").attr("value") + ' has won the game!');
		endTheGame();
	} else if( !($('#box3').is(':empty'))  &&  $("#box3").attr("value") ===  $("#box6").attr("value")  &&  ($("#box6").attr("value") ===  $("#box9").attr("value")) ){
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box3").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		endTheGame();
	}
}

function endTheGame(){
	for (var i = 1; i < 10; i ++){
		if ($("#box" + i).attr("value").length < 1){
			document.getElementById("box" + i).setAttribute("value", "none");
			document.getElementById("speech-bubble-id").style.display = 'block';
		}
	}
}
 