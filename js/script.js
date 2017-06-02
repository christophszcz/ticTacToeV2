$(document).ready(function(){
	$('#myModal').modal('show');

	$('#box1').click(function(){
		if ($('#box1').is(':empty') && User.turn === true){
			$( "#box1" ).append(User.selection);
			$( "#box1" ).attr("value", User.selection);
			computersTurn();
		}
		$( "#box1" ).off('click');
	});

	$('#box2').click(function(){
		if ($('#box2').is(':empty') && User.turn === true){
			$( "#box2" ).append( User.selection);
			$( "#box2" ).attr("value", User.selection);
			computersTurn();
		}
		$( "#box2" ).off('click');
	});

	$('#box3').click(function(){
		if ($('#box3').is(':empty') && User.turn === true){
			$( "#box3" ).append( User.selection);
			$( "#box3" ).attr("value", User.selection);
			computersTurn();
		}
		$( "#box3" ).off('click');
	});

	$('#box4').click(function(){
		if ($('#box4').is(':empty') && User.turn === true){
			$( "#box4" ).append( User.selection);
			$( "#box4" ).attr("value", User.selection);
			computersTurn();
		}
		$( "#box4" ).off('click');
	});

	$('#box5').click(function(){
		if ($('#box5').is(':empty') && User.turn === true){
			$( "#box5" ).append( User.selection);
			$( "#box5" ).attr("value", User.selection);
			computersTurn();
		}
		$( "#box5" ).off('click');
	});

	$('#box6').click(function(){
		if ($('#box6').is(':empty') && User.turn === true){
			$( "#box6" ).append( User.selection);
			$( "#box6" ).attr("value", User.selection);
			computersTurn();
		}
		$( "#box6" ).off('click');
	});

	$('#box7').click(function(){
		if ($('#box7').is(':empty') && User.turn === true){
			$( "#box7" ).append( User.selection);
			$( "#box7" ).attr("value", User.selection);
			computersTurn();
		}
		$( "#box7" ).off('click');
	});

	$('#box8').click(function(){
		if ($('#box8').is(':empty') && User.turn === true){
			$( "#box8" ).append( User.selection);
			$( "#box8" ).attr("value", User.selection);
			computersTurn();
		}
		$( "#box8" ).off('click');
	});

	$('#box9').click(function(){
		if ($('#box9').is(':empty') && User.turn === true){
			$( "#box9" ).append( User.selection);
			$( "#box9" ).attr("value", User.selection);
			computersTurn();
		}
		$( "#box9" ).off('click');
	});
});

var User = {
	'selection' : 'X',
	'turn' : true,
	'move': 0
};

var Computer = {
	'selection' : 'O',
	'turn' : false,
	'move': 0
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

//Computer's turn

function computersTurn(){
	User.turn = false;
	Computer.turn = true;
	User.move ++;
	computerMove();
}