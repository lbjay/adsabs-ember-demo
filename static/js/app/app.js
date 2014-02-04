
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

window.Search = Ember.Application.create();
Search.ApplicationAdapter = DS.FixtureAdapter.extend();

Search.Result = Ember.Object.extend({
	bibcode: null,
	title: null,
	abs: null,
	isSelected: false
});

/* routers */

Search.Router.map(function() {
  this.route('search', { path: '/' });
});

Search.SearchController = Ember.ObjectController.extend({
	userQuery: '',
	rows: 20,
	actions: {
		executeSearch: function() {
			console.log('foo! ' + this.userQuery);
		}
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