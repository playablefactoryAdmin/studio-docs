function init() {
	const hoverBoxes = document.querySelectorAll(".hover-box");
	const hoverTitles = document.querySelectorAll(".hover-box .title");
	hoverTitles.forEach((title) => {});

	function resize() {
		const hoverBox0 = hoverBoxes[0];
		if (hoverBox0) {
			const hoverParentRect = hoverBox0.parentElement.getBoundingClientRect();
			const scale = Math.min(hoverParentRect.width / 30, hoverParentRect.height / 30) * 0.05;

			hoverTitles.forEach((title) => {
				title.style.transform = `scale(${scale})`;
			});
		}
	}

	window.addEventListener("resize", resize);
	resize();
}

window.addEventListener("load", init);
