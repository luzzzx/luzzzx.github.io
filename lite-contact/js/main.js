$(document).ready(function () {

    $('.burger-btn').click(function(e) {
        e.preventDefault();
        $('.main-menu').toggleClass('active');
    });

});