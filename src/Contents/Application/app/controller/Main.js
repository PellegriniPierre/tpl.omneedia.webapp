App.controller.define('Main', {

	views: [
		"Main"
	],
	
	models: [
	],
	
	init: function()
	{

		this.control({
			"button#clickme": {
				click: "clickme_onclick"
			}
		});
		
		App.init('Main',this.onLoad);
		
	},
	clickme_onclick: function()
	{
		alert('hello world!');
	}
	
});
