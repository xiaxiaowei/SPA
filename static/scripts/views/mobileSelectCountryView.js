define(['jquery', 'underscore', 'backbone', "routers/router"], function ($, _, Backbone, Router) {
    var mobileSelectCountryView = Backbone.View.extend({
        tagName: 'div',
        template:_.template($('#mobile-select-country-template').html()),
        initialize: function() {
              
        },
        render: function() {
            this.$el.empty();
            this.$el.html(this.template());
            return this;
        }
    });
    return mobileSelectCountryView;
});