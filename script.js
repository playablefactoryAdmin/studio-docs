console.log("script.js loaded");
function init() {
	console.log("init called");
	const hoverBoxes = document.querySelectorAll(".hover-box");
	const hoverTitles = document.querySelectorAll(".hover-box .title");
	console.log(hoverTitles);
	hoverTitles.forEach((title) => {
		title.addEventListener("mouseover", () => {
			hoverBoxes.forEach((hoverBox) => {
				hoverBox.style.zIndex = 0;
			});
			title.parentElement.style.zIndex = 1;
		});
	});

	function resize() {
		const hoverBox0 = hoverBoxes[0];
		if (hoverBox0) {
			const hoverParentRect = hoverBox0.parentElement.getBoundingClientRect();
			let scale = Math.min(hoverParentRect.width / 30, hoverParentRect.height / 30) * 0.05;
			scale = Math.max(0.5, scale);
			scale = Math.min(1, scale);

			hoverTitles.forEach((title) => {
				title.style.transform = `scale(${scale})`;
			});
		}
	}

	window.addEventListener("resize", resize);
	resize();
}

window.addEventListener("load", function () {
	setTimeout(init, 1000);
});
