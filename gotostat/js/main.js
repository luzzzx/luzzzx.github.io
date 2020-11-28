$(document).ready(function () {
    if ($(window).width() < 1350) {
            $('.drp-d a').on("click", function () {
                $(this).next('.drp-d-menu').slideToggle();
            });
            $('.drp-d-2 a').on("click", function () {
                $(this).next('.submenu').slideToggle();
            });
    }
    $('.burger-menu').on("click", function () {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});