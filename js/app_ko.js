var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
var initialCats = [
	{
		clickCount: 0,
		name:'Tabby',
		imgSrc: 'img/cat_picture1.jpg',
		imgAttribution: 'http://www.flickr.com/photos/big',
		nicknames:['Orange', 'Brown', 'Red', 'Blue', 'Green']
	},
	{
		clickCount: 0,
		name:'Crabby',
		imgSrc: 'img/cat_picture2.jpeg',
		imgAttribution: 'http://www.flickr.com/photos/big',
		nicknames:['Messy']
	},
	{
		clickCount: 0,
		name:'Labby',
		imgSrc: 'img/cat_picture3.jpeg',
		imgAttribution: 'http://www.flickr.com/photos/big',
		nicknames:['Sissssy']
	},
	{
		clickCount: 0,
		name:'Tiger',
		imgSrc: 'img/cat_picture4.jpeg',
		imgAttribution: 'http://www.flickr.com/photos/big',
		nicknames:['Stripy']
	},
	{
		clickCount: 0,
		name:'Shadowy',
		imgSrc: 'img/cat_picture5.jpeg',
		imgAttribution: 'http://www.flickr.com/photos/big',
		nicknames:['Noisy']
	},

]
var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames =ko.observableArray(data.nicknames);

	this.title= ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 5) {
			title = 'Newborn';
		} else if (clicks < 15) {
			title = 'Infant';
		} else if (clicks < 20) {
			title = 'Child';
		} else if (clicks < 25) {
			title = 'Teen';
		} else if (clicks < 30) {
			title = 'Adult';
		} else {
			title = 'Ninja';
		}
		return title;

	}, this);
}	// Make the cats show up in a list
// make current cat change when you click on a cat on the listz,
// give yourself a high-five
var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() +1);
	};
	this.setCat =function(clickedCat) {
	self.currentCat(clickedCat);

};
};
ko.applyBindings(new ViewModel());