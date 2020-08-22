$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
    $('input[type=file]').change(function (e) {
        var val = $(this).val().toLowerCase(),
            regex = new RegExp("(.*?)\.(png|svg)$");

        if (regex.test(val)) {
            $(this).next('.custom-file-label').html(e.target.files[0].name);
        }
        else {
            $(this).val('');
            alert('Please select correct file format');
        }
    });
});

// $('.custom-file input').change(function (e) {
//     if (e.target.files.length) {
//         $(this).next('.custom-file-label').html(e.target.files[0].name);
//     }
// });

$(".clear-form-file").click(function (e) {
    $(this).prev('.custom-file-label').text('');
    $(this).prev('.custom-file input[type=file]').val('');
})
function chBoxDel() {
    var chbox;
    chbox = document.getElementById('HideDelisted');
    if (chbox.checked) {
        $('.card-name:contains("Delisted")').parent().hide()
        $('.card-name:contains("Delisted")').next().hide()

    }
    else {
        $('.card-name:contains("Delisted")').parent().show()
        $('.card-name:contains("Delisted")').next().attr('style', '')
    }
}



// popover
$(function () {
    $('.blocl-wd').popover({
        html: true,
        title: 'Do you really want to CLEAN WALLET ?',
        content: '<div class="media"><a href="#" class="btn btn-primary px-4 mr-3" data-dismiss="modal">Yes</a><a href="#" class="btn btn-danger px-4 close-bt" data-dismiss="modal">No</a></div>'
    });
    $(document).on("click", ".popover .close-bt", function () {
        $(this).parents(".popover").popover('hide');
    });
})
$('.blocl-acc').popover({
    html: true,
    title: 'Do you really want to CLEAN WALLET ?',
    content: '<div class="media"><a href="#" class="btn btn-primary px-4 mr-3" data-dismiss="modal">Yes</a><a href="#" class="btn btn-danger px-4 close-bt" data-dismiss="modal">No</a></div>'
});
$(document).on("click", ".popover .close-bt", function () {
    $(this).parents(".popover").popover('hide');
});
$(function () {
    $('.cleanw-popup').popover({
        html: true,
        title: 'Do you really want to CLEAN WALLET ?',
        content: '<div class="media"><a href="#" class="btn btn-primary px-4 mr-3" data-dismiss="modal">Yes</a><a href="#" class="btn btn-danger px-4 close-bt" data-dismiss="modal">No</a></div>'
    });
    $(document).on("click", ".popover .close-bt", function () {
        $(this).parents(".popover").popover('hide');
    });
})
$(function () {
    $('.rw-popup').popover({
        html: true,
        title: 'Do you really want to RESTORE WALLET ?',
        content: '<div class="media"><a href="#" class="btn btn-primary px-4 mr-3" data-dismiss="modal">Yes</a><a href="#" class="btn btn-danger px-4 close-bt" data-dismiss="modal">No</a></div>'
    });
    $(document).on("click", ".popover .close-bt", function () {
        $(this).parents(".popover").popover('hide');
    });
})
$(function () {
    $('.cw-popup').popover({
        html: true,
        title: 'Do you really want to CREATE WALLET BACKUP ?',
        content: '<div class="media"><a href="#" class="btn btn-primary px-4 mr-3" data-dismiss="modal">Yes</a><a href="#" class="btn btn-danger px-4 close-bt" data-dismiss="modal">No</a></div>'
    });
    $(document).on("click", ".popover .close-bt", function () {
        $(this).parents(".popover").popover('hide');
    });
})
$(function () {
    $('.dr-popup').popover({
        html: true,
        title: 'Do you really want to Destroy Request ?',
        content: '<div class="media"><a href="#" class="btn btn-primary px-4 mr-3" data-dismiss="modal">Yes</a><a href="#" class="btn btn-danger px-4 close-bt" data-dismiss="modal">No</a></div>'
    });
    $(document).on("click", ".popover .close-bt", function () {
        $(this).parents(".popover").popover('hide');
    });
})
$(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        title: 'Do you really want to DELETE COINSERV?',
        content: '<div class="media"><a href="#" class="btn btn-primary px-4 mr-3" data-dismiss="modal">Yes</a><a href="#" class="btn btn-danger px-4 close-bt" data-dismiss="modal">No</a></div>'
    });
    $(document).on("click", ".popover .close-bt", function () {
        $(this).parents(".popover").popover('hide');
    });
})
$(function () {
    $('.bc-popup').popover({
        html: true,
        title: 'Do you really want to DELETE BC.?',
        content: '<div class="media"><a href="#" class="btn btn-primary px-4 mr-3" data-dismiss="modal">Yes</a><a href="#" class="btn btn-danger px-4 close-bt" data-dismiss="modal">No</a></div>'
    });
    $(document).on("click", ".popover .close-bt", function () {
        $(this).parents(".popover").popover('hide');
    });
})
$(function () {
    $('.bw-popup').popover({
        html: true,
        title: 'Do you really want to BACKUP WALLET ?',
        content: '<div class="media"><a href="#" class="btn btn-primary px-4 mr-3" data-dismiss="modal">Yes</a><a href="#" class="btn btn-danger px-4 close-bt" data-dismiss="modal">No</a></div>'
    });
    $(document).on("click", ".popover .close-bt", function () {
        $(this).parents(".popover").popover('hide');
    });
})

// indicators 
$('.custom-switch-ServiceDeposit input:checkbox').change(function () {
    if ($(this).is(":checked")) {
        $(this).closest('.main-card').prev().find('.indicator-dep').addClass('active')
    } else {
        $(this).closest('.main-card').prev().find('.indicator-dep').removeClass('active')
    }
});
// checkboxes

$(".indicator-serv input, .indicator-win input, .indicator-dep input").click(function (e) {
    e.stopPropagation();
})

$(".card-name input[type=checkbox]").click(function (e) {
    e.stopPropagation();
})

$(".card-name .edit-card-btn").click(function (e) {
    e.stopPropagation();
})

$('.table-name input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
        $('.card-name input[type=checkbox]').prop('checked', true);
    } else {
        $('.card-name input[type=checkbox]').prop('checked', false);
    }
});
// filter

$(function () {
    $('#GenesisKnwoledge ').datepicker();
    $('#LockedtillBalances ').datepicker();
    $('#Otherdiscountexpire ').datepicker();
    $('#OtherMultiplierexpire ').datepicker();
    $('#AirdroLocked ').datepicker();

});

// clipboard
$('.btn-copy').click(function () {
    let $text = $(this).prev('span').text();
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($text).select();
    document.execCommand("copy");
    $temp.remove();
});

$(".coin-search").on("keyup", function () {  //2
    var value = $(this).val().toLowerCase();  //3
    $(".card-name").filter(function () {  //4
        $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)  //5
    });
});

// create list

var options = {
    page: 3,
    pagination: true
}

var myList = new List('list-cards', options);

$('#pagination').change(function (e) {
    var numberOfList = $(this).val();
    myList.page = numberOfList;
    myList.update();
});

