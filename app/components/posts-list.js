import Ember from 'ember';

export default Ember.Component.extend({
  sorting: ['created:desc'],
  sortedPosts: Ember.computed.sort('posts', 'sorting')
});
