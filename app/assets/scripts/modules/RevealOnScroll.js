import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

// class RevealOnScroll{
	
// 	constructor(){
// 		this.itemsToReveal = $(".feature-item"); 
// 		this.hideInitially();
// 		this.createWaypoints();
// 	}

// 	hideInitially(){
// 		this.itemsToReveal.addClass("reveal-item");
// 	}

// 	createWaypoints(){
// 		this.itemsToReveal.each(function(){
// 			// alert("0"); //testpopup
			
// 			var currentItem = this;
			
// 			new Waypoint({
// 				element : currentItem,
// 				handler: function(){
// 					$(currentItem).addClass('reveal-item--is-visible');
// 				},
// 				offset : "85%"
// 			});
// 		});
// 	}
// }


class RevealOnScroll{
	
	constructor(selector, percent){
		this.itemsToReveal = selector; 
		this.percentage = percent;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints(){
		var per = this.percentage;
		this.itemsToReveal.each(function(){
			// alert("0"); //testpopup
			
			var currentItem = this;
			
			new Waypoint({
				element : currentItem,
				handler: function(){
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset : per
			});
		});
	}
}

export default RevealOnScroll;