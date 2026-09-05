import { fetchData } from "./modules/data.js";
import { initInstagram } from "./modules/instagram.js";

async function init() {
	const data = await fetchData();
	initInstagram(data);
}
init();
