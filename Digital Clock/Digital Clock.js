function myTimer() {
  var myDate = new Date();
  var hr,
    min =
      myDate.getMinutes() < 10
        ? "0" + myDate.getMinutes()
        : myDate.getMinutes(),
    sec =
      myDate.getSeconds() < 10
        ? "0" + myDate.getSeconds()
        : myDate.getSeconds(),
    minute = myDate.getHours() >= 12 ? "PM" : "AM";

  if (myDate.getHours() == 0) {
    hr = 12;
  } else if (myDate.getHours() > 12) {
    hr = myDate.getHours() - 12;
  } else {
    hr = myDate.getHours();
  }

  var currentTime = hr + ":" + min + ":" + sec;

  document.getElementsByClassName("hour")[0].innerHTML = currentTime;
  document.getElementsByClassName("minute")[0].innerHTML = minute;

  var myDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    myMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Octobar",
      "November",
      "December",
    ],
    myDates = myDate.getDate();

  var currentDate =
    myDays[myDate.getDay()] +
    ", " +
    myMonths[myDate.getMonth()] +
    " " +
    myDates;

  document.getElementsByClassName("date")[0].innerHTML = currentDate;
}

myTimer();

setInterval(function () {
  myTimer();
}, 1000);
