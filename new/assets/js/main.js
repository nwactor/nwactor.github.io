$('.nav a').on('click', event => {
	event.preventDefault();

	$('.nav li').removeClass('active');
	$(this).parent('li').addClass('active');

	scrollSpyRefresh();
    waypointsRefresh();
});