import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('post', 'Unit | Model | post', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it valid', function (assert) {
  let model = this.subject();
  Ember.run(() => {
    model.set('title', 'title');
    model.set('text', 'text');
  });

  assert.ok(model.get('isValid'));
  assert.notOk(model.get('isInvalid'));
});

test('it invalid without title', function (assert) {
  let model = this.subject();
  Ember.run(() => {
    model.set('text', 'text');
  });

  assert.notOk(model.get('isValid'));
  assert.ok(model.get('isInvalid'));
});

test('it invalid without text', function (assert) {
  let model = this.subject();
  Ember.run(() => {
    model.set('title', 'title');
  });

  assert.notOk(model.get('isValid'));
  assert.ok(model.get('isInvalid'));
});

test('it show correct short text with limit on space', function (assert) {
  let model = this.subject();
  Ember.run(() => {
    model.set('text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis nisl, pulvinar ut viverra ac, hendrerit vel enim. Nunc sit amet tortor turpis. Ut pulvinar pulvinar quam, eu porttitor est sollicitudin id. Sed mattis a nibh sed tempus. Curabitur eget consectetur tortor. Sed auctor, risus at tristique ornare, nunc neque vestibulum massa, nec fermentum nulla sem at arcu. Pellentesque convallis condimentum tortor vitae egestas. Aliquam mattis imperdiet tincidunt. In ipsum lectus, sagittis sedi odio vitae, efficitur faucibus mi. Nulla cursus convallis pharetra. In ac eros consequat, auctor eros nec, placerat turpis. Aliquam egestas malesuada faucibus. In egestas mauris ut ultrices vehicula. Suspendisse dapibus id risus et pharetra. Sed aliquam elit eget justo faucibus egestas. Fusce suscipit nisi nec lacinia laoreet. Nunc convallis sem sed blandit consequat. Sed eget tincidunt nulla. Integer cursus nibh sit amet nunc lobortis, eget cursus arcu tincidunt. Nullam vulputate dictum dui, vel tincidunt ante tristique porta.');
  });

  assert.equal(model.get('shortText'), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis nisl, pulvinar ut viverra ac, hendrerit vel enim. Nunc sit amet tortor turpis. Ut pulvinar pulvinar quam, eu porttitor est sollicitudin id. Sed mattis a nibh sed tempus. Curabitur eget consectetur tortor. Sed auctor, risus at tristique ornare, nunc neque vestibulum massa, nec fermentum nulla sem at arcu. Pellentesque convallis condimentum tortor vitae egestas. Aliquam mattis imperdiet tincidunt. In ipsum lectus, sagittis sedi ...');
});

test('it show correct short text with limit on word', function (assert) {
  let model = this.subject();
  Ember.run(() => {
    model.set('text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis nisl, pulvinar ut viverra ac, hendrerit vel enim. Nunc sit amet tortor turpis. Ut pulvinar pulvinar quam, eu porttitor est sollicitudin id. Sed mattis a nibh sed tempus. Curabitur eget consectetur tortor. Sed auctor, risus at tristique ornare, nunc neque vestibulum massa, nec fermentum nulla sem at arcu. Pellentesque convallis condimentum tortor vitae egestas. Aliquam mattis imperdiet tincidunt. In ipsum lectus, sagittis sedodio vitae, efficitur faucibus mi. Nulla cursus convallis pharetra. In ac eros consequat, auctor eros nec, placerat turpis. Aliquam egestas malesuada faucibus. In egestas mauris ut ultrices vehicula. Suspendisse dapibus id risus et pharetra. Sed aliquam elit eget justo faucibus egestas. Fusce suscipit nisi nec lacinia laoreet. Nunc convallis sem sed blandit consequat. Sed eget tincidunt nulla. Integer cursus nibh sit amet nunc lobortis, eget cursus arcu tincidunt. Nullam vulputate dictum dui, vel tincidunt ante tristique porta.');
  });

  assert.equal(model.get('shortText'), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis nisl, pulvinar ut viverra ac, hendrerit vel enim. Nunc sit amet tortor turpis. Ut pulvinar pulvinar quam, eu porttitor est sollicitudin id. Sed mattis a nibh sed tempus. Curabitur eget consectetur tortor. Sed auctor, risus at tristique ornare, nunc neque vestibulum massa, nec fermentum nulla sem at arcu. Pellentesque convallis condimentum tortor vitae egestas. Aliquam mattis imperdiet tincidunt. In ipsum lectus, sagittis sedodio ...');
});

test('it show correct short text with text less than limit', function (assert) {
  let model = this.subject();
  Ember.run(() => {
    model.set('text', 'Lorem ipsum dolor');
  });

  assert.equal(model.get('shortText'), 'Lorem ipsum dolor');
});
