import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  created: DS.attr('date'),

  isValid: Ember.computed.and('title', 'text'),
  isInvalid: Ember.computed.not('isValid')
});
