// Check if 3 in a row!

function checkIfWin(){
	if( !($('#box1').is(':empty'))  &&  $("#box1").attr("value") ===  $("#box4").attr("value")  &&  ($("#box4").attr("value") ===  $("#box7").attr("value")) ){
		alert($("#box4").attr("value") + ' has won the game!');
		endTheGame();
	}
}

function endTheGame(){
	for (var i = 1; i < 10; i ++){
		if ($("#box" + i).attr("value").length < 1){
			document.getElementById("box" + i).setAttribute("value", "none");
		}
	}
}
 