$(function() {
    $("#searchButton").on("click", function() {
    var searchTerm = $("#searchField").val();
		var url = "http://itunes.apple.com/search?limit=3&term=" + searchTerm;
		$.ajax({
		url: url,
		type: 'GET',
		contentType: "jsonp",
		async: false,
    dataType: "jsonp",
    success: function(data) {
      console.log(status);
      showData(data);
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
		});
    });
});
function showData(data){
  $('#showResults').empty()
  for (var i = 0; i < data.results.length; i++) {
  $('#showResults').append(
  "<ul>"+ "<img src=" + data.results[i].artworkUrl100 + "> "+ "</ul>"+
  "<ul>"+ "Artist Name:" + " " + data.results[i].artistName+ " " +  "</ul>"+
  "<ul>"+ "Track Name:" + " " + data.results[i].trackName+ " " +  "</ul>"+
  "<ul>"+ "Album:" + " " + data.results[i].collectionName+ " " + "</ul>"+
  "<audio Controls><source src='" + data.results[i].previewUrl + "'type=" +"audio/mp4>" + "</audio>" +
  "<br></br" +"<br></br" +"<br></br" + "<br></br" +"<br></br" +"<br></br" + "</ul>");
  }
}
