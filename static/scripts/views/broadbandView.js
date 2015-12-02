define(['jquery', 'underscore', 'backbone', "routers/router", "components/utils"], function ($, _, Backbone, Router, Utils) {
    var broadbandView = Backbone.View.extend({
        tagName: 'div',
        template:_.template($('#broadband-template').html()),
        initialize: function() {
            
        },
        events: {
                "click #pay": "pay"
        },
        pay: function (params) {
            Utils.showAlert("Pay Success", "success.png", null);
        },
        render: function() {
            this.$el.empty();
            this.$el.html(this.template());
            return this;
        }
    });
    return broadbandView;
});