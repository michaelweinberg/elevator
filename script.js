(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EleModel = Backbone.Model.extend({
	defaults:{
		currentFloor:0
	},
	move:function(number){
		var currentFloor = this.get("currentFloor");
		// var goingTo = 0;
		// switch(number){
			// case "1":
			// var goingTo = 1;
			// break;
// 			
			// case "2":
			// var goingTo = 2;
			// break;
// 			
			// case "3":
			// var goingTo = 3;
			// break;
// 			
			// case "4":
			// var goingTo = 4;
			// break;
// 			
			// case "0":
			// var goingTo = 0;
			// break;
// 			
			// default:0;
// 			
		// }
		
		// console.log("Helloe",);
		
		this.set("currentFloor", number);	
		console.log(this.toJSON());	
	
	}
});

module.exports = EleModel;




},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./eleModel":1,"./eleView":2}]},{},[3]);
