var places = [
  {"title":"National Constitution Center"},
  {"title":"Philadelphia Museum of Art"},
  {"title":"Independence Hall"},
  {"title":"Franklin Square"},
  {"title":"Liberty Bell"},
  {"title":"Reading Terminal Market"},
  {"title":"Chinatown"}
  ];


var viewModel = function() {

  var self = this;
  self.points = ko.observableArray(places);

  self.query = ko.observable('');
  self.search = ko.computed(function(){
    return ko.utils.arrayFilter(self.points(),
  function(point){
      return
      point.title.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
    });
    });
  };


ko.applyBindings(new viewModel());
