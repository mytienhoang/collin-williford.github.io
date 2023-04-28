$(document).ready(function() {
	for (const link of document.getElementsByClassName("speaker_btn")) {
		link.addEventListener("click", event => {
			const title = event.currentTarget.getAttribute("title");

			fetch(`json_files/${title}.json`).then(response => response.json()).then(json => {
				const speaker = json["speakers"][0];

				document.querySelector(".description").innerHTML = speaker["text"];
				document.querySelector(".name").innerHTML = speaker["speaker"];
				document.querySelector(".month").innerHTML = speaker["month"];
				document.querySelector(".img").src = speaker["image"];
				document.querySelector(".title").innerHTML = speaker["title"];
			})
		});
	}
}); // end ready