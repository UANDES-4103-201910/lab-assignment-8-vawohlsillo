// Note: $(() => {}); is equivalent to $(document).ready(function(){})



$(document).ready(function(){
	
	class KeyboardController{
	constructor(kcontainer,kTargetElement){
		this.kcontainer = kcontainer
		this.kTargetElement = kTargetElement
	}
	HideShow(){
		$(this.kcontainer).toggle();		
	}	
	KeyClick(){
		//var value1 = $('#textbox').val()
		//value1 += $(this.kTargetElement)
		$('#textbox').val($('#textbox').val()+this.kTargetElement);
	}
	BkspTabClick(){
		if ($(this.kTargetElement) == "Bksp") {
			$("#textbox").val.slice(0,-1);
		} else {
			var value2 = $("#textbox").val()
			value2 += "      "
			$("#textbox").val(value2);	
		}
	}
	ShiftEnterCancelClick(){
		if ($(this.kTargetElement) == "Shift") {
			$('#textbox').val($('#textbox').val() + $(this.kTargetElement).text().toUpperCase());
		} else if ($(this.kTargetElement)  == "Enter") {
			$("#textbox").val($("#textbox").val() + "\n");
		} else {
			$("#textbox").val("");
		}
	}
	SpaceClick(){
		$("#textbox").val($("#textbox").val() + " ");
	}
	okClick() {
		$("");
		alert("Cool");
	}
	
    }


	var kbc = new KeyboardController($("#kcontainer") , $(".key").click(function(){
		return $(this).text();
	}));
	$("#hideShowButton").click(function(){
		kbc.HideShow();
	});
	$(".key").click(function(){
		console.log($(this).text());
		kbc.KeyClick();
		//return $('#textbox').val($('#textbox').val()+$(this).text());
	});
	$(".key key-wide").click(function(){
		kbc.BkspClick();
	});
	$(".key key-special key-wide").click(function(){
		kbc.ShiftEnterCancelClick();
	});
	$(".key key-special").click(function(){
		kbc.okClick();
	});
	
});

