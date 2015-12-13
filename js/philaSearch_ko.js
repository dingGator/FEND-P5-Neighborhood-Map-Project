
var myLocation="";

var places = [
  {"myLocation":"National Constitution Center"},
  {"myLocation":"Philadelphia Museum of Art"},
  {"myLocation":"Independence Hall"},
  {"myLocation":"Franklin Square"},
  {"myLocation":"Liberty Bell"},
  {"myLocation":"Reading Terminal Market"},
  {"myLocation":"Chinatown"}
  ];


var viewModel = function() {
  var self = this;
  self.points = ko.observableArray(places);

  self.query = ko.observable('');
  self.search = ko.computed(function(){
    return ko.utils.arrayFilter(self.points(),
  function(point){
      return point.myLocation.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
    });
    });
  };


ko.applyBindings(new viewModel());
