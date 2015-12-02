define(['jquery', 'underscore', 'backbone', 'views/alertView'], function ($, _, Backbone, AlertView) {
	var utils = {
		showAlert: function (message, icon, buttons) {
			var options = {"message":message, "icon":icon, "buttons":buttons};
			var alertView = new AlertView(options);
			$('#main').html(alertView.render().el);
		}
	};
	return utils;
});