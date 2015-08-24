
//non knockout
/*
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.9500, lng: -75.1667},
    zoom: 15
  });
*
for (var i =0; i< philaFav.length; i++) {
 var marker = new google.maps.Marker({
    position: philaFav[i],
    map: map,
    title: 'Philadelphia Favorites!'
  });};
//};

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

*/
    // load wikipedia
//    https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=:+%091200+W.+International+Speedway+Blvd.+Daytona+Beach,+FL+32114+United+States+of+America&aq=&sll=26.08086,-80.234425&sspn=0.009868,0.021136&ie=UTF8&hq=&hnear=1200+W+International+Speedway+Blvd,+Daytona+Beach,+Florida+32114&t=m&ll=29.201397,-81.047001&spn=0.022477,0.025749&z=14&iwloc=A&output=embed
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


/*
function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
*/
