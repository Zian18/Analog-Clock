const HOURHAND = document.querySelector("#hour");
const   MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date)

let hr = date.hetHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + "Second: " + sec);

let hrPostion = hr*360/12;
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;


HOURHAND.style.transform = "rotate(" + hrPostion + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPostion + "deg)";
SECONDHAND.style.transform = "rotate(" + secPostion + "deg)";
