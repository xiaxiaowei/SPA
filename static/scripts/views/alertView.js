define(['jquery', 'underscore', 'backbone', "routers/router"], function ($, _, Backbone, Router) {
    var alertView = Backbone.View.extend({
        tagName: 'div',
        template:_.template($('#alert-template').html()),
        /* 参数定义
        options: {
            message: "",
            icon: "",
            buttons:[]
        },
        */ 
        initialize: function(options) {
			this.options = options;
        },
        render: function() {
            this.$el.empty();
            this.$el.html(this.template(this.options));
            return this;
        }
    });
    return alertView;
});