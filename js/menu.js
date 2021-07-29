$(document).ready(function() {
	navNumbers();
	backToDefault();

	// show hovered li stuff
	$('.main-menu').on('mouseover', 'li', function() {
		showTarget($(this));
	});

	// show default .active li stuff
	$('.main-menu').on('mouseleave', backToDefault);

	// change active list item
	$('.main-menu').on('click', 'li', function() {
		changeActive($(this));
	});

	// toggle menu
	$('.toggle').on('click', toggleMenu);

	// for showcase only
	var tl = new TimelineMax(),
			body = $('body'),
			header = $('header'),
			content = $('.content p'),
			toggle = $('.toggle'),
			nav = $('nav');

	tl.to(body, 1, {
		padding: '0 80px 80px',
		delay: .5
	});

	tl.to(header, .25, {
		opacity: 1,
		delay: .5
	});

	tl.to(content, .25, {
		opacity: 1
	}, '-=.25');

	tl.call(function() {
		toggleMenu();
	}, null, null, 3);

	tl.call(function() {
		toggleMenu();
	}, null, null, 4.5);

});

// toggle menu
function toggleMenu() {
	var toggle = $('.toggle');
	var nav = $('nav');

	if(toggle.hasClass('clicked')) {
		toggle.removeClass('clicked');
		nav.removeClass('open');
		console.log('remove open');
		setTimeout(function() {
			console.log('add hidden');
			nav.addClass('hidden');
		}, 500);
	} else {
		nav.removeClass('hidden');
		toggle.addClass('clicked');
		nav.addClass('open');
	}
}

// give the list items numbers
function navNumbers() {
	var sum = $('.main-menu li').length;
	var i = 0;
	var x = 0;

	$('.showcase-menu li').each(function() {
		$(this).attr('data-target', x);
		x++;
	});

	$('.main-menu li').each(function() {
		var number = ('0' + i).slice(-2);
		var numberElement = '<div class="number"><span>'+ '&nbsp'+ ' '+number+'</span></div>';
		$(this).prepend(numberElement);
		$(this).attr('data-target', i);
		i++;
	});
}


// show the hovered list item stuff
function showTarget(e) {
	$('.main-menu li').removeClass('hover');

	var target = $(e).attr('data-target');
	var showcaseHeight = $('.showcase-menu').outerHeight();

	showcaseHeight = (showcaseHeight * target) * -1;

	$('.showcase-menu').css({
		top: showcaseHeight
	});

	$(e).addClass('hover');
}

// show the list item stuff of .active
function backToDefault() {
	$('.main-menu li').removeClass('hover');

	var activeItem = $('.main-menu li.active');
	var target = activeItem.attr('data-target');
	var showcaseHeight = $('.showcase-menu').outerHeight();

	showcaseHeight = (showcaseHeight * target) * -1;

	$('.showcase-menu').css({
		top: showcaseHeight
	});

	activeItem.addClass('hover');
}


// change active list item
function changeActive(e) {
	$('.main-menu li').removeClass('active');
	$(e).addClass('active');
}
