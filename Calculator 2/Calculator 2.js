function dltIt() {
  document.getElementById("res").value = "";
}

function calcul(newVal) {
  document.getElementById("res").value += newVal;
}

function answer() {
  var a = document.getElementById("res").value;
  var b = eval(a);
  document.getElementById("res").value = b;
}
