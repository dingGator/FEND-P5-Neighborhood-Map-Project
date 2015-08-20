var philFav = [
	{
		clickCount: 0,
		name:'National Constitution Center',
//		imgSrc: 'img/cat_picture1.jpg',
//		imgAttribution: 'http://www.flickr.com/photos/big',
//		nicknames:['Orange', 'Brown', 'Red', 'Blue', 'Green']
	},
	{
		clickCount: 0,
		name:'Philadelphia Museum of Art',
//		imgSrc: 'img/cat_picture2.jpeg',
//		imgAttribution: 'http://www.flickr.com/photos/big',
//		nicknames:['Messy']
	},
	{
		clickCount: 0,
		name:'Independence Hall',
//		imgSrc: 'img/cat_picture3.jpeg',
//		imgAttribution: 'http://www.flickr.com/photos/big',
//		nicknames:['Sissssy']
	},
	{
		clickCount: 0,
		name:'Franklin Institute',
//		imgSrc: 'img/cat_picture4.jpeg',
//		imgAttribution: 'http://www.flickr.com/photos/big',
//		nicknames:['Stripy']
	},
	{
		clickCount: 0,
		name:'Liberty Bell',
//		imgSrc: 'img/cat_picture5.jpeg',
//		imgAttribution: 'http://www.flickr.com/photos/big',
//		nicknames:['Noisy']
	},

]
var Phila = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
//	this.imgSrc = ko.observable(data.imgSrc);
//	this.imgAttribution = ko.observable(data.imgAttribution);
//	this.nicknames =ko.observableArray(data.nicknames);

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

var ViewModel = function() {
	var self = this;

	this.PhilaList = ko.observableArray([]);

	philFav.forEach(function(PhilaItem){
		self.PhilaList.push(new Phila(philaItem));
	});
	this.currentPhila = ko.observable(this.PhilaList()[0]);

	this.incrementCounter = function(){
		self.currentPhila().clickCount(self.currentPhila().clickCount() +1);
	};
	this.setPhila =function(clickedPhila) {
	self.currentPhila(clickedPhila);

};
};
ko.applyBindings(new ViewModel());
}