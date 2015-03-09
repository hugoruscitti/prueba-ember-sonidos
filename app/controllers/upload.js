import Ember from 'ember';

export default Ember.Controller.extend({
  name: "pepe",
  file: "",
  error: "",

  actions: {
    upload: function() {
      var name = this.get('name');
      var file = this.get('file');
      debugger;

      alert(name);
      alert(file);

    }
  }
});
