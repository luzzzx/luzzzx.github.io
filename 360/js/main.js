$(document).ready(function() {
    $('.header-nav__burger').click(function(event) {
        $('.header-nav__burger, .header-nav__list, .header-nav__body').toggleClass('active');
    });
});

$(document).ready(function() {

    $('ul.document-body__tabs-items li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.document-body__tabs-items li').removeClass('current');
        $('.document-body__tabs-body .document-body__tabs-block').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

})