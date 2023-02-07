$(document).ready( function() {

	if ($(window).width() < 767) {

		$('body').addClass('modile');

	} else {
		$('body').removeClass('modile');

			var fsvs = $.fn.fsvs({
				speed : 900,
				bodyID : 'fsvs-body',
				selector : '>.page',
				mouseSwipeDisance : 40,
				afterSlide : function(){},
				beforeSlide : function(){},
				endSlide : function(){},
				mouseWheelEvents : true,
				mouseDragEvents : true,
				touchEvents : true,
				arrowKeyEvents : true,
				pagination : true,
				nthClasses : false,
				detectHash : true
			});

			$(".down-arrow").click(function() {
				$('#fsvs-body').css({
					'transition': 'all 0.9s ease 0s',
					'transform': 'translate3d(0px, -100%, 0px)'
				});
					});
	}

	//slider.slideUp();
	//slider.slideDown();
	//slider.slideToIndex( index );
	//slider.unbind();
	//slider.rebind();
});




$(window).resize(function() {
    if ($(window).width() < 767) {
		$('body').addClass('modile');

    } else {
		$('body').removeClass('modile');


		var fsvs = $.fn.fsvs({
			speed : 900,
			bodyID : 'fsvs-body',
			selector : '>.page',
			mouseSwipeDisance : 40,
			afterSlide : function(){},
			beforeSlide : function(){},
			endSlide : function(){},
			mouseWheelEvents : true,
			mouseDragEvents : true,
			touchEvents : true,
			arrowKeyEvents : true,
			pagination : true,
			nthClasses : false,
			detectHash : true
		});
    }
}).resize(); // trigger resize event initially