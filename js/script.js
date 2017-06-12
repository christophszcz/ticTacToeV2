$(document).ready(function(){
	$('#myModal').modal('show');

	winOrTie = false;

	$('#box1').click(function(){
		if ($('#box1').is(':empty') && $("#box1").attr("value").length < 1 && winOrTie === false){
			$( "#box1" ).append(User.selection);
			$( "#box1" ).attr("value", User.selection);
			checkIfWin();
			computersTurn();
			turn();
		}
		$( "#box1" ).off('click');
	});

	$('#box2').click(function(){
		if ($('#box2').is(':empty') && $("#box2").attr("value").length < 1 && winOrTie === false){
			$( "#box2" ).append( User.selection);
			$( "#box2" ).attr("value", User.selection);
			checkIfWin();
			computersTurn();
			turn();
		}
		$( "#box2" ).off('click');
	});

	$('#box3').click(function(){
		if ($('#box3').is(':empty') && $("#box3").attr("value").length < 1 && winOrTie === false){
			$( "#box3" ).append( User.selection);
			$( "#box3" ).attr("value", User.selection);
			checkIfWin();
			computersTurn();
			turn();
		}
		$( "#box3" ).off('click');
	});

	$('#box4').click(function(){
		if ($('#box4').is(':empty') && $("#box4").attr("value").length < 1 && winOrTie === false){
			$( "#box4" ).append( User.selection);
			$( "#box4" ).attr("value", User.selection);
			checkIfWin();
			computersTurn();
			turn();
		}
		$( "#box4" ).off('click');
	});

	$('#box5').click(function(){
		if ($('#box5').is(':empty') && $("#box5").attr("value").length < 1 && winOrTie === false){
			$( "#box5" ).append( User.selection);
			$( "#box5" ).attr("value", User.selection);
			checkIfWin();
			computersTurn();
			turn();
		}
		$( "#box5" ).off('click');
	});

	$('#box6').click(function(){
		if ($('#box6').is(':empty') && $("#box6").attr("value").length < 1 && winOrTie === false){
			$( "#box6" ).append( User.selection);
			$( "#box6" ).attr("value", User.selection);
			checkIfWin();
			computersTurn();
			turn();
		}
		$( "#box6" ).off('click');
	});

	$('#box7').click(function(){
		if ($('#box7').is(':empty') && $("#box7").attr("value").length < 1 && winOrTie === false){
			$( "#box7" ).append( User.selection);
			$( "#box7" ).attr("value", User.selection);
			checkIfWin();
			computersTurn();
			turn();
		}
		$( "#box7" ).off('click');
	});

	$('#box8').click(function(){
		if ($('#box8').is(':empty') && $("#box8").attr("value").length < 1 && winOrTie === false){
			$( "#box8" ).append( User.selection);
			$( "#box8" ).attr("value", User.selection);
			checkIfWin();
			computersTurn();
			turn();
		}
		$( "#box8" ).off('click');
	});

	$('#box9').click(function(){
		if ($('#box9').is(':empty') && $("#box9").attr("value").length < 1 && winOrTie === false){
			$( "#box9" ).append( User.selection);
			$( "#box9" ).attr("value", User.selection);
			checkIfWin();
			computersTurn();
			turn();
		}
		$( "#box9" ).off('click');
	});

	if (User.turn || Computer.turn){
		turn();
	}

	$('#x').click(function(){
		document.getElementById('speech-bubble-id').style.display = 'none';
		document.getElementById('speech-bubble-id').removeChild(document.getElementById('bubble-text'));
	});

	// Choose your mark
	$('#x-button').click(function(){
		User.selection = 'X';
		Computer.selection = 'O';
		$('#myModal').modal('toggle');
		firstMove();
	});

	$('#o-button').click(function(){
		User.selection = 'O';
		Computer.selection = 'X';
		$('#myModal').modal('toggle');
		firstMove();
	});

});

var User = {
	'selection' : 'X',
	'turn' : false
};

var Computer = {
	'selection' : 'O',
	'turn' : false
};

//Computer's turn
function computersTurn(){
	User.turn = false;
	Computer.turn = true;
	computerMove();
}

//First move
function firstMove(){
	var number = Math.floor(Math.random() * 2);
	if (number === 0){
		User.turn = true;
		turn();
	} else{
		Computer.turn = true;
		computerMove();
	}
}

//Indicate player's turn
function turn(){
	var speechBubble = document.getElementById('bubble-text');
	if (User.turn && winOrTie === false){
		if (speechBubble !== null){
			speechBubble.parentNode.removeChild(speechBubble);
		}
		document.getElementById("speech-bubble-id").insertAdjacentHTML("afterbegin", "<div id='bubble-text'>It's your turn!</div>");
		document.getElementById("speech-bubble-id").style.display = 'inline-block';
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", "<div id='bubble-text'>It's your turn!</div>");
		document.getElementById("speech-bubble-modal-id").style.display = 'inline-block';
	} else if (Computer.turn && winOrTie === false) {
		if (speechBubble !== null){
			speechBubble.parentNode.removeChild(speechBubble);
		}
  	document.getElementById("speech-bubble-id").insertAdjacentHTML("afterbegin", "<div id='bubble-text'>Now it's the computer's turn.</div>");
		document.getElementById("speech-bubble-id").style.display = 'inline-block'; 
		document.getElementById("speech-bubble-modal-id").insertAdjacentHTML("afterbegin", "<div id='bubble-text'>Now it's the computer's turn.</div>");
		document.getElementById("speech-bubble-modal-id").style.display = 'inline-block'; 
	}
}