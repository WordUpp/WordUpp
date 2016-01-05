var app = app || {};
var active = active || {};

app.addRecipeView = Backbone.View.extend({
  el: $('#add-recipe'),
  initialize: function() {
    console.log('AddRecipeView instantiated');
    this.$el.children('button').hide();
  },
  events: {
    'click button': 'addRecipe',
    'blur input': 'validateInput'
  },
  addRecipe: function() {
    var confirmation = confirm('Are you sure you want to save this?');
    if (confirmation) {
      var data = {
        ingredients: $('#p-ingredients').val(),
        type: $('#p-type').val(),
        topping: $('#p-topping').val(),
        syrup: $('#p-syrup').val(),
        instructions: $('#p-instructions').val(),
        time: $('#p-time').val()
      }
      console.log(data);
      this.collection.create(data);
    }
  },
  validateInput: function() {
    var allTheInputs = this.$el.children('input');
    console.log(allTheInputs);
    var validValues = 0;

    for (var i = 0; i < allTheInputs.length; i++) {
      var selector = $(allTheInputs)[i];
      //console.log(selector);
      var val = $(selector).val();
      if (val.length > 0) {
        validValues++;
      }
    }

    if (validValues != allTheInputs.length) {
      this.$el.children('button').hide();
      this.$el.children('.error').html('Some fields are missing values');
    } else {
      this.$el.children('button').show();
      this.$el.children('.error').html('');
    }

  }
});

app.CollectionView = Backbone.View.extend({
  el: $('#pancake-listing'),
  initialize: function() {
    console.log('CollectionView is a go.');
    // when loaded, let us render immediately
    this.$el.html('');
    this.render();
  },
  render: function() {
    console.log('CollectionView is rendering.');
    this.$el.html('');
    // we expect our CollectionView to be bound to a Collection
    var models = this.collection.models;
    for (var m in models) {
      new app.ModelView({
        model: models[m],
        el: this.el
      });
    }
  }
});

app.ModelView = Backbone.View.extend({
  initialize: function() {
    console.log('ModelView instantiated and awaiting orders, sir');
    this.render();
  },
  render: function() {
    console.log('ModelView rendering.');
    var data = this.model.attributes;
    console.log('Grabbing template...');
    var template = $('#recipe-template').html();
    console.log('Transforming template...');
    var compileTpl = _.template(template);
    console.log('Creating HTML from template and model data...');
    var html = compileTpl(data);
    console.log('Rendering to page...');
    this.$el.append(html);
    // vanilla - this.el.innerHTML = this.el.innerHTML + html;
  }
});
