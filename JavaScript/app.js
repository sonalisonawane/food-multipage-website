let dayEl = document.querySelector("#day")
DateEl = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[DateEl.getDay()]

dayEl.innerHTML = " " + day + "'s" + " ";

$('.carousel').carousel({
    interval: 2000,
    pause: "false"
});