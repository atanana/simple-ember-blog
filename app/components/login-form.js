import Ember from 'ember';

export default Ember.Component.extend({
  cannotLogin: Ember.computed('login', 'password', function () {
    let {login, password} = this.getProperties('login', 'password');
    return !(login && password);
  }),

  actions: {
    login() {
      this.sendAction('doLogin', this.get('login'), this.get('password'));
    }
  }
});
