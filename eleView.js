var EleView = Backbone.View.extend({
	el:".application",
	initialize:function(){
		this.listenTo(this.model, "change:currentFloor", this.render);
	},
	
	events: {
		"click .number":"runElevator"
	},
	template:_.template($('#elevator-template').html()),
	render:function(){
		var model = this.model.toJSON();
		var html = this.template(model);
		this.$el.html(html);
	},

	runElevator:function(e){
		
		var floor = $(e.target).data("floor");
		this.model.move(floor);	
		// console.log(floor);
		// this.model.set("currentFloor", floor);
		
		console.log(this.model.toJSON());
	}
	
});

module.exports = EleView;
