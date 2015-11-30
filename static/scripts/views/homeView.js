define(['jquery', 'underscore', 'backbone', "routers/router", "models/channelsInfo"],
    function ($, _, Backbone, Router, ChannelsInfo) {
    var homeView = Backbone.View.extend({
        tagName: 'div',
        template:_.template($('#home-template').html()),
        initialize: function() {
            this.channelsInfo = app.channelsInfo;
        },
        events: {
                "click #next": "next"
        },
        render: function() {
            this.$el.empty();
            var info = this.channelsInfo.toJSON(); // toJSON生成json对象，不是字符串
            this.$el.html(this.template(info));
            
            // this.$el.append("HomeView"+this.channelsInfo.get('selectedChannel'));
            // this.$el.append(this.addCreateAgentButton());
            // this.collection.each(function(item) {
            //     this.addOne(item);
            // }, this);
            return this;
        },
        next: function(event) {
            var channelId = event.target.getAttribute('channelId');
            Router.navigate('channel/'+channelId, {trigger: true});
        }
    });
    return homeView;
});