function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(39.9500, -75.1667),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);

var map;
var infowindow;
function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });

    // load wikipedia

    var wikiUrl = 'http://en.wikipedia.org//w/api.php?action=opensearch&search='+place.name+'&format=json&callback=wikiCallback';
    var wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("failed to get wikipedia resources");
    }, 8000);


$.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    //jsonp: "callback"
    // Work with the response
    success: function( response ) {
      //  console.log( response );     // server response
        var articleList = response[1];
        for (var i =0; i<articleList.length; i++){
            articleStr = articleList[i];
            var url = 'http://en.wikipedia.org/wiki/'+ articleStr;
            $wikiElem.append('<li><a href="' + url+'">'+ articleStr +'</a></li>');
                    };
    clearTimeout(wikiRequestTimeout);
    }});

}