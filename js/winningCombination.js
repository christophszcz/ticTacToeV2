//Winning combinations

function checkIfWin(){
	if( !($('#box1').is(':empty'))  &&  $("#box1").attr("value") ===  $("#box4").attr("value")  &&  ($("#box4").attr("value") ===  $("#box7").attr("value")) ){
		alert($("#box4").attr("value") + ' has won the game!');
	}
}
