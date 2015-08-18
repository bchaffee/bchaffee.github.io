// Step 1)
// Take your previous lab solution and copy and paste it here (the Javascript only)
// Get that working. I've removed the example song so make sure your code hasn't broken because of it.
// If you didn't finish the lab, finish it up for Step 1

// // Step 1:
// // Get the first artistName, track, etc into different variables. Use code to retrieve it.

// // Step 2:
// // Use your knowledge of jQuery to modify the first div with class 'song' on the page with the information above
        // <div class="song">
        //   <img src=""></img>
        //   <div class="title"></div>
        //   <div class="artist_name"></div>
        //   <div class="track_price"></div>
        //   <a href="">Listen Here</a>
        // </div>

 
// Step 2)
// Delete the variable musicPlaylist
// now instead make an AJAX request to this url: "https://itunes.apple.com/search?term=abba"
// use the response JSON from that request to populate the page.
$('button').click(function() {
	var input = $('input').val();
	var url = "https://itunes.apple.com/search?term=";
	var combo = url + input;
	$.getJSON(combo, function(responseJSON) {
		var musicPlaylist = responseJSON['results']
		for (var index = 0; index < musicPlaylist.length; index++) {
			if (index === $('.song').length) {
				$('.wrapper').append("<div class='song'>")
				$(".song").eq(index).append("<img src=>")
				$(".song").eq(index).append("<div class='title'>")
				$(".song").eq(index).append("<div class='artist_name'>")
				$(".song").eq(index).append("<div class='track_price'>")
				$(".song").eq(index).append("<a href=>Listen Here")
			}
		  	var artistName = musicPlaylist[index]['artistName'];
		  	var trackName = musicPlaylist[index]['trackName'];
		  	var artworkUrl100 = musicPlaylist[index]['artworkUrl100'];
		  	var previewUrl = musicPlaylist[index]['previewUrl'];
		  	var trackPrice = musicPlaylist[index]['trackPrice'];
		  	$('.artist_name').eq(index).html(artistName);
		  	$('.title').eq(index).html(trackName);
		  	$('.track_price').eq(index).html(trackPrice);
		  	$('a').eq(index).attr("href", previewUrl);
		  	$('img').eq(index).attr('src', artworkUrl100);  
		}
	});
});


// Step 3)
// Now the hard part. Instead of doing a request to https://itunes.apple.com/search?term=abba
// I want you to generate the URL for the AJAX request based on the text
// inside the input element on the page.
// So if I type Journey into that input and hit submit.
// it should create the url
// https://itunes.apple.com/search?term=journey
// and do an AJAX request to that URL

// Step 4)
// We get back more songs from the API than we have!
// Use our knowledge of creating HTML in Javascript to
// show all the songs properly. The first 3 songs you can skip
// so start your loop at index = 2 instead of 0.