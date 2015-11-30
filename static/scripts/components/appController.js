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
        channel: function(channelId) {
            console.log(channelId);
            var self = this;
            if (channelId == 'Mobile Carrier Billing') {
                require(['views/mobileView'], function(MobileView) {
                    var view = new MobileView();
                    self.renderView.call(self, view);
                });
            }
        },
        renderView: function(view) {
            this.currentView && this.currentView.remove();
            $('#main').html(view.render().el);
            this.currentView = view;
        }
    }
    return AppController;
});