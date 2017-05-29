//A.I. Algorithm

if(Computer.turn){
	$(".box").click(function(){
		for (var i = 1; i < 10; i ++){ //Two in a row
			if ( !($("#box" + i).is(':empty'))  && !($("#box" + i + 1).is(':empty')) && ($("#box" + i).attr("value") ===  $("#box" + (i + 1)).attr("value")) ){
				if ($("#box" + (i + 2)).is(':empty')){
					setTimeout(function() {
				  	$( "#box" + (i + 2) ).append(Computer.selection);
					}, 1000);
					return;
				}
			}		 
		}

		if ($('#box2').is(':empty')){
			setTimeout(function() {
			  $( "#box2" ).append(Computer.selection);
			  $( "#box2" ).attr("value", Computer.selection);
			}, 10000);
		} else if ($('#box3').is(':empty')){
			setTimeout(function() {
			  $( "#box3" ).append(Computer.selection);
			  $( "#box3" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box4').is(':empty')){
			setTimeout(function() {
			  $( "#box4" ).append(Computer.selection);
			  $( "#box4" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box5').is(':empty')){
			setTimeout(function() {
			 	$( "#box5" ).append(Computer.selection);
			 	$( "#box5" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box6').is(':empty')){
			setTimeout(function() {
			 	$( "#box6" ).append(Computer.selection);
			 	$( "#box6" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box7').is(':empty')){
			setTimeout(function() {
			 	$( "#box7" ).append(Computer.selection);
			 	$( "#box7" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box8').is(':empty')){
			setTimeout(function() {
			 	$( "#box8" ).append(Computer.selection);
			 	$( "#box8" ).attr("value", Computer.selection);
			}, 1000);
		} else if ($('#box9').is(':empty')){
			setTimeout(function() {
			 	$( "#box9" ).append(Computer.selection);
			 	$( "#box9" ).attr("value", Computer.selection);
			}, 1000);
		}

		User.turn = true;
		Computer.turn = false;	 
	});
}