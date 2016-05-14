import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate(login, password) {
      this.get('session').authenticate('authenticator:blog', {
        login: login,
        password: password
      }).catch((reason) => {
        this.controller.set('errorMessage', reason.error || reason);
      });
    }
  },

  deactivate() {
    this.controller.set('errorMessage', '');
  }
});
