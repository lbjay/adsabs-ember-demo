
/*
 * Planning:
 * 
 * 1. accepts a text query as input.
 * 2. displays a list of search results based on that query.
 * 3. list of search results is comprised of result items
 * 4. result items are selectable
 * 5. list of search results can grow/shrink based on user manipulation of search controls (facets)
 * 6. list of search results is sortable
*/

App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend({});

App.Router.map(function() {
  this.resource('search', { path: '/'});
});

App.SearchRoute = Ember.Route.extend({
	model: function() {
		return App.Result.find('result');
	},
});

App.SearchController = Ember.ArrayController.extend({
	queryInput: '',
	rows: 20,
	actions: {
		executeSearch: function() {
			var queryInput = this.get('queryInput');
			console.log('foo! ' + this.queryInput);
		}
	}
});

App.Result = Ember.Object.extend({});
App.Result.reopenClass({
	find: function(query) {
		return [
		        { id: 1, title: "Woot! Black holes!", bibcode: "2010ApJ...xxx..xxxA", isSelected: false },                        
		        { id: 2, title: "Yeah! Black holes!", bibcode: "2010ApJ...xxx..xxxB", isSelected: false },                        
		        { id: 3, title: "Zoinks! Black holes!", bibcode: "2010ApJ...xxx..xxxC", isSelected: false }                        
		        ];
	}
});

//Search.SearchRoute = Ember.Route.extend({
//	model: function() {
//		return this.store.find('searchresult');
//	}
//});
//
///* controllers */
//
//App.SearchController = Ember.ArrayController.extend({
//	appName: 'Ember Search Demo',
//	actions: {
//		updateResultList: function() {
//			// Get the query value
//			var query = this.get('newQuery');
//			if (!query.trim()) { return; }
//
//			// Create the new Todo model
//			var todo = this.store.createRecord('todo', {
//				title: title,
//				isCompleted: false
//			});
//
//			// Clear the "New Todo" text field
//			this.set('newTitle', '');
//
//			// Save the new model
//			todo.save();
//		}
//	}
//});
//
//App.QueryController = Ember.ObjectController.extend({
//	q: '',
//	rows: 20
//});
//
//App.SearchResultController = Ember.ArrayController.extend({
//	
//});
//
///* models */
//
//App.SearchResultList = DS.Model.extend({
//	results: DS.hasMany('searchresult')
//});
//
//App.SearchResult = DS.Model.extend({
//  title: DS.attr('string'),
//  abs: DS.attr('string'),
//  isSelected: DS.attr('boolean'),
//  resultList: DS.belongsTo('searchresultlist')
//});
//
//App.Facet = DS.Model.extend({
//	field: DS.attr('string'),
//	isOpen: DS.attr('boolean'),
//	facetValues: DS.hasMany('facetValue')
//})
//
//App.FacetValue = DS.Model.extend({
//	label: DS.attr('string'),
//	count: DS.attr('int'),
//	facet: DS.belongsTo('facet')
//})