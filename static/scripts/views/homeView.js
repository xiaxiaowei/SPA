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
            this.$el.html(this.template(this.channelsInfo.toJSON()));
            
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
        },
        
        // ----------------
        addCreateAgentButton: function() {
            // var btn = document.createElement('input');
            // btn.type = 'button';
            // btn.value = 'Create Agent';
            // btn.className = 'default';
            // btn.id = 'btnCreateAgent';
            // btn.addEventListener('click', function() {
            //     Router.navigate('#/createAgent', {trigger: true});
            // }, false);
            // return btn;
        },
        addOne: function(agent) {
            // var view = new agentTileView({ model: agent });
            // this.$el.append(view.render().el);
        } 
    });
    return homeView;
});