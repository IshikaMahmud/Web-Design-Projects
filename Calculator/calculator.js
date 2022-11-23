function insert(num) {
  //   alert(num);
  var existNum = $("#res").val();
  $("#res").val(existNum + num);
}

function clearRes() {
  $("#res").val("");
}

function calculation() {
  var result = eval($("#res").val());
  $("#res").val(result);
}

function deleteNum() {
  var presentNum = $("#res").val();
  if (presentNum != "") {
    $("#res").val(presentNum.slice(0, -1));
  }
}
