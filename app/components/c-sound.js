import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "div",
  classNames: ['c-sound'],
  playing: false,
  error: false,
  audioObject: null,
  actions: {
    reproducir: function(model) {
      var audio = this.get('audioObject')

      if (!audio) {
        audio = new Audio(model.get('path'));
        this.set('audioObject', audio);

        audio.onplaying = function() {
          this.set('playing', true);
        }.bind(this);

        audio.onended = function() {
          this.set('playing', false);
        }.bind(this);

        audio.onerror = function() {
          this.set('playing', false);
          this.set('error', true);
        }.bind(this);

      }

      audio.play();

    }
  }
});
