function colorGenerate() {
  var codeHex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  var clr = "#";

  for (var x = 0; x < 6; x++) {
    var code = Math.round(Math.random() * 15);

    var code2 = codeHex[code];
    clr += code2;
  }
  document.querySelector("#container").style.backgroundColor = clr;
  document.querySelector("#res").style.color = clr;
  document.querySelector("#res").innerHTML = clr;
}
