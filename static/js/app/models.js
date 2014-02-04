
App.Result = DS.Model.extend({
  title: DS.attr('string'),
  isSelected: DS.attr('boolean')
});

App.Query = DS.Model.extend({
	q: DS.attr('string')
})

App.Result.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isSelected: false
 },
 {
   id: 2,
   title: '...',
   isSelected: false
 },
 {
   id: 3,
   title: 'Profit!',
   isSelected: true
 }
];