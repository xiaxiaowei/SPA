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
        countries: function () {
            var self = this;
            require(['views/mobileSelectCountryView'], function(MobileSelectCountryView) {
                var view = new MobileSelectCountryView();
                self.renderView.call(self, view);
            });
        },
        mobile: function ()
        {
            var self = this;
            require(['views/mobileView'], function(MobileView) {
                var view = new MobileView();
                self.renderView.call(self, view);
            });
        },
        channel: function(channelId) {
            console.log(channelId);
            var self = this;
            if (channelId == 'Mobile Carrier Billing') {
                if (app.selectedCountry.length <= 0) // 如果没有国家信息，选择国家
                {
                    require(['routers/router'], function(Router) {
                        Router.navigate('countries', {trigger: true});
                    });
                }
                else
                {
                    require(['views/mobileSelectOperatorView'], function(MobileSelectOperatorView) {
                        var view = new MobileSelectOperatorView();
                        self.renderView.call(self, view);
                    });
                }
            }
            else if (channelId == 'Credit Cards') {
                require(['views/creditView'], function(CreditView) {
                    var view = new CreditView();
                    self.renderView.call(self, view);
                });
            }
            else if (channelId == 'Broadband Billing') {
                require(['views/broadbandView'], function(BroadbandView) {
                    var view = new BroadbandView();
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