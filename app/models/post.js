import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  created: DS.attr('date'),

  isValid: Ember.computed.and('title', 'text'),
  isInvalid: Ember.computed.not('isValid'),

  shortText: Ember.computed('text', function () {
    const text = this.get('text');
    let separator = 500;

    if (text.length > separator) {
      if (text.charAt(separator - 1) !== ' ') {
        separator = text.indexOf(' ', separator);
      }

      return text.substr(0, separator).trim() + ' ...';
    } else {
      return text;
    }
  })
});
