// Check if 3 in a row!

function checkIfWin(){
	var speechBubble = document.getElementById('bubble-text');
	var speechBubbleModal = document.getElementById('bubble-text-modal');
	if( !($('#box1').is(':empty'))  &&  $("#box1").attr("value") ===  $("#box4").attr("value")  &&  ($("#box4").attr("value") ===  $("#box7").attr("value")) ){
		winOrTie = true;
		if (speechBubble !== null && speechBubbleModal !== null){
			speechBubble.parentNode.removeChild(speechBubble);
			speechBubbleModal.parentNode.removeChild(speechBubbleModal);
		}
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box1").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", $("#box1").attr("value") + " has won the game!");
		endTheGame();
	} else if( !($('#box2').is(':empty'))  &&  $("#box2").attr("value") ===  $("#box5").attr("value")  &&  ($("#box5").attr("value") ===  $("#box8").attr("value")) ){
		winOrTie = true;
		if (speechBubble !== null && speechBubbleModal !== null){
			speechBubble.parentNode.removeChild(speechBubble);
			speechBubbleModal.parentNode.removeChild(speechBubbleModal);
		}
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box2").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", $("#box2").attr("value") + " has won the game!");
		endTheGame();
	} else if( !($('#box3').is(':empty'))  &&  $("#box3").attr("value") ===  $("#box6").attr("value")  &&  ($("#box6").attr("value") ===  $("#box9").attr("value")) ){
		winOrTie = true;
		if (speechBubble !== null && speechBubbleModal !== null){
			speechBubble.parentNode.removeChild(speechBubble);
			speechBubbleModal.parentNode.removeChild(speechBubbleModal);
		}
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box3").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", $("#box3").attr("value") + " has won the game!");
		endTheGame();
	} else if( !($('#box1').is(':empty'))  &&  $("#box1").attr("value") ===  $("#box2").attr("value")  &&  ($("#box2").attr("value") ===  $("#box3").attr("value")) ){
		winOrTie = true;
		if (speechBubble !== null && speechBubbleModal !== null){
			speechBubble.parentNode.removeChild(speechBubble);
			speechBubbleModal.parentNode.removeChild(speechBubbleModal);
		}
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box1").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", $("#box1").attr("value") + " has won the game!");
		endTheGame();
	} else if( !($('#box4').is(':empty'))  &&  $("#box4").attr("value") ===  $("#box5").attr("value")  &&  ($("#box5").attr("value") ===  $("#box6").attr("value")) ){
		winOrTie = true;
		if (speechBubble !== null && speechBubbleModal !== null){
			speechBubble.parentNode.removeChild(speechBubble);
			speechBubbleModal.parentNode.removeChild(speechBubbleModal);
		}
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", $("#box4").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", $("#box4").attr("value") + " has won the game!");
		endTheGame();
	} else if( !($('#box7').is(':empty'))  &&  $("#box7").attr("value") ===  $("#box8").attr("value")  &&  ($("#box8").attr("value") ===  $("#box9").attr("value")) ){
		winOrTie = true;
		if (speechBubble !== null && speechBubbleModal !== null){
			speechBubble.parentNode.removeChild(speechBubble);
			speechBubbleModal.parentNode.removeChild(speechBubbleModal);
		}
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", "<div id='bubble-text'>" + $("#box7").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>" + "</div>");
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", $("#box7").attr("value") + " has won the game!");
		endTheGame();
	} else if( !($('#box1').is(':empty'))  &&  $("#box1").attr("value") ===  $("#box5").attr("value")  &&  ($("#box5").attr("value") ===  $("#box9").attr("value")) ){
		winOrTie = true;
		if (speechBubble !== null && speechBubbleModal !== null){
			speechBubble.parentNode.removeChild(speechBubble);
			speechBubbleModal.parentNode.removeChild(speechBubbleModal);
		}
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", "<div id='bubble-text'>" + $("#box1").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>" + "</div>");
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", $("#box1").attr("value") + " has won the game!");
		endTheGame();
	} else if( !($('#box3').is(':empty'))  &&  $("#box3").attr("value") ===  $("#box5").attr("value")  &&  ($("#box5").attr("value") ===  $("#box7").attr("value")) ){
		winOrTie = true;
		if (speechBubble !== null && speechBubbleModal !== null){
			speechBubble.parentNode.removeChild(speechBubble);
			speechBubbleModal.parentNode.removeChild(speechBubbleModal);
		}
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", "<div id='bubble-text'>" + $("#box3").attr("value") + " has won the game! " + "<a href='#' onclick='location.reload();'>Play Again</a>" + "</div>");
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", $("#box3").attr("value") + " has won the game!");
		endTheGame();
	} else {
		catsGame();
	}
}

function endTheGame(){
	for (var a = 1; a < 10; a ++){
		if ($("#box" + a).attr("value").length < 1){
			document.getElementById("box" + a).setAttribute("value", "none");
			document.getElementById("speech-bubble-id").style.display = 'inline-block';
		}
	}
}

function catsGame(){
	var speechBubble = document.getElementById('bubble-text');
	var speechBubbleModal = document.getElementById('bubble-text-modal');
	if( !($('#box1').is(':empty')) && !($('#box2').is(':empty')) && !($('#box3').is(':empty')) && !($('#box4').is(':empty')) && !($('#box5').is(':empty')) && !($('#box6').is(':empty')) && !($('#box7').is(':empty')) && !($('#box8').is(':empty')) && !($('#box9').is(':empty')) ){
		winOrTie = true;
		speechBubble.parentNode.removeChild(speechBubble);
		speechBubbleModal.parentNode.removeChild(speechBubbleModal);
		document.getElementById('speech-bubble-id').insertAdjacentHTML("afterbegin", "Unfortunately, nobody won the game. " + "<a href='#' onclick='location.reload();'>Play Again</a>");
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", "Nobody won.");
		endTheGame();
	}
}
