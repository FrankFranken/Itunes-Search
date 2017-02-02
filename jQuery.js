$(function() {
    $("#searchButton").on("click", function() {
    var searchTerm = $("#searchField").val();
		var url = "http://itunes.apple.com/search?limit=10&term=" + searchTerm;
		$.ajax({
		url: url,
		type: 'GET',
		contentType: "jsonp",
		async: false,
    dataType: "jsonp",
    success: function(data) {
      console.log(data);
        }
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
      data(data);
		});
    });
});
function data(data){
  for (var i = 0; i < data.resultsCount; i++) {

  }

}
