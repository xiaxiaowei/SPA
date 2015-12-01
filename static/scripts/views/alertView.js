define(['jquery', 'underscore', 'backbone', "routers/router"], function ($, _, Backbone, Router) {
    var alertView = Backbone.View.extend({
        tagName: 'div',
        template:_.template($('#alert-template').html()),
        initialize: function() {
			
        },
        render: function() {
            this.$el.empty();
            this.$el.html(this.template());
            return this;
        }
    });
    return alertView;
});