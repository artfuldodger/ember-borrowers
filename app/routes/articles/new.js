import Ember from 'ember';

export default Ember.Route.extend({
  // If we leave the form before persisting the article,
  // remove it from the store.
  deactivate: function() {
    var model = this.modelFor('articles/new');
    model.destroyRecord();
  },

  model: function() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },

  actions: {
    save: function() {
      var _this = this;
      var model = this.modelFor('articles/new');

      model.save().then(function() {
        _this.transitionTo('articles');
      });
    },
    cancel: function() {
      this.transitionTo('articles');
    }
  }
});
