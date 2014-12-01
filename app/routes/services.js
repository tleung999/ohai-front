import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    return ajax({
      url: 'http://localhost:3000/api/registrations',
      type: 'get'
    }).then(function(response){
      return response["registrations"];
    });
  }
});

