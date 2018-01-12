$(document).ready(function()
	{console.log("ready!");
	/*varible Decleration*/
	var current = 1;
	//check for local storage
	
	//navbar
	$(".menu-icon").click(function(){
		$(".menu-icon").toggleClass("active")
	})

	$(".menu-icon").click(function(){
				$(".sidebar").toggleClass("active")
			})

	//cache DOM
	var $slider = $('#slider');

	$(function() {
  // scroll to bottom
  $('html, body').scrollTop($(document).height() - $(window).height());
	})

	//cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('slide');
	//Page2
	//$('#slider .slides').animate({'margin-left': -720}, 1000)
	setInterval(function() {
		slideContainer.animate({'margin-left': '-='+720}, 1000)
		current++;
		if(current === $slides.length); {
			current = 1;
			$slideContainer.css('margin-left', 0)
		}

	}, 3000);

	//visted
	document.cookie = "visted=true; expires=Sun, 31 Dec 2018 12:00:00 UTC";
});
