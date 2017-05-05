require('./sass/index.scss')

var $ = require('jquery')

$(function() {
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

})



// require('bootstrap-sass/assets/stylesheets/_bootstrap.scss')
// require('bootstrap-sass.scss')

// require('./sass/bootstrap-custom.scss')