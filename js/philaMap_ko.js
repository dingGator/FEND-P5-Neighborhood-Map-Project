var myLocation = "";
var quickFacts = "";

var philaFav = [
	{
    "myLocation":"National Constitution Center",
		name:'NATIONAL CONSTITUTION CENTER '+
    ' \n Quick Facts: The National Constitution Center '+
    ' \n is a nonprofit, nonpartisan institution devoted'+
    ' \n to Disnifying the United States Constitution and'+
    ' \n what it represents.Wikipedia',
		lat:39.953904,
		lng:-75.149066,
  },
	{
    "myLocation":"Philadelphia Museum of Art",
		name:'PHILADELPHIA MUSEUM OF ART'+
    ' \n Quick Facts: The Philadelphia Museum of Art '+
    ' \n It has collections of more than 227,000 objects that '+
    ' \n include world-class holdings of European and '+
    ' \n American paintings, prints, drawings, and decorative '+
    ' \n arts.Wikipedia ',

    lat: 39.965590,
		lng: -75.180998,


	},
	{
    "myLocation":"Independence Hall",
		name:'INDEPENDENCE HALL'+
    ' \n Quick Facts: Independence National Historical Park'+
    ' \n is a United States National Park in Philadelphia that'+
    ' \n preserves several sites associated with the' +
    ' \n American Revolution and the nation founding history.Wikipedia'+
    ' \n Area:40 acres, Architect:William Strickland,' +
    ' \n Established:July 4, 1956',
		lat: 39.94880,
		lng: -75.150068,

	},
	{
    "myLocation":"Franklin Square",
		name:'FRANKLIN SQUARE' +
    ' \n Quick Facts": Franklin Square is one of the five' +
    ' \n original open-space parks'+
    ' \n planned by William Penn when he laid out the'+
    ' \n city of Philadelphia, Pennsylvania in 1682.Wikipedia'+
    ' \n Area:8 acres, Year built:1683, Architect:Thomas Holme',

    lat: 39.9555,
		lng: -75.1508,

	},
	{
    "myLocation":"Liberty Bell",
		name:'LIBERTY BELL' +
    ' \n Quick Facts": "The Liberty Bell is an iconic symbol of' +
    ' \n American independence, located in Philadelphia, Pennsylvania.'+
    ' \n Wikipedia, Owners:Philadelphia, Materials:CopperTin,'+
    ' \n Municipality:Philadelphia',
		lat: 39.949702,
		lng: -75.150219,

	},
	{
    "myLocation":"Reading Terminal Market",
		name:'READING TERMINAL MARKET' +
		' \n Quick Facts: The Reading Terminal is a complex of' +
    ' \n buildings and former railroad station located in the Market'+
    ' \n last section of Center City in the city of Philadelphia,'+
    ' \n Pennsylvania, United States.Wikipedia'+
    ' \n Area:4 acres, Architect:Francis H. Kimball',
    lat: 39.952614,
		lng: -75.159444,

	},
	{
    "myLocation":"Chinatown",
		name:'CHINATOWN'+
		' \n Quick Facts": "Philadelphia Chinatown is a predominantly' +
    ' \n Asian American neighborhood in Center City Philadelphia.'+
    ' \n The Philadelphia Chinatown Development Corporation supports' +
    ' \n the area.Wikipedia',
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
    infowindow.setContent(name);
    infowindow.open(map, this);
  });


};

};
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






