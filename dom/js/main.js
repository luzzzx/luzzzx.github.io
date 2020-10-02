$(document).ready(function () {
    $('.burger').on("click", function () {
        $('.burger').toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('body').append('<div class="modal-backdrop fade show"></div>');
    });
    $('.close-menu').on("click", function () {
        $('.burger').removeClass('active');
        $('.main-menu').removeClass('active');
        $(".modal-backdrop").remove();
    });
    $('.user').on("click", function () {
        $('.drop-down__menu').toggleClass('active');
    });
    $('.anchor-top').on("click", function () {
        $(window).scrollTop(0);
    });
});