$(".edit-btn").click(function () {
    $('.control-aside').toggleClass("active");
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// document.querySelector('.custom-file-input').addEventListener('change', function (e) {
//     var fileName = document.getElementById("myInput").files[0].name;
//     var nextSibling = e.target.nextElementSibling
//     nextSibling.innerText = fileName
// })

$('.custom-file input').change(function (e) {
    if (e.target.files.length) {
        $(this).next('.custom-file-label').html(e.target.files[0].name);
    }
});

// $('.clear-form-file').click(function () {
//     $('.custom-file-label').input.value = '';
// })