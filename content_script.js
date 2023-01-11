chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.message === "changed") {
		let buggedElement = document.querySelector("div[style*='top: -10000px;']");
		if (buggedElement) {
			buggedElement.style.left = "-299px";
		}
	}
});
