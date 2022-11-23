// finding

var convertResult = document.querySelector("#res");
var convertSubmit = document.querySelector("#submit");

// create function

function binary(e) {
  e.preventDefault();

  var convertNumber = document.querySelector("#number").value;

  if (convertNumber === "") {
    alert("You must enter a number!");
  } else if (convertNumber < 0) {
    alert("You must enter a positive number!");
  } else {
    convertResult.style.visibility = "visible";
  }

  // convert

  binaryNum = Number(convertNumber).toString(2);
  convertResult.innerText = binaryNum;
}

// add event listener

convertSubmit.addEventListener("click", binary);
