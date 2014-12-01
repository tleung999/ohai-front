import Ember from 'ember';

export default Ember.ArrayController.extend({
  kanoServers: Ember.computed.filterBy('service', 'kano')
});
