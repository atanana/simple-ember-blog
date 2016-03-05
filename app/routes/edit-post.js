import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('post', params['post_id']);
  },

  actions: {
    savePost(post) {
      post.save();
      this.transitionTo('index');
    }
  },

  deactivate() {
    this.controller.get('model').rollbackAttributes();
  }
});
