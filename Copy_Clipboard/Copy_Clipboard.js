// finding

var input = document.querySelector("#inp");
var btn = document.querySelector("button.btn");

btn.onclick = function () {
  input.select();
  document.execCommand("copy");
  alert("Copied!");
};
