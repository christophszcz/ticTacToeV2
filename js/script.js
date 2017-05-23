$(document).ready(function(){
	$('#myModal').modal('show');
});

var User = {
	'selection' : 'X'
};

var Computer = {
	'selection' : 'O'
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

$('#box1').click(function(){
	if ($('#box1').is(':empty')){
		$( "#box1" ).append(User.selection);
	}
});
 
$('#box2').click(function(){
	if ($('#box2').is(':empty')){
		$( "#box2" ).append( User.selection);
	}
});

$('#box3').click(function(){
	if ($('#box3').is(':empty')){
		$( "#box3" ).append( User.selection);
	}
});

$('#box4').click(function(){
	if ($('#box4').is(':empty')){
		$( "#box4" ).append( User.selection);
	}
});

$('#box5').click(function(){
	if ($('#box5').is(':empty')){
		$( "#box5" ).append( User.selection);
	}
});

$('#box6').click(function(){
	if ($('#box6').is(':empty')){
		$( "#box6" ).append( User.selection);
	}
});

$('#box7').click(function(){
	if ($('#box7').is(':empty')){
		$( "#box7" ).append( User.selection);
	}
});

$('#box8').click(function(){
	if ($('#box8').is(':empty')){
		$( "#box8" ).append( User.selection);
	}
});

$('#box9').click(function(){
	if ($('#box9').is(':empty')){
		$( "#box9" ).append( User.selection);
	}
});

//Simple A.I.
