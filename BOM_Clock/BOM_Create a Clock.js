var saveButton = document.querySelector(".save-btn");
var message = document.querySelector(".message");


saveButton.addEventListener("click", startClock);

function startClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    let time = hours + ":" + minutes + ":" + seconds;
    // console.log(time);
    message.textContent = time;
    setInterval(startClock, 1000);
}
