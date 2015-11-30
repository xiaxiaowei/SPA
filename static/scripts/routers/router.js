define(['jquery', 'underscore', 'backbone', 'components/appController'], function ($, _, Backbone,
AppController) {
    var router = Backbone.Router.extend({
        routes: {
            '': 'home',                         // 选择支付渠道页面
            'channel/:channelId':'channel',     // 各具体渠道首页
            'countries' : 'countries',          // 进入手机支付->国家选择页面
            'mobile' : 'mobile'                 // 手机支付扫码页面 
        },
        initialize: function() {
            var routeName;
            for (var route in this.routes) {
                routeName = this.routes[route];
                this.route(route, routeName, $.proxy(AppController[routeName], AppController));
            } 
        },
        start: function () {
            Backbone.history.start();
        } 
    });
    return new router();
});