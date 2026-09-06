export default function initClickToLoad() {
	const root = document.querySelector(".video_section");
	if (!root) return;

	const videoHeader = root.querySelector(".video_header");
	const ytVideoFigure = root.querySelector(".yt_video");
	const videoID = ytVideoFigure.dataset.video;
	const ytVideoContainer = root.querySelector(".yt_video-container");
	const play = root.querySelector(".play_button");
	const thumbnail = root.querySelector(".yt_thumb");

	play.addEventListener("click", () => {
		const iframe = document.createElement("iframe");
		iframe.classList.add("yt_iframe");
		iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
		iframe.title = thumbnail.alt;
		iframe.allow = `accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`;
		iframe.referrerPolicy = `strict-origin-when-cross-origin`;
		iframe.allowFullscreen = true;

		ytVideoContainer.append(iframe);
		videoHeader.classList.add("access-hidden");
		play.remove();
		thumbnail.classList.add("yt_animate");
		setTimeout(() => {
			thumbnail.remove();
		}, 1500);
	});
}
