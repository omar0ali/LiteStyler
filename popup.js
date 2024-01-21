document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("applyButton")
		.addEventListener("click", function () {
			setMargins();
		});

	document.getElementById("default").addEventListener("click", function () {
		document.getElementById("marginInput").value = 0;
        setMargins(0);
	});
	document.getElementById("level1").addEventListener("click", function () {
		document.getElementById("marginInput").value = 300;
		setMargins(300);
	});

	document.getElementById("level2").addEventListener("click", function () {
		document.getElementById("marginInput").value = 500;
		setMargins(500);
	});

    const checkboxTheme = document.getElementById("themeInput")
    checkboxTheme.addEventListener("change", function() {
        if(checkboxTheme.checked){
            setDarkTheme(`body { background-color: black; color: white;} p {color: white;}`)
        } else {
            setDarkTheme(`body { background-color: white; color: black;} p {color: black;}`)
        }
    })
    const checkboxInvert = document.getElementById("invertInput")
    checkboxInvert.addEventListener("change",  function () {
        if(checkboxInvert.checked) {
            setDarkTheme(`html {filter: invert(1)}`)
        }else {
            setDarkTheme(`html {filter: invert(0)}`)
        }
    })
});

function setMargins(value) {
	margin = value;
	if (!value) {
		margin = document.getElementById("marginInput").value;
	}
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.insertCSS(tabs[0].id, {
			code: `body { margin-left: ${margin}px !important; margin-right: ${margin}px !important;}`,
		});
	});
}

function setDarkTheme(code) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.insertCSS(tabs[0].id, {
			code: code,
		});
	});
}
