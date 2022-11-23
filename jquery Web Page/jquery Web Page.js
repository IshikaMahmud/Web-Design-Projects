// scroll bg

$(window).scroll(function () {
  $(".navbar").toggleClass("scroll-bg", $(this).scrollTop() > 90);
});

// text effect

var typed = new Typed(".title", {
  strings: ["IM", "Computer Engineer", "Web Developer", "Web Designer"],
  typeSpeed: 100,
  loop: true,
});

// schedule

$(".btn").click(function () {
  var input = $(".input").val();
  var NewSchedule = $("#ul").append(
    "<li>" + input + "<i class='fa-solid fa-trash icon1'></i>" + "</li>"
  );
});
$("#ul").on("click", ".icon1", function () {
  $(this).parent().hide();
});

// chart

window.onload = function () {
  var choice = {
    title: {
      text: "Chart of Last 12 Years",
    },
    axisY: {
      title: "All Year %",
    },
    axisX: {
      title: "All Year with June %",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "June 2010", y: 80 },
          { label: "June 2011", y: 75 },
          { label: "June 2012", y: 70 },
          { label: "June 2013", y: 65 },
          { label: "June 2014", y: 60 },
          { label: "June 2015", y: 90 },
          { label: "June 2016", y: 40 },
          { label: "June 2017", y: 35 },
          { label: "June 2018", y: 5 },
          { label: "June 2019", y: 10 },
          { label: "June 2020", y: 50 },
          { label: "June 2021", y: 80 },
          { label: "June 2022", y: 5 },
        ],
      },
    ],
  };
  $("#chart-container").CanvasJSChart(choice);
};

// countable

$(".countable").counterUp({
  time: 1000,
  delay: 10,
});

// owl carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplayTimeout: 1000,
  autoplay: true,
  padding: 10,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// animation

$(".pt1").waypoint(
  function () {
    $(".pt1").addClass("animated fadeInLeft");
  },
  { offset: "50%" }
);

$(".pt2").waypoint(
  function () {
    $(".pt2").addClass("animated fadeInRight");
  },
  { offset: "50%" }
);

$(".pt3").waypoint(
  function () {
    $(".pt3").addClass("animated bounceInDown");
  },
  { offset: "50%" }
);

$(".pt4").waypoint(
  function () {
    $(".pt4").addClass("animated fadeInLeft");
  },
  { offset: "50%" }
);

$(".pt5").waypoint(
  function () {
    $(".pt5").addClass("animated fadeInRight");
  },
  { offset: "50%" }
);
