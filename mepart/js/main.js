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

$(".conditions").on("click", function () {
  if (parseInt($(window).width()) < 450) {
    $(this).toggleClass("active");
    $(".terms-row").slideToggle(300);
  }
});

$(".acepts").on("click", function () {
  if (parseInt($(window).width()) < 450) {
    $(this).toggleClass("active");
    $(".acept-row").slideToggle(300);
  }
});
$(".button-sub").on("click", function () {
  $(".form-wrapp").addClass("show");
});
$(".map__link").on('click', function () {
  if (parseInt($(window).width()) < 450) {
    $(this).next('.btn-map').toggleClass('d-block');
  }

})
