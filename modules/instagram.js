export function initInstagram(data) {
	console.log(data);
	const root = document.querySelector(".insta_footer-grid");
	if (!root) return;

	const instaGrid = document.querySelector(".insta_grid");

	function renderInstaGrid(data, container) {
		data.forEach((item) => {
			const figure = document.createElement("figure");
			figure.classList.add("figure");

			const img = document.createElement("img");
			img.src = item.media_url;
			img.alt = item.alt;
			img.loading = `lazy`;

			figure.append(img);
			container.append(figure);
		});
	}

	const slicedData = data.slice(0, 6);
	renderInstaGrid(slicedData, root);

	const sidebarData = data.slice(0, 9);
	renderInstaGrid(sidebarData, instaGrid);
}
