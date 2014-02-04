App.SearchController = Ember.ArrayController.extend({
	appName: 'Ember Search Demo',
	actions: {
		updateResultList: function() {
			// Get the query value
			var query = this.get('newQuery');
			if (!query.trim()) { return; }

			// Create the new Todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			// Clear the "New Todo" text field
			this.set('newTitle', '');

			// Save the new model
			todo.save();
		}
	}
});