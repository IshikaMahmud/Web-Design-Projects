// finding

var bookTitle = document.querySelector("#title");
var bookAuthor = document.querySelector("#author");
var bookYear = document.querySelector("#year");
var bookButton = document.querySelector(".btn");
var bookLists = document.querySelector("#book-lists");

// add event listener

bookButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (bookTitle.value == "" && bookAuthor.value == "" && bookYear.value == "") {
    alert("You must fill this field!");
  } else {
    var trBook = document.createElement("tr");

    var newTitle = document.createElement("td");
    newTitle.innerHTML = bookTitle.value;

    trBook.appendChild(newTitle);

    var newAuthor = document.createElement("td");
    newAuthor.innerHTML = bookAuthor.value;

    trBook.appendChild(newAuthor);

    var newYear = document.createElement("td");
    newYear.innerHTML = bookYear.value;

    trBook.appendChild(newYear);

    bookLists.appendChild(trBook);
  }
});
