var myLocation = "";
var quickFacts = "";

var philaFav = [
	{
    "myLocation":"National Constitution Center",
		name:'NATIONAL CONSTITUTION CENTER ',
		lat:39.953904,
		lng:-75.149066,
  },
	{
    "myLocation":"Independence Hall",
		name:'INDEPENDENCE HALL',
		lat: 39.94880,
		lng: -75.150068,

	},
	{
    "myLocation":"Franklin Square",
		name:'FRANKLIN SQUARE' ,

    lat: 39.9555,
		lng: -75.1508,

	},
	{
    "myLocation":"Liberty Bell",
		name:'LIBERTY BELL',
		lat: 39.949702,
		lng: -75.150219,

	},
	{
    "myLocation":"Reading Terminal Market",
		name:'READING TERMINAL MARKET',
    lat: 39.952614,
		lng: -75.159444,

	},
	{
    "myLocation":"Chinatown",
		name:'CHINATOWN',
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
  philaFav[i].marker = marker;
};

var infowindow;

function createMarker(place) {
  	var placeLoc = place.geometry.location;
  	var marker = new google.maps.Marker({
    	map: map,
    	position: place.geometry.location
  });


    infowindow.setContent(name);

    infowindow.open(map, this);
  };

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

};
var viewModel = function() {
  var self = this;
  self.points = ko.observableArray(philaFav);
  self.query = ko.observable('');
  self.search = ko.computed(function(){
    return ko.utils.arrayFilter(self.points(),
    function(point){
        if (point.marker) {
          if (point.myLocation.toLowerCase().indexOf(self.query().toLowerCase()) >= 0) {
            point.marker.setMap(map);
            return true;
          } else {
            point.marker.setMap(null);
            return false;
          }
      }
    })

    })

  }


ko.applyBindings(new viewModel());


