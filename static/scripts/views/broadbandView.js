define(['jquery', 'underscore', 'backbone', "routers/router"], function ($, _, Backbone, Router) {
    var broadbandView = Backbone.View.extend({
        tagName: 'div',
        template:_.template($('#broadband-template').html()),
        initialize: function() {
              
        },
        render: function() {
            this.$el.empty();
            this.$el.html(this.template());
            return this;
        }
    });
    return broadbandView;
});