if(User.turn && User.move >= 1){
	$('#box1').click(function(){
		if ($('#box1').is(':empty')){
			$( "#box1" ).append(User.selection);
			$( "#box1" ).attr("value", User.selection);
			checkIfWin();
		}
		$( "#box1" ).off('click');
	});

	$('#box2').click(function(){
		if ($('#box2').is(':empty')){
			$( "#box2" ).append( User.selection);
			$( "#box2" ).attr("value", User.selection);
		}
		$( "#box2" ).off('click');
	});

	$('#box3').click(function(){
		if ($('#box3').is(':empty')){
			$( "#box3" ).append( User.selection);
			$( "#box3" ).attr("value", User.selection);
		}
		$( "#box3" ).off('click');
	});

	$('#box4').click(function(){
		if ($('#box4').is(':empty')){
			$( "#box4" ).append( User.selection);
			$( "#box4" ).attr("value", User.selection);
		}
		$( "#box4" ).off('click');
	});

	$('#box5').click(function(){
		if ($('#box5').is(':empty')){
			$( "#box5" ).append( User.selection);
			$( "#box5" ).attr("value", User.selection);
		}
		$( "#box5" ).off('click');
	});

	$('#box6').click(function(){
		if ($('#box6').is(':empty')){
			$( "#box6" ).append( User.selection);
			$( "#box6" ).attr("value", User.selection);
		}
		$( "#box6" ).off('click');
	});

	$('#box7').click(function(){
		if ($('#box7').is(':empty')){
			$( "#box7" ).append( User.selection);
			$( "#box7" ).attr("value", User.selection);
		}
		$( "#box7" ).off('click');
	});

	$('#box8').click(function(){
		if ($('#box8').is(':empty')){
			$( "#box8" ).append( User.selection);
			$( "#box8" ).attr("value", User.selection);
		}
		$( "#box8" ).off('click');
	});

	$('#box9').click(function(){
		if ($('#box9').is(':empty')){
			$( "#box9" ).append( User.selection);
			$( "#box9" ).attr("value", User.selection);
		}
		$( "#box9" ).off('click');
	});
	User.turn = false;
	Computer.turn = true;
	console.log('Click');
	//win game if 3 in a horizontal row are the same
}
