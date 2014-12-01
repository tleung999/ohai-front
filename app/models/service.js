import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  service: DS.attr('string'),
  role: DS.attr('string'),
  environment: DS.attr('string'),
  public_dns: DS.attr('string'),
  instance_id: DS.attr('string'),
  ami_id: DS.attr('string')
});
