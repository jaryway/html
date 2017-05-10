require('./sass/index.scss')

var $ = require('jquery')
require('flexslider/flexslider.css')
require('flexslider')

$(function() {

	if ('ontouchstart' in window) {

		// 解决ISO下到顶部了fixed不下拉的bug
		document.addEventListener('touchmove', function(e) {
			var scroll = $(window).scrollTop()
			if (scroll <= 0) {
				$("#header").css({
					"position": "absolute"
				})
			} else {
				$("#header").css({
					"position": "fixed"
				})
			}

		});
	}


	$(window).on('scroll', function(argument) {
		var scroll = $(window).scrollTop()

		if (scroll >= 50) {
			$('#header').addClass('fixed')
		} else {
			$('#header').removeClass('fixed')
		}

	})

	var $nav = $('.navigation')

	$('.nav-toggle').on('click', function(e) {
		e.preventDefault()
		var $this = $(this)
		if ($this.hasClass('close-nav')) {
			$this.removeClass('close-nav')
			$nav.removeClass('open')
		} else {
			$this.addClass('close-nav')
			$nav.addClass('open')
		}
	})

	$("#p_slider").flexslider({
		animation: "slide",
		// controlsContainer: true,
		// customDirectionNav: $("p"),
		direction: false,
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		smoothHeight: false,
		// sync: "#carousel"
	})

	$('#slider').flexslider({
		animation: "slide",
		// controlsContainer: true,
		// customDirectionNav: $("p"),
		direction: false,
		controlNav: true,
		animationLoop: false,
		slideshow: false,
		smoothHeight: false,
		// sync: "#carousel"
	})

})



// require('bootstrap-sass/assets/stylesheets/_bootstrap.scss')
// require('bootstrap-sass.scss')

// require('./sass/bootstrap-custom.scss')