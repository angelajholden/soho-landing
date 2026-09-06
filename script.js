import { fetchData } from "./modules/data.js";
import { initInstagram } from "./modules/instagram.js";
import initClickToLoad from "./modules/click-to-load.js";

initClickToLoad();

async function init() {
	const data = await fetchData();
	initInstagram(data);
}
init();
