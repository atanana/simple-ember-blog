import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('post');
  },

  actions: {
    savePost() {
      const post = this.controller.get('model');
      post.set('created', new Date());
      post.save();

      this.controller.set('model', this.store.createRecord('post'));
    }
  },

  deactivate() {
    this.controller.get('model').rollbackAttributes();
  }
});
