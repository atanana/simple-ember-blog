import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const {RSVP} = Ember;

export default Base.extend({
  ajax: Ember.inject.service(),

  restore(data) {
    return RSVP.resolve(data);
  },

  authenticate(data) {
    return this.get('ajax')
      .post('/login', {
        data: JSON.stringify(data),
        contentType: 'application/json'
      }).then((data) => {
        return data.success ? RSVP.resolve() : RSVP.reject({error: 'Incorrect user/password!'});
      });
  },

  invalidate() {
    return RSVP.resolve();
  }
});
