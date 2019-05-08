// Note: $(() => {}); is equivalent to $(document).ready(function(){})





	
$(document).ready(function(){
	$("#hideShowButton").click(function(){
		$("#kcontainer").toggle();
	});
	$(".key").click(function(){
		console.log($(this).text());
		//return $('#textbox').val($('#textbox').val()+$(this).text());
	});


});
