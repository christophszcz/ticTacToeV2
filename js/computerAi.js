//A.I. Algorithm

function computerMove(){
	if(Computer.turn){
		if ($('#box1').is(':empty') && Computer.turn === true ){
			setTimeout(function() {
			  $( "#box1" ).append(Computer.selection);
			}, 1000);
			$( "#box1" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box2').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			  $( "#box2" ).append(Computer.selection);
			}, 1000);
			$( "#box2" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box3').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			  $( "#box3" ).append(Computer.selection);
			}, 1000);
			$( "#box3" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box4').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			  $( "#box4" ).append(Computer.selection);
			}, 1000);
			$( "#box4" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box5').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box5" ).append(Computer.selection);
			}, 1000);
			$( "#box5" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box6').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box6" ).append(Computer.selection);
			}, 1000);
			$( "#box6" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box7').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box7" ).append(Computer.selection);
			}, 1000);
			$( "#box7" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box8').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box8" ).append(Computer.selection);
			}, 1000);
			$( "#box8" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box9').is(':empty') && Computer.turn === true){
			setTimeout(function() {
			 	$( "#box9" ).append(Computer.selection);
			}, 1000);
			$( "#box9" ).attr("value", Computer.selection);
			Computer.move ++;
		}

		User.turn = true;
		Computer.turn = false;	 
	}
};