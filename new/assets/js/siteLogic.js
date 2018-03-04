//=========================================
//===========Load Initial State============
//=========================================

//on site load, go straight to profile
loadSection('profile');

//=========================================
//============Section Switching============
//=========================================

$('.section-link').on('click', function() {
	var targetSection = $(this).attr('id').split('-')[0];
	loadSection(targetSection);
});

function loadSection(sectionName) {
	$('.section-link').removeClass('current-section-highlight');
	$('#content').load(`./${sectionName}.html`);
	$(`#${sectionName}-link`).addClass('current-section-highlight');
}