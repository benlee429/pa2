$(document).ready(function() {
	var input = "";
	$('#search').keypress(function(){
		input = $('#search').val();
		$.ajax({
			url: "WebService1.asmx/GetQuery", 
			contentType: "application/json; charset=utf-8",
			type: "POST",
			dataType: "text",
			data: JSON.stringify({searchTerm: input}),
			error: ajaxFailure,
			success: function(data){
				alert(data);
				var newTerm = $('<li class="suggesti">').text('Test message here');
				$('#results').append(newTerm);
			}
		}) 
	});
});

function ajaxFailure(){
	alert("ajax failure");
}