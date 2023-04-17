let timeElement = document.querySelector(".time");
let dateElement = document.querySelector(".date");

/**
 * 
 * @param {Date} date 
 */
function formatTime(date) {
    let hours12 = date.getHours() % 12 || 12;
    let minutes = date.getMinutes();
    let isAm = date.getHours() < 12; 
    
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * 
 * @param {Date} date 
 */
function formatDate(date) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"]; 

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;

}

setInterval(() => {
    let now  = new Date();

    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);

}, 200);



function userReturn() {
    let txt1 = document.getElementById('name');
    let output1 = document.getElementById('output1');
    let txt2 = document.getElementById('feeling');
    let output2 = document.getElementById('output2');
    let feeling = "";

    if (txt2.value.toLowerCase() == "bad") {
        feeling = "Sorry to hear that, hope your day gets better."
    } else if (txt2.value.toLowerCase() == "good") {
        feeling = "Glad to hear you are doing good today."
    }
    

    return output1.innerHTML = "Welcome to Williford Web's webpage, " + txt1.value + ". " + feeling; 
    
}

const home = document.createElement('a');
home.setAttribute('href', "inex.html");
home.innerHTML = "HOME";

const introduction = document.createElement('a');
introduction.setAttribute('href', "introduction.html");
introduction.innerHTML = "Intro";

document.getElementsByTagName('nav')[0].appendChild(home);
document.getElementsByTagName('nav')[0].appendChild(introduction);


function walrusLooks() {
    let showImageButton = document.getElementById("walrus_picture");
    let myImage = document.getElementById("walrus_img");
    myImage.style.display="block";
}
function walrusSmell() {
    let smell = document.getElementById("walrus_smell");
    smell.style.display = "block";
}
function walrusLive() {
    let live = document.getElementById("walrus_live");
    live.style.display="block";
}
function walrusPet() {
    let pet = document.getElementById("walrus_pet");
    pet.style.display="block";
}
function walrusUgly() {
    let ugly = document.getElementById("walrus_ugly");
    ugly.style.display="block";
}


