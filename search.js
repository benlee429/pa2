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
				alert("success: " + data);//$('#results').append(results);
			}
		}) 
	});
});

//this displayed a html element after the ajaxfailure
function display(results){
	alert(results);
	$('#results').append(results);
}

function ajaxFailure(){
	alert("ajax failure");
}