import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

const {RSVP} = Ember;

moduleFor('route:login', 'Unit | Route | login', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it authenticates successfully', function (assert) {
  assert.expect(2);
  let route = this.subject();
  route.set('session', {
    authenticate(authenticator, data) {
      assert.equal('authenticator:blog', authenticator);
      assert.deepEqual({
        login: 'login',
        password: 'password'
      }, data);
      return RSVP.resolve();
    }
  });
  route.send('authenticate', 'login', 'password');
});

test('it authenticates unsuccessfully', function (assert) {
  assert.expect(2);
  let route = this.subject();
  let error = 'error';
  route.set('session', {
    authenticate() {
        return RSVP.reject({error: error});
    }
  });
  route.controller = {
    set(property, value) {
      assert.equal('errorMessage', property);
      assert.equal(error, value);
    }
  };
  route.send('authenticate');
});
