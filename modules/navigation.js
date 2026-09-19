export default function initNavigation() {
	const body = document.body;

	// Navigation
	const open = document.querySelector(".open_button");
	const buttons = document.querySelectorAll(".menu_button");

	// Search
	const openSearch = document.querySelector(".open_search");
	const searchButtons = document.querySelectorAll(".search_button");
	const input = document.querySelector(".search_input");

	function toggleMenuAndSearch(open, buttons, input, active) {
		if (open) {
			buttons.forEach((button) => {
				button.addEventListener("click", () => {
					const isActive = body.classList.toggle(active);
					if (isActive) {
						open.setAttribute("aria-expanded", "true");
						if (input) {
							setTimeout(() => {
								input.focus();
							}, 300);
						}
					} else {
						open.setAttribute("aria-expanded", "false");
						open.focus();
					}
				});
			});
		}
	}
	toggleMenuAndSearch(open, buttons, null, "menu_active");
	toggleMenuAndSearch(openSearch, searchButtons, input, "search_active");

	function escapeToClose(body, open, active) {
		if (open) {
			document.addEventListener("keydown", (e) => {
				if (e.key === "Escape" && body.classList.contains(active)) {
					body.classList.remove(active);
					open.setAttribute("aria-expanded", "false");
					open.focus();
				}
			});
		}
	}
	escapeToClose(body, open, "menu_active");
	escapeToClose(body, openSearch, "search_active");
}
