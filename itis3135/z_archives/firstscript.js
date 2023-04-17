function getTimeDateYear() {
let mydate = new Date();
let day = mydate.getDay();
let year = mydate.getFullYear();
let month = mydate.getMonth();
let daym = mydate.getDate();

let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthary = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentTime = new Date();
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();
let ampm = hour >= 12? 'pm' : 'am';
    if ( h== 24) {
        h=0;
    } else if(h>12) {
        h = h-0;
    }
    if(h<10)  {
        h = "0" + h;
    }
    if(m<10) {
        m = "0" + m;
    }
    if(s<10) {
        s="0" + s;
    }

    let myClock = document.getElementById("clockDisplay");
    myClock.textContent = "Today is " + hour + ":" + minute + ampm + " on " + weekday[day] + ", " + day + " " + monthary[month] + ", " + year;
    setTimeout("getTimeDateYear()", 1000);

}

 




