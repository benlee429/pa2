$(document).ready(function() {
	var input = "";
	$('#search').keypress(function(){
		input = $('#search').val();
		$.ajax({
			url: "search2.aspx/GetQuery", 
			contentType: "application/json; charset=utf-8",
			type: "POST",
			dataType: "text",
			data: JSON.stringify({searchTerm: input}),
			error: ajaxFailure,
			success: function(data){
				alert(data);
				var newTerm = $( document.createElement('div') );
				newTerm.text(data);
				$('#results').append(newTerm);
			}
		}) 
	});
});

function ajaxFailure(){
	alert("ajax failure");
}