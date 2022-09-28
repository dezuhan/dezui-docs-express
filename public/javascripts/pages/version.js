
$.getJSON('/data/version.json', function(ver) {
	var verl = ver[ver.length - 1]

	$("#version").append('Latest <span class="text-info">' + verl + '</span>')

	var verUrl = ver[ver.length - 1][0]+'x'
	$('.docs-link-version').attr('href', '/docs/' + verUrl)
})


var verPath = $(location).attr('pathname')
var verPaths = verPath.replace('/docs/', '')
if ('/docs/'+verPaths == verPath) {
	$('header nav').addClass('absolute')
}
