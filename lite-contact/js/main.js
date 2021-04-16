$(document).ready(function () {

    $('.burger-btn').click(function(e) {
        e.preventDefault();
        $('.main-menu').toggleClass('active');
        $('body').toggleClass('locked');
        $('html').toggleClass('locked');
        $('header').toggleClass('active');
    });

});