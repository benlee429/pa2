
$(document).ready(function() {
	var input = "";
	$('#search').change(function(){
		input = this.val();
		$.ajax({
			url: "",
			type: "GET",
			dataType: "json",
			data: {search: input}
		})
			.done(display(results));
	});
	
	//will be in json
	//id: "results"
	function display(results){
		
	}
});
