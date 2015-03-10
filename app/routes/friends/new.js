import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },

  // If we leave the form before persisting the friend,
  // remove it from the store.
  deactivate: function() {
    var model = this.modelFor('friends/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }
});
