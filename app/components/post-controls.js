import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['post-controls'],

  actions: {
    deletePost() {
      if (confirm('Are you sure want to delete this post?')) {
        this.get('post').destroyRecord();
      }
    }
  }
});
