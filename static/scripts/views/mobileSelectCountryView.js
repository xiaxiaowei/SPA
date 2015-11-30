define(['jquery', 'underscore', 'backbone', "routers/router"], function ($, _, Backbone, Router) {
    var mobileSelectCountryView = Backbone.View.extend({
        tagName: 'div',
        template:_.template($('#mobile-select-country-template').html()),
        initialize: function() {
            this.countries = app.countries;
        },
        events: {
            "click #next": "next"
        },
        render: function() {
            this.$el.empty();
            var jsonObject = {"countries":this.countries};
            this.$el.html(this.template(jsonObject)); //模板使用JSON对象
            return this;
        },
        next: function(event) {
            var country = event.target.getAttribute('country');
            Router.navigate('country/'+country, {trigger: true});
        }
    });
    return mobileSelectCountryView;
});