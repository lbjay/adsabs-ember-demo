
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

window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();