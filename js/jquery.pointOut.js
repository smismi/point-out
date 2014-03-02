(function ($) {


	//инициализацичя плагина


	$.fn.pointOut = function (options) {

		var settings = $.extend({
		 	script: [],
			delay: 1000,
			flag1: false
		}, options);


		var script = settings.script;
		var delay = settings.delay;



//TODO: 1. auto scroll
//		2. svg-animation
//		3. blur
//      4. start + autostart


//		foreach in array



		var blump = new Blump();

		$('body').append(blump);

		script.map(runOnce);






		function runOnce(obj) {



//			collect pos and dimensions of el





			_pos = {
				x: 0,
				y: 0,
				w: 0,
				h: 0
			}


			blump.animate({
					top: _pos.y,
					left: _pos.x
				},
				{
					duration: delay,
					specialEasing: {
						top: "easeInQuad",
						left: "easeInQuad"
					}
				}
			);


			//service output
			console.log(obj.el, obj.pos)
		}





		function Blump() {

			_el = $("<div>").addClass("blump");


			return _el;


		}



	}





})(jQuery);