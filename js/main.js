$(document).ready(function(){
	$(".slider").slider();
	
	$(".button-collapse").sideNav();
	
	$('a.page').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top}, 2000, 'easeInOutExpo');
		event.preventDefault();
		// $("#slide-out").hide();
		// $("#sidenav-overlay").hide();
		// $("#slide-out").show();
		// $("#sidenav-overlay").show();
	});
	
	$(".index").click(function() {
		$('html,body').animate({scrollTop: $("#main").offset().top}, 2000);
	});

	$("#hexagonImg, .icoPort").mouseenter(function(){
		$(this).addClass('animated tada');
	});
	$("#hexagonImg, .icoPort").mouseleave(function(){
		$(this).removeClass('animated tada');
	});
});