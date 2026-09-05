export async function fetchData() {
	try {
		const response = await fetch("https://api.practicelayouts.com/instagram/images");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("There was a problem: ", error);
	}
}
