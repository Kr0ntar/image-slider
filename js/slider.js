slideInt = 1;
slideNext = 2;

$(document).ready(function() {
	$('#slider > img#1').fadeIn(300);
	startSlider();
});

function startSlider() {
	count = $('#slider > img').size(); //to get the total no. of slides/images
									   // used version 1.9.1 because the newest version does not recognize this function
	loop = setInterval(function() {
		
		if(slideNext > count) {
			slideNext = 1;
			slideInt = 1;
		}

	$('#slider > img').fadeOut(300);
	$('#slider > img#' + slideNext).fadeIn(300);

	slideInt = slideNext;
	slideNext = slideNext + 1;

	}, 3000)
}

function prev() {
	newSlide = slideInt - 1;
	showSlide(newSlide);
}

function next() {
	newSlide = slideInt + 1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(id) {
	stopLoop();
	if(id > count) {
		id = 1;
	} else if (id < 1) {
		id = count;
	}

	$('#slider > img').fadeOut(300);
	$('#slider > img#' + id).fadeIn(300);

	slideInt = id;
	slideNext = id + 1;
	
	startSlider();
}

//or $('#slider > img')
$('#slider').hover(
	function() {
		stopLoop();
	},

	function() {
		startSlider();
	}
);