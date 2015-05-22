var EleModel = require("./eleModel");
var EleView = require("./eleView");
	var elev = new EleModel();
		elev.on("change:result", function(){
			console.log(elev.toJSON());
		});
		
		var view = new EleView({
			model:elev
		});
		
		view.render();
