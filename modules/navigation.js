export default function initNavigation() {
	const body = document.body;
	const open = document.querySelector(".open_button");
	const close = document.querySelector(".close_button");
	const buttons = document.querySelectorAll(".menu_button");
	const nav = document.querySelector(".navigation");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const isActive = body.classList.toggle("menu_active");
			if (isActive) {
				open.setAttribute("aria-expanded", "true");
			} else {
				open.setAttribute("aria-expanded", "false");
			}
		});
	});
}
