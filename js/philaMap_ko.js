var myLocation = "";

var philaFav = [
	{ "myLocation":"National Constitution Center",
		name:'National Constitution Center',
		lat:39.953904,
		lng:-75.149066,
	},
	{ "myLocation":"Philadelphia Museum of Art",
		name:'Philadelphia Museum of Art',
		lat: 39.965590,
		lng: -75.180998,
	},
	{ "myLocation":"Independence Hall",
		name:'Independence Hall',
		lat: 39.94880,
		lng: -75.150068,
	},
	{ "myLocation":"Franklin Square",
		name:'Franklin Square',
		lat: 39.9555,
		lng: -75.1508,
	},
	{ "myLocation":"Liberty Bell",
		name:'Liberty Bell',
		lat: 39.949702,
		lng: -75.150219,
	},
	{ "myLocation":"Reading Terminal Market",
		name:'Reading Terminal Market',
		lat: 39.952614,
		lng: -75.159444,
	},
	{  "myLocation":"Chinatown",
		name:'Chinatown',
		lat: 39.954568,
		lng: -75.156084,
	},


]


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.9520, lng: -75.1566},
    zoom: 15
  });
for (var i =0; i< philaFav.length; i++) {
 var marker = new google.maps.Marker({
    position: philaFav[i],
    map: map,
    title: philaFav[i].name
  });
};

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

};
};
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.9520, lng: -75.1566},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
var viewModel = function() {
  var self = this;
  self.points = ko.observableArray(philaFav);

  self.query = ko.observable('');
  self.search = ko.computed(function(){
    return ko.utils.arrayFilter(self.points(),
  function(point){
      return point.myLocation.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
    });
    });
  };


ko.applyBindings(new viewModel());






