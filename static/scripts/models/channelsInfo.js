define(['backbone'], function (Backbone) {
    var channelsInfo = Backbone.Model.extend({
        defaults: {
            channels: [],
            selectedChannel: null,
            description: ''
        },
        validate: function(attrs, options) {
            if (attrs.channels.length == 0) {
                return "You must add a channel!";
			}
		}
	});
    return channelsInfo;
});