import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      posts: [
        {
          title: 'test title',
          text: 'test text'
        },
        {
          title: 'test title 2',
          text: 'test text 2'
        },
        {
          title: 'test title 3',
          text: 'test text 3'
        }
      ]
    };
  }
});
