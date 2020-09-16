/* Отправка заявки */
$(".callback-form__modal").submit(function () {
    $.ajax({
        type: "POST",
        url: "ajax/mail.php",
        data: $(this).serialize()
    }).done(function () {
        $('#manager').modal('show');
        setTimeout(function () {
            $('#manager').modal('hide');
        }, 3000);
    });
    return false;
});


$("#sndMail").on("click", function (e) {
    e.preventDefault();
    var msg = {
        compQnty: $(".param-subs__comp").text(),
        servQnty: $(".param-subs__server").text(),
        ipQnty: $(".param-subs__ip").text(),
        totalQnty: $(".param-subs__price").text(),
        name: $("#subName").val(),
        tel: $("#subTel").val(),
        email: $("#subMail").val(),
        company: $("#subCompany").val()
    }
    $.ajax({
        type: "POST",
        url: "ajax/subform.php",
        data: msg
    }).done(function () {
        $('#manager').modal('show');
        setTimeout(function () {
            $('#manager').modal('hide');
        }, 3000);
    });
    return false;
});

$(".contact-main__form").submit(function () {
    $.ajax({
        type: "POST",
        url: "ajax/contact.php",
        data: $(this).serialize()
    }).done(function () {
        $('#thanks').modal('show');
        setTimeout(function () {
            $('#thanks').modal('hide');
        }, 3000);
    });
    return false;
});