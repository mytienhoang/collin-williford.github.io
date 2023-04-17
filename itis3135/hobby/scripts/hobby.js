window.onload = function() {
    document.getElementById("Home").style.display = "block";
    prevSection = document.getElementById("Home");
}

let prevSection = null;

function toggleSelection(secId) {
    let section = document.getElementById(secId);
	if(prevSection) {
        prevSection.style.display = "none";
    } 
    if(section.style.display === "none") {
        section.style.display = "block";
        prevSection = section;
    } else {
        section.style.display = "none";
        prevSection = null;
    }

}  


