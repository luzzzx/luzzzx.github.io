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
$(function () {
    $('#GenesisKnwoledge ').datepicker();
});
// let delist = $("#HideDelisted");
// if (delist.prop("checked")) {
//     console.log('hi');
// }
// $(".card-name").text().indexOf('Delisted').hide();

// $(".card-name").find($('.name-status')).text()