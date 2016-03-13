import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {
      let { login, password } = this.getProperties('login', 'password');
      this.get('session').authenticate('authenticator:oauth2', login, password)
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
    }
  }
});
