$(document).ready(function () {
    $('.burger').on("click", function () {
        $('.burger').toggleClass('active');
        $('.main-menu').toggleClass('active');
    });
    $('.close-menu').on("click", function () {
        $('.burger').removeClass('active');
        $('.main-menu').removeClass('active');
    });
    $('.user').on("click", function () {
        $('.drop-down__menu').toggleClass('active');
    });
});