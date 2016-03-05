import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('add-post');
  this.route('edit-post', {path: '/edit-post/:post_id'});
});

export default Router;
