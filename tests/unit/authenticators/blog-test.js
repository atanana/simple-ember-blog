import {test, moduleFor} from 'ember-qunit';
import Pretender from 'pretender';
import BlogAuthenticator from '../../../authenticators/blog';

let server;

moduleFor('authenticator:blog', {
  beforeEach() {
    server = new Pretender();
  },
  afterEach() {
    server.shutdown();
  },
  needs: [
    'service:ajax'
  ]
});

function createAuthenticator(context) {
  return BlogAuthenticator.create({container: context.container});
}

test('success login', function (assert) {
  server.post('/login', function () {
    return [200, {"Content-Type": "application/json"}, JSON.stringify({success: true})];
  });

  let done = assert.async();

  createAuthenticator(this).authenticate({
    login: 'login',
    'password': 'password'
  }).then(() => {
    assert.ok(true);
    done();
  });
});

test('unsuccessful login', function (assert) {
  server.post('/login', function () {
    return [200, {"Content-Type": "application/json"}, JSON.stringify({success: false})];
  });

  let done = assert.async();

  createAuthenticator(this).authenticate({
    login: 'login',
    'password': 'password'
  }).catch((e) => {
    assert.ok(e.error);
    done();
  });
});
