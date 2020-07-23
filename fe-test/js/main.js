$('input[name="date"]').val('');
$('input[name="date"]').attr("placeholder", "From");

$('#calendarFrom').click(function (e) {
    $('input[name="date"]').daterangepicker({
        "singleDatePicker": true,
        "autoApply": true,
        "alwaysShowCalendars": true,
        "showCustomRangeLabel": false,
        locale: { cancelLabel: 'Clear' },

    },
    );

});
$('#calendarFromSecond').click(function (e) {
    $('input[name="dateSecond"]').daterangepicker({
        "singleDatePicker": true,
        "autoApply": true,
        "alwaysShowCalendars": true,
        "showCustomRangeLabel": false,
        locale: { cancelLabel: 'Clear' },

    },
    );

});
$('#closeFrom').click(function (e) {
    $('input[name="date"]').val('');

});
$('#closeSecond').click(function (e) {
    $('input[name="dateSecond"]').val('');

});

$('.btn-group a').on('click', function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).hasClass("grid active")) {
        $('.list-group').addClass("active")
    } else {
        $('.list-group').removeClass("active")
    }
});


