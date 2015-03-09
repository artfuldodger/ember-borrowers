import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed('model.description',
    function() {
      return !Ember.isEmpty(this.model.get('description'));
    }
  ),

  actions: {
    save: function() {
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'Please fill out a description of the article.');
        return false;
      }
    }
  }
});
