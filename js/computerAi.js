//A.I. Algorithm

function computerMove(){
	if(Computer.turn){

		for (var i = 1; i < 10; i ++){ //Block win in a horizontal row 
			if ( !($("#box" + i).is(':empty'))  && !($("#box" + (i + 1)).is(':empty')) && ($("#box" + i).attr("value") ===  $("#box" + (i + 1)).attr("value")) ){
				if ($("#box" + (i + 2)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (i + 2) ).append(Computer.selection);
					}, 1000);
					$( "#box" + (i + 2) ).attr("value", Computer.selection);
					return;
				}
			} else if ( !($("#box" + i).is(':empty'))  && !($("#box" + (i + 2)).is(':empty')) && ($("#box" + i).attr("value") ===  $("#box" + (i + 2)).attr("value")) ){
				if ($("#box" + (i + 1)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (i + 1) ).append(Computer.selection);
					}, 1000);
					$( "#box" + (i + 1) ).attr("value", Computer.selection);
					return;
				}
			} else if ( i <= 7 && !($("#box" + (i + 1)).is(':empty'))  && !($("#box" + i + 2).is(':empty')) && ($("#box" + (i + 1)).attr("value") ===  $("#box" + (i + 2)).attr("value")) ){
				if ($("#box" + i).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + i).append(Computer.selection);
					}, 1000);
					$( "#box" + i).attr("value", Computer.selection);
					return;
				}
			}	 
		}

		for (var j = 1; j < 10; j ++){ //Block win in a vertical row 
			if ( !($("#box" + j).is(':empty'))  && !($("#box" + (j + 3)).is(':empty')) && ($("#box" + j).attr("value") ===  $("#box" + (j + 3)).attr("value")) ){
				if ($("#box" + (j + 6)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (j + 6) ).append(Computer.selection);
					}, 1000);
					$( "#box" + (j + 6) ).attr("value", Computer.selection);
					return;
				} 
			} else if ( !($("#box" + j).is(':empty'))  && !($("#box" + (i + 6)).is(':empty')) && ($("#box" + j).attr("value") ===  $("#box" + (j + 6)).attr("value")) ){
				if ($("#box" + (j + 3)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (j + 3) ).append(Computer.selection);
					}, 1000);
					$( "#box" + (j + 3) ).attr("value", Computer.selection);
					return;
				}	
			} else if ( j <= 3 &&  !($("#box" + (j + 3)).is(':empty'))  && !($("#box" + (i + 6)).is(':empty')) && ($("#box" + (j + 3)).attr("value") ===  $("#box" + (j + 6)).attr("value")) ){
				if ($("#box" + j).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + j).append(Computer.selection);
					}, 1000);
					$( "#box" + j).attr("value", Computer.selection);
					return;
				}
			}		 
		}

		if ($('#box1').is(':empty') && Computer.turn === true && $("#box1").attr("value").length < 1 ){
			setTimeout(function() {
			  $( "#box1" ).append(Computer.selection);
			  checkIfWin();
			}, 1000);
			$( "#box1" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box2').is(':empty') && Computer.turn === true && $("#box2").attr("value").length < 1 ){
			setTimeout(function() {
			  $( "#box2" ).append(Computer.selection);
			  checkIfWin();
			}, 1000);
			$( "#box2" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box3').is(':empty') && Computer.turn === true && $("#box3").attr("value").length < 1 ){
			setTimeout(function() {
			  $( "#box3" ).append(Computer.selection);
			  checkIfWin();
			}, 1000);
			$( "#box3" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box4').is(':empty') && Computer.turn === true && $("#box4").attr("value").length < 1 ){
			setTimeout(function() {
			  $( "#box4" ).append(Computer.selection);
			  checkIfWin();
			}, 1000);
			$( "#box4" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box5').is(':empty') && Computer.turn === true && $("#box5").attr("value").length < 1 ){
			setTimeout(function() {
			 	$( "#box5" ).append(Computer.selection);
			 	checkIfWin();
			}, 1000);
			$( "#box5" ).attr("value", Computer.selection);
			Computer.move ++;
		} else if ($('#box6').is(':empty') && Computer.turn === true && $("#box6").attr("value").length < 1 ){
			setTimeout(function() {
			 	$( "#box6" ).append(Computer.selection);
			 	checkIfWin();
			}, 1000);
			$( "#box6" ).attr("value", Computer.selection);;
			Computer.move ++;
		} else if ($('#box7').is(':empty') && Computer.turn === true && $("#box7").attr("value").length < 1 ){
			setTimeout(function() {
			 	$( "#box7" ).append(Computer.selection);
			 	checkIfWin();
			}, 1000);
			$( "#box7" ).attr("value", Computer.selection);;
			Computer.move ++;
		} else if ($('#box8').is(':empty') && Computer.turn === true && $("#box8").attr("value").length < 1 ){
			setTimeout(function() {
			 	$( "#box8" ).append(Computer.selection);
			 	checkIfWin();
			}, 1000);
			$( "#box8" ).attr("value", Computer.selection);;
			Computer.move ++;
		} else if ($('#box9').is(':empty') && Computer.turn === true && $("#box9").attr("value").length < 1 ){
			setTimeout(function() {
			 	$( "#box9" ).append(Computer.selection);
			 	checkIfWin();
			}, 1000);
			$( "#box9" ).attr("value", Computer.selection);;
			Computer.move ++;
		}
		User.turn = true;
		Computer.turn = false;	 
	}
};