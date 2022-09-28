
$.getJSON("/data/contributors.json", function(supporter) {
	const contrib = supporter.contributor
	const partner = supporter.partner

	$.each(contrib, function(i) {
		$("#contributor-count").append(`
			<div class="contributor">
			<a href="`+contrib[i].link+`?ref=dezui">
			<img src="`+contrib[i].img+`" alt="">
			</a>
			</div>
			`)
	})

	$.each(partner, function(i) {
		$("#partner-count").append(`
			<div class="partner">
			<a href="`+partner[i].link+`?ref=dezui">
			<img src="`+partner[i].img+`" alt="">
			</a>
			</div>
			`)
	})
})
