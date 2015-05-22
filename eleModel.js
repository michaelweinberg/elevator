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



