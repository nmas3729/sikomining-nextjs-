$(document).ready(function () {

	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 4000,
		displayProgess: true,
		preserveTargetSize: true,
		targetWidth: 1000,
		targetHeight: 350,
		responsive: true,				
	}).data('plugin_pogoSlider');

	var transitionDemoOpts = {
		displayProgess: false,
		generateNav: false,
		generateButtons: false
	}


});


$(document).ready(function () {

	$('#js-main-slider2').pogoSlider({
		autoplay: false,
		autoplayTimeout: 4000,
		displayProgess: false,
		preserveTargetSize: true,
		targetWidth: 1000,
		targetHeight: 350,
		responsive: true,				
	}).data('plugin_pogoSlider');

	var transitionDemoOpts = {
		displayProgess: false,
		generateNav: false,
		generateButtons: false
	}


});




