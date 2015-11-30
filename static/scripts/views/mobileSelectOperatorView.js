define(['jquery', 'underscore', 'backbone', "routers/router"], function ($, _, Backbone, Router) {
    var mobileSelectOperatorView = Backbone.View.extend({
        tagName: 'div',
        template:_.template($('#mobile-select-operator-template').html()),
        initialize: function() {
            this.operators = app.operators;
        },
        events: {
            "click #next": "next"
        },
        render: function() {
            this.$el.empty();
            var jsonObject = {'operators':this.operators};
            this.$el.html(this.template(jsonObject));
            return this;
        },
        next: function(event) {
            var operator = event.target.getAttribute('operator');
            app.selectedOperator = operator;
            Router.navigate('mobile', {trigger: true});
        }
    });
    return mobileSelectOperatorView;
});