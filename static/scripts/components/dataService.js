define(['jquery', 'models/channelsInfo'], function ($, ChannelsInfo) {
	
	var DataService = {
		getInitData: function () {
			var channelsInfo = new ChannelsInfo({
				channels: ['Mobile Carrier Billing','Broadband Billing','Credit Cards'],
            	selectedChannel: 'Mobile Carrier Billing',
			});
			app.channelsInfo = channelsInfo;
		}
	};
	return DataService;
});