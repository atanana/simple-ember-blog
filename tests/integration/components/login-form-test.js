import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | Login form', {
  integration: true
});

test('it renders all components', function (assert) {
  assert.expect(3);
  this.render(hbs`{{login-form}}`);
  assert.ok(this.$('#login-input').length);
  assert.ok(this.$('#password-input').length);
  assert.ok(this.$('#login-btn').length);
});

test('it renders error message', function (assert) {
  assert.expect(1);
  this.set('errorMessage', 'test error message');
  this.render(hbs`{{login-form errorMessage=errorMessage}}`);
  assert.equal(this.$('#login-error-msg').text(), this.get('errorMessage'));
});

test('it enables login button', function (assert) {
  assert.expect(3);
  this.render(hbs`{{login-form}}`);
  let $loginBtn = this.$('#login-btn');
  assert.ok($loginBtn.attr('disabled'));
  this.$('#login-input').val('login').change();
  assert.ok($loginBtn.attr('disabled'));
  this.$('#password-input').val('password').change();
  assert.notOk($loginBtn.attr('disabled'));
});

test('it sends login action', function (assert) {
  assert.expect(2);
  this.set('loginAction', (login, password) => {
    assert.equal(login, 'login');
    assert.equal(password, 'password');
  });
  this.render(hbs`{{login-form doLogin=(action loginAction)}}`);
  this.$('#login-input').val('login').change();
  this.$('#password-input').val('password').change();
  this.$('#login-btn').click();
});
