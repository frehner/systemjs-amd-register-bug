System.register(['app-1'], function (exports, module) {
	'use strict';
	var App1, app1Value;
	return {
		setters: [function (module) {
			App1 = module.default;
			app1Value = module.app1Value;
		}],
		execute: function () {

			console.log(App1, "app1 default export even though there isn't a default export");
			console.log(app1Value, "app1Value is undefined even though it's a named export");

		}
	};
});
