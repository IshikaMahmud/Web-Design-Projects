var myBirthDay = "25 December 2022";

// finding

var day = document.querySelector("#day");
var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var second = document.querySelector("#second");

// creating function

function countdown() {
  var birthDay = new Date(myBirthDay);
  var currentDay = new Date();
  var overAllTime = (birthDay - currentDay) / 1000;

  var days = Math.floor(overAllTime / 3600 / 24);
  var hours = Math.floor((overAllTime / 3600) % 24);
  var minutes = Math.floor(overAllTime / 60) % 60;
  var seconds = Math.floor(overAllTime) % 60;

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
  // console.log(days, hours, minutes, seconds);
}

// calling function

countdown();
setInterval(countdown, 1000);
