const css = require("./css"),
	html = require("./html");

module.exports = () => {
	// add our stylesheet
	$(document.head).append(`<style>${css}</style>`);

	// add our html component
	$(".repository-content")
		.prepend(html.helloworldBox); // the property is the same as the filename
};
