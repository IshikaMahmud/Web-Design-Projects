function digitalClock2() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var timeAorP = "AM";

  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    timeAorP = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var currentTime = `${hours}:${minutes}:${seconds} ${timeAorP}`;

  document.querySelector("#time").innerText = currentTime;
  //   document.querySelector("small").innerText = timeAorP;

  setInterval(digitalClock2, 1000);
}

digitalClock2();
