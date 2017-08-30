//A.I. Algorithm

function computerMove(){
	if(Computer.turn && winOrTie === false){
		changeInput();

		for (var a = 1; a < 10; a += 3){ //Horizontal row computer win 
			if (!($("#box" + a).is(':empty'))  && !($("#box" + (a + 1)).is(':empty')) && ($("#box" + a).attr("value") ===  $("#box" + (a + 1)).attr("value")) && (Computer.selection === $("#box" + a).attr("value")) ){
				if ($("#box" + (a + 2)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (a + 2) ).append(Computer.selection);
				  	console.log('Win in a horizontal row -spot3 ');	
					}, 1000);
					$( "#box" + (a + 2) ).attr("value", Computer.selection);
					checkIfWin();
					return;
				}
			} else if (!($("#box" + a).is(':empty'))  && !($("#box" + (a + 2)).is(':empty')) && ($("#box" + a).attr("value") ===  $("#box" + (a + 2)).attr("value")) && (Computer.selection === $("#box" + a).attr("value")) ){
				if ($("#box" + (a + 1)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (a + 1) ).append(Computer.selection);
				  	console.log('Win in a horizontal row -spot2 ');
					}, 1000);
					$( "#box" + (a + 1) ).attr("value", Computer.selection);
					checkIfWin();
					return;
				}
			} else if (!($("#box" + (a + 1)).is(':empty'))  && !($("#box" + a + 2).is(':empty')) && ($("#box" + (a + 1)).attr("value") ===  $("#box" + (a + 2)).attr("value")) && (Computer.selection === $("#box" + (a + 1)).attr("value")) ){
				if ($("#box" + a).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + a).append(Computer.selection);
				  	console.log('Win in a horizontal row -spot1 ');
					}, 1000);
					$( "#box" + a).attr("value", Computer.selection);
					checkIfWin();
					return;
				}
			} 
		}

		for (var b = 1; b < 10; b ++){ //Vertical row computer win 
			if ( !($("#box" + b).is(':empty'))  && !($("#box" + (b + 3)).is(':empty')) && ($("#box" + b).attr("value") ===  $("#box" + (b + 3)).attr("value")) && (Computer.selection === $("#box" + b).attr("value"))  ){
				if ($("#box" + (b + 6)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (b + 6) ).append(Computer.selection);
				  	console.log('Win in a vertical row- spot 3 ');
					}, 1000);
					$( "#box" + (b + 6) ).attr("value", Computer.selection);
					checkIfWin();
					return;
				} 
			} else if ( !($("#box" + b).is(':empty'))  && !($("#box" + (b + 6)).is(':empty')) && ($("#box" + b).attr("value") ===  $("#box" + (b + 6)).attr("value")) && (Computer.selection === $("#box" + b).attr("value")) ){
				if ($("#box" + (b + 3)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (b + 3) ).append(Computer.selection);
				  	console.log('Win in a vertical row- spot middle');
					}, 1000);
					$( "#box" + (b + 3) ).attr("value", Computer.selection);
					checkIfWin();
					return;
				}	
			} else if ( b <= 3 &&  !($("#box" + (b + 3)).is(':empty'))  && !($("#box" + (b + 6)).is(':empty')) && ($("#box" + (b + 3)).attr("value") ===  $("#box" + (b + 6)).attr("value")) && (Computer.selection === $("#box" + (b + 3)).attr("value")) ){
				if ($("#box" + b).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + b).append(Computer.selection);
				  	console.log('Win in a vertical row- spot 1');
					}, 1000);
					$( "#box" + b).attr("value", Computer.selection);
					checkIfWin();
					return;
				}
			}		 
		}

		// Forward diagonal win for computer  
		if ( !($("#box3").is(':empty'))  && !($("#box5").is(':empty')) && ($("#box3").attr("value") ===  $("#box5").attr("value")) && $("#box7").is(':empty') && Computer.selection === $("#box3").attr("value")){
			setTimeout(function() {
		  	$( "#box7").append(Computer.selection);
		  	console.log('Block win in a forwarddiagonal-last on the last entry');	
			}, 1000);
			$( "#box7").attr("value", Computer.selection);
			checkIfWin();
			return;
		} else if ( !($("#box3").is(':empty'))  && !($("#box7").is(':empty')) && ($("#box3").attr("value") ===  $("#box7").attr("value")) && $("#box5").is(':empty') && Computer.selection === $("#box3").attr("value") ){
			setTimeout(function() {
		  	$( "#box5").append(Computer.selection);
		  	console.log('Block win in a forward diagonal on the middle entry');	
			}, 1000);
			$( "#box5").attr("value", Computer.selection);
			checkIfWin();
			return; 
		} else if ( !($("#box5").is(':empty'))  && !($("#box7").is(':empty')) && ($("#box5").attr("value") ===  $("#box7").attr("value")) && $("#box3").is(':empty') && Computer.selection === $("#box5").attr("value") ){
			setTimeout(function() {
		  	$( "#box3").append(Computer.selection);
		  	console.log('Block win in a forward diagonal on the first entry');	
			}, 1000);
			$( "#box3").attr("value", Computer.selection);
			checkIfWin();
			return;
		}

		// Backward diagonal win for computer  
		if ( !($("#box1").is(':empty'))  && !($("#box5").is(':empty')) && ($("#box1").attr("value") ===  $("#box5").attr("value")) && $("#box9").is(':empty') && Computer.selection === $("#box1").attr("value") ){
			setTimeout(function() {
		  	$( "#box9").append(Computer.selection);
		  	console.log('Block win in a backward diagonal-last on the last entry');	
			}, 1000);
			$( "#box9").attr("value", Computer.selection);
			checkIfWin();
			return;
		} else if ( !($("#box1").is(':empty'))  && !($("#box9").is(':empty')) && ($("#box1").attr("value") ===  $("#box9").attr("value")) && $("#box5").is(':empty') && Computer.selection === $("#box1").attr("value") ){
			setTimeout(function() {
		  	$( "#box5").append(Computer.selection);
		  	console.log('Block win in a backward diagonal on the middle entry');	
			}, 1000);
			$( "#box5").attr("value", Computer.selection);
			checkIfWin();
			return; 
		} else if ( !($("#box5").is(':empty'))  && !($("#box9").is(':empty')) && ($("#box5").attr("value") ===  $("#box9").attr("value")) && $("#box1").is(':empty') && Computer.selection === $("#box5").attr("value") ){
			setTimeout(function() {
		  	$( "#box1").append(Computer.selection);
		  	console.log('Block win in a backward diagonal on the first entry');	
			}, 1000);
			$( "#box1").attr("value", Computer.selection);
			checkIfWin();
			return;
		}

		for (var i = 1; i < 10; i += 3){ //Block or create a win in a horizontal row 
			if (!($("#box" + i).is(':empty'))  && !($("#box" + (i + 1)).is(':empty')) && ($("#box" + i).attr("value") ===  $("#box" + (i + 1)).attr("value")) ){
				if ($("#box" + (i + 2)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (i + 2) ).append(Computer.selection);
				  	console.log('Block win in a horizontal row -spot3 ');	
					}, 1000);
					$( "#box" + (i + 2) ).attr("value", Computer.selection);
					checkIfWin();
					return;
				}
			} else if (!($("#box" + i).is(':empty'))  && !($("#box" + (i + 2)).is(':empty')) && ($("#box" + i).attr("value") ===  $("#box" + (i + 2)).attr("value")) ){
				if ($("#box" + (i + 1)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (i + 1) ).append(Computer.selection);
				  	console.log('Block win in a horizontal row -spot2 ');
					}, 1000);
					$( "#box" + (i + 1) ).attr("value", Computer.selection);
					checkIfWin();
					return;
				}
			} else if (!($("#box" + (i + 1)).is(':empty'))  && !($("#box" + i + 2).is(':empty')) && ($("#box" + (i + 1)).attr("value") ===  $("#box" + (i + 2)).attr("value")) ){
				if ($("#box" + i).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + i).append(Computer.selection);
				  	console.log('Block win in a horizontal row -spot1 ');
					}, 1000);
					$( "#box" + i).attr("value", Computer.selection);
					checkIfWin();
					return;
				}
			} 
		}

		for (var j = 1; j < 10; j ++){ //Block or create a win in a vertical row 
			if ( !($("#box" + j).is(':empty'))  && !($("#box" + (j + 3)).is(':empty')) && ($("#box" + j).attr("value") ===  $("#box" + (j + 3)).attr("value")) ){
				if ($("#box" + (j + 6)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (j + 6) ).append(Computer.selection);
				  	console.log('Block win in a vertical row- spot 3 ');
					}, 1000);
					$( "#box" + (j + 6) ).attr("value", Computer.selection);
					checkIfWin();
					return;
				} 
			} else if ( !($("#box" + j).is(':empty'))  && !($("#box" + (j + 6)).is(':empty')) && ($("#box" + j).attr("value") ===  $("#box" + (j + 6)).attr("value")) ){
				if ($("#box" + (j + 3)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (j + 3) ).append(Computer.selection);
				  	console.log('Block win in a vertical row- spot middle');
					}, 1000);
					$( "#box" + (j + 3) ).attr("value", Computer.selection);
					checkIfWin();
					return;
				}	
			} else if ( j <= 3 &&  !($("#box" + (j + 3)).is(':empty'))  && !($("#box" + (j + 6)).is(':empty')) && ($("#box" + (j + 3)).attr("value") ===  $("#box" + (j + 6)).attr("value")) ){
				if ($("#box" + j).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + j).append(Computer.selection);
				  	console.log('Block win in a vertical row- spot 1');
					}, 1000);
					$( "#box" + j).attr("value", Computer.selection);
					checkIfWin();
					return;
				}
			}		 
		}

 		//Block or create a win in a forward diagonal  
		if ( !($("#box3").is(':empty'))  && !($("#box5").is(':empty')) && ($("#box3").attr("value") ===  $("#box5").attr("value")) && $("#box7").is(':empty') ){
			setTimeout(function() {
		  	$( "#box7").append(Computer.selection);
		  	console.log('Block win in a forwarddiagonal-last on the last entry');	
			}, 1000);
			$( "#box7").attr("value", Computer.selection);
			checkIfWin();
			return;
		} else if ( !($("#box3").is(':empty'))  && !($("#box7").is(':empty')) && ($("#box3").attr("value") ===  $("#box7").attr("value")) && $("#box5").is(':empty') ){
			setTimeout(function() {
		  	$( "#box5").append(Computer.selection);
		  	console.log('Block win in a forward diagonal on the middle entry');	
			}, 1000);
			$( "#box5").attr("value", Computer.selection);
			checkIfWin();
			return; 
		} else if ( !($("#box5").is(':empty'))  && !($("#box7").is(':empty')) && ($("#box5").attr("value") ===  $("#box7").attr("value")) && $("#box3").is(':empty') ){
			setTimeout(function() {
		  	$( "#box3").append(Computer.selection);
		  	console.log('Block win in a forward diagonal on the first entry');	
			}, 1000);
			$( "#box3").attr("value", Computer.selection);
			checkIfWin();
			return;
		}

		//Block or create a win in a backward diagonal  
		if ( !($("#box1").is(':empty'))  && !($("#box5").is(':empty')) && ($("#box1").attr("value") ===  $("#box5").attr("value")) && $("#box9").is(':empty') ){
			setTimeout(function() {
		  	$( "#box9").append(Computer.selection);
		  	console.log('Block win in a backward diagonal-last on the last entry');	
			}, 1000);
			$( "#box9").attr("value", Computer.selection);
			checkIfWin();
			return;
		} else if ( !($("#box1").is(':empty'))  && !($("#box9").is(':empty')) && ($("#box1").attr("value") ===  $("#box9").attr("value")) && $("#box5").is(':empty') ){
			setTimeout(function() {
		  	$( "#box5").append(Computer.selection);
		  	console.log('Block win in a backward diagonal on the middle entry');	
			}, 1000);
			$( "#box5").attr("value", Computer.selection);
			checkIfWin();
			return; 
		} else if ( !($("#box5").is(':empty'))  && !($("#box9").is(':empty')) && ($("#box5").attr("value") ===  $("#box9").attr("value")) && $("#box1").is(':empty') ){
			setTimeout(function() {
		  	$( "#box1").append(Computer.selection);
		  	console.log('Block win in a backward diagonal on the first entry');	
			}, 1000);
			$( "#box1").attr("value", Computer.selection);
			checkIfWin();
			return;
		}

		if ($('#box' + randomNumber).is(':empty') && Computer.turn === true && $("#box" + randomNumber).attr("value").length < 1 ){
			setTimeout(function() {
			  $( "#box" + randomNumber ).append(Computer.selection);
			  checkIfWin();
			  console.log('Box' + randomNumber);
			}, 1000);
			$( "#box" + randomNumber ).attr("value", Computer.selection);
			checkIfWin(); 
		} else if ($('#box3').is(':empty') && Computer.turn === true && $("#box3").attr("value").length < 1 ){
			setTimeout(function() {
			  $( "#box3" ).append(Computer.selection);
			  checkIfWin();
			  console.log('Box3');
			}, 1000);
			$( "#box3" ).attr("value", Computer.selection);
			checkIfWin();	 
		} else if ($('#box7').is(':empty') && Computer.turn === true && $("#box7").attr("value").length < 1 ){
			setTimeout(function() {
			 	$( "#box7" ).append(Computer.selection);
			 	checkIfWin();
			 	console.log('Box7');
			}, 1000);
			$( "#box7" ).attr("value", Computer.selection); 
			checkIfWin(); 
		} else if ($('#box' + otherNumber).is(':empty') && Computer.turn === true && $("#box" + otherNumber).attr("value").length < 1 ){
			setTimeout(function() {
			 	$( "#box" + otherNumber ).append(Computer.selection);
			 	checkIfWin();
			 	console.log('Box' + otherNumber);
			}, 1000);
			$( "#box" + otherNumber).attr("value", Computer.selection);
			checkIfWin();	
		} 
	}
};

function changeInput(){
	setTimeout(function() {
		User.turn = true;
		Computer.turn = false;
		turn();	 
	}, 1000);
}
		 