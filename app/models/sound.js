import DS from 'ember-data';

let sound = DS.Model.extend({
  name: DS.attr('string'),
  path: DS.attr('string'),
  color: DS.attr('string')
});

sound.reopenClass({
  FIXTURES: [
    {id: 1, name: "papeleo", path: 'papeleo.mp3'},
    {id: 2, name: "pepe2", path: 'nose...'},
  ]
});

export default sound;
