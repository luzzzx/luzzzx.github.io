$(".footer__title").on("click", function () {
  if (parseInt($(window).width()) < 450) {
    $(this).toggleClass("active");
    $(this).next("ul").slideToggle(300);
  }
});

$(".burger-menu").on("click", function () {
  $("body").toggleClass("lock");
  $(".main-menu").toggleClass("active");
  $(".burger-menu").toggleClass("active");
});
