// finding

var text = document.querySelector("#text");
var res2 = document.querySelector(".res2");

// add event listener

text.addEventListener("input", function () {
  res2.innerText = text.value.length;
});
