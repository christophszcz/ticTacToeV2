$(document).ready(function(){
	$('#myModal').modal('show');
});

var User = {
	'selection' : 'X',
	'turn' : true
};

var Computer = {
	'selection' : 'O',
	'turn' : false
};

// Choosing a box

$('#x-button').click(function(){
	User.selection = 'X';
	Computer.selection = 'O';
	$('#myModal').modal('toggle');
});

$('#o-button').click(function(){
	User.selection = 'O';
	Computer.selection = 'X';
	$('#myModal').modal('toggle');
});

if(User.turn){
	$('#box1').click(function(){
		if ($('#box1').is(':empty')){
			$( "#box1" ).append(User.selection);
			$( "#box1" ).attr("value", User.selection);
		}
	});

	$('#box2').click(function(){
		if ($('#box2').is(':empty')){
			$( "#box2" ).append( User.selection);
			$( "#box2" ).attr("value", User.selection);
		}
	});

	$('#box3').click(function(){
		if ($('#box3').is(':empty')){
			$( "#box3" ).append( User.selection);
			$( "#box3" ).attr("value", User.selection);
		}
	});

	$('#box4').click(function(){
		if ($('#box4').is(':empty')){
			$( "#box4" ).append( User.selection);
			$( "#box4" ).attr("value", User.selection);
		}
	});

	$('#box5').click(function(){
		if ($('#box5').is(':empty')){
			$( "#box5" ).append( User.selection);
			$( "#box5" ).attr("value", User.selection);
		}
	});

	$('#box6').click(function(){
		if ($('#box6').is(':empty')){
			$( "#box6" ).append( User.selection);
			$( "#box6" ).attr("value", User.selection);
		}
	});

	$('#box7').click(function(){
		if ($('#box7').is(':empty')){
			$( "#box7" ).append( User.selection);
			$( "#box7" ).attr("value", User.selection);
		}
	});

	$('#box8').click(function(){
		if ($('#box8').is(':empty')){
			$( "#box8" ).append( User.selection);
			$( "#box8" ).attr("value", User.selection);
		}
	});

	$('#box9').click(function(){
		if ($('#box9').is(':empty')){
			$( "#box9" ).append( User.selection);
			$( "#box9" ).attr("value", User.selection);
		}
	});

	User.turn = false;
	Computer.turn = true;
}
 
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
			}, 1000);
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