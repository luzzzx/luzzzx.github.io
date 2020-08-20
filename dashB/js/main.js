$(".edit-btn").click(function () {
    $('.control-aside').toggleClass("active");
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


$('.custom-file input').change(function (e) {
    if (e.target.files.length) {
        $(this).next('.custom-file-label').html(e.target.files[0].name);
    }
});

function chBoxDel() {
    var chbox;
    chbox = document.getElementById('HideDelisted');
    if (chbox.checked) {
        $('.card-name:contains("Delisted")').hide()
        $('.card-name:contains("Delisted")').next().hide()

    }
    else {
        $('.card-name:contains("Delisted")').show()
        $('.card-name:contains("Delisted")').next().attr('style', '')
    }
}

$('.custom-switch-ServiceDeposit input:checkbox').change(function () {
    if ($(this).is(":checked")) {
        $(this).closest('.main-card').prev().find('.indicator-dep').addClass('active')
    } else {
        $(this).closest('.main-card').prev().find('.indicator-dep').removeClass('active')
    }
});


$(function () {
    $('#GenesisKnwoledge ').datepicker();
    $('#LockedtillBalances ').datepicker();
    $('#Otherdiscountexpire ').datepicker();
    $('#OtherMultiplierexpire ').datepicker();
    $('#AirdroLocked ').datepicker();

});
