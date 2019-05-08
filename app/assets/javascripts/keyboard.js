// Note: $(() => {}); is equivalent to $(document).ready(function(){})


function hello(){
console.log()
}


	
$(document).ready(function(){
	$("#hideShowButton").click(function(){
		$("#kcontainer").toggle();
		
	});
});
