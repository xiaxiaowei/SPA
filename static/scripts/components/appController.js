define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    var AppController = {
        currentView: null,
        home: function() {
            var self = this;
            require(['views/homeView'], function(HomeView) {
                var view = new HomeView();
                self.renderView.call(self, view);
            });
        },
        renderView: function(view) {
            this.currentView && this.currentView.remove();
            $('#main').html(view.render().el);
            this.currentView = view;
        }
    }
    return AppController;
});