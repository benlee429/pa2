$(document).ready(function() {
	var input = "";
	$('#search').keypress(function(){
		input = $('#search').val();
		$.ajax({
			url: "search2.aspx/GetQuery", 
			contentType: "application/json; charset=utf-8",
			type: "POST",
			dataType: "html",
			data: JSON.stringify({searchTerm: input}),
			error: ajaxFailure,
			success: function(data){
				alert("success: " + data);//
				$('#results').append(data);
			}
		}) 
	});
});

function ajaxFailure(){
	alert("ajax failure");
}