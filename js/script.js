$(document).ready(function(){
	$('#myModal').modal('show');
});

var User = {
	'selection' : 'X'
};

$('#x-button').click(function(){
	User.selection = 'X';
	$('#myModal').modal('toggle');
});

$('#o-button').click(function(){
	User.selection = 'O';
	$('#myModal').modal('toggle');
});

$('#box1').click(function(){
	$( "#box1" ).append( User.selection);
});

$('#box2').click(function(){
	$( "#box2" ).append( User.selection);
});

$('#box3').click(function(){
	$( "#box3" ).append( User.selection);
});

$('#box4').click(function(){
	$( "#box4" ).append( User.selection);
});

$('#box5').click(function(){
	$( "#box5" ).append( User.selection);
});

$('#box6').click(function(){
	$( "#box6" ).append( User.selection);
});

$('#box7').click(function(){
	$( "#box7" ).append( User.selection);
});

$('#box8').click(function(){
	$( "#box8" ).append( User.selection);
});

$('#box9').click(function(){
	$( "#box9" ).append( User.selection);
});