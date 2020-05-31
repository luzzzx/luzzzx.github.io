$(document).ready(function () {
  $(".main-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    variableHeight: true
  });
  $(".burger").on("click", function () {
    $(".burger").toggleClass("active");
    $(".burger-menu").toggleClass("active");
    $(".nav-menu__main").toggleClass("active");
  });
});
