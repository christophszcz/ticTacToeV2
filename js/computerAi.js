//A.I. Algorithm

function computerMove(){
	if(Computer.turn){
		if ($('#box1').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			  $( "#box1" ).append(Computer.selection);
			  $( "#box1" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box2').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			  $( "#box2" ).append(Computer.selection);
			  $( "#box2" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box3').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			  $( "#box3" ).append(Computer.selection);
			  $( "#box3" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box4').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			  $( "#box4" ).append(Computer.selection);
			  $( "#box4" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box5').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box5" ).append(Computer.selection);
			 	$( "#box5" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box6').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box6" ).append(Computer.selection);
			 	$( "#box6" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box7').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box7" ).append(Computer.selection);
			 	$( "#box7" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box8').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box8" ).append(Computer.selection);
			 	$( "#box8" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box9').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box9" ).append(Computer.selection);
			 	$( "#box9" ).attr("value", Computer.selection);
			}, 1000);
		}

		User.turn = true;
		Computer.turn = false;	 
	}
};