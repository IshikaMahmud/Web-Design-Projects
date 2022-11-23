const slideshowContents = document.querySelectorAll(".slideshow-content");
// console.log(slideshowContents);
let countContents = 1;
setInterval(() => {
  countContents++;
  let currentContent = document.querySelector(".current");
  currentContent.classList.remove("current");
  if (countContents > slideshowContents.length) {
    slideshowContents[0].classList.add("current");
    countContents = 1;
  } else {
    currentContent.nextElementSibling.classList.add("current");
  }
}, 2000);
