App.Router.map(function() {
  this.route('search', { path: '/' });
});

App.SearchRoute = Ember.Route.extend({
	setupController: function(controller) {
		controller.set('title', 'Search the ADS');
	},
	model: function() {
		return this.store.find('result');
	}
});