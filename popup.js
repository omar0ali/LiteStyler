document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("applyButton")
		.addEventListener("click", function () {
			setMargins();
		});
	document.getElementById("level1").addEventListener("click", function () {
        document.getElementById("marginInput").value = 300
		setMargins(300);
	});

	document.getElementById("level2").addEventListener("click", function () {
        document.getElementById("marginInput").value = 500
		setMargins(500);
	});
});

function setMargins(value) {
	margin = value;
	if (!value) {
		margin = document.getElementById("marginInput").value;
	}
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.insertCSS(tabs[0].id, {
			code: `body { margin-left: ${margin}px !important; margin-right: ${margin}px !important; }`,
		});
	});
}
