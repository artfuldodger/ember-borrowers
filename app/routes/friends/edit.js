import Ember from 'ember';

export default Ember.Route.extend({
  // If we leave the form before persisting the friend,
  // rollback any changes.
  deactivate: function() {
    var model = this.modelFor('friends/edit');
    model.rollback();
  }
});
