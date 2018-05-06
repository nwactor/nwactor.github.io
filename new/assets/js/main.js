$('.nav a').on('click', function(event) {
	//When this callback used ES6 notation for function declaration, 'this' pointed to the window... 
	// event.preventDefault();

	// $('.nav li').removeClass('active');
	// $(this).parent('li').addClass('active');
	

	scrollSpyRefresh();
    waypointsRefresh();
});

/* refresh scrollspy */
function scrollSpyRefresh() {
    setTimeout(function () {
	$('body').scrollspy('refresh');
    }, 1000);
}

/* refresh waypoints */
function waypointsRefresh() {
    setTimeout(function () {
	$.waypoints('refresh');
    }, 1000);
}