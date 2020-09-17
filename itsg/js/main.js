AOS.init();

$('.slider').owlCarousel({
    center: true,
    loop: true,
    margin: 50,
    responsive: {
        0: {
            items: 1,
        },
        550: {
            items: 1.2,
        },
    },
    autoplay: true,
    autoplayTimeout: 3000
});


var inputsTel = document.querySelectorAll('input[type="tel"]');

Inputmask({
    "mask": "+7(999) 999-99-99",
    showMaskOnHover: false
}).mask(inputsTel);

// Калькулятор 

var compTotal = 0,
    srvTotal = 0,
    check = 0;


$('#users-comp').on("change mousemove touchmove", function () {
    var valComp = parseInt($(this).val()),
        compParam = parseInt($(this).val());

    $('.users-comp__label').text(valComp);
    if (valComp === 41) {
        $('.users-comp__label').text(`>40`);
        $('.calc-max__users').css("border-bottom", "unset");
        // $('.max-users__body').css("opacity", "1");
        $('.calc-max__users').slideDown();
        $('.calc-list').css({ "opacity": "0", "position": "absolute" });
        $('.outstaffing').css({ "visibility": "unset", "opacity": "1", "position": "unset" });
        $('.contact-toggle').css("visibility", "hidden");
        $("#qnty-servers").attr("value", "6");
        $('.server__label').text('');
        $("#qnty-servers").prop("disabled", true);
    }
    else {
        $('.calc-max__users').css("border-bottom", "2px solid #00ACCD");
        // $('.max-users__body').css("opacity", "0");
        $('.calc-max__users').slideUp();
        $('.outstaffing').css({ "position": "absolute", "visibility": "hidden", "opacity": "0" });
        $('.calc-list').css({ "opacity": "1", "position": "unset" });
        $('.contact-toggle').css("visibility", "visible");
        $("#qnty-servers").prop("disabled", false);

    }
    // сумма
    $('.param-subs__comp').text(valComp);
    calcComp(compParam);
    sumCalc(check, srvTotal, compTotal);
});


function calcComp(compParam) {
    if (compParam <= '4') {
        compTotal = 3500;
        $('.for-one').text(`3500`);
    }
    else if ((compParam >= 5) && (compParam <= 10)) {
        compTotal = compParam * 900;
        $('.for-one').text(`900`);
    }
    else if ((compParam > 10) && (compParam <= 20)) {
        compTotal = compParam * 750;
        $('.for-one').text(`750`);
    }
    else if ((compParam >= 21) && (compParam <= 40)) {
        compTotal = compParam * 670;
        $('.for-one').text(`670`);
    }
    else if (compParam === 41) {
        compTotal = 50000;
        srvTotal = 0;
        checkParam = 0;
    }
}

$('#qnty-servers').on("change mousemove touchmove", function () {
    var valServ = parseInt($(this).val()),
        servParam = parseInt($(this).val());
    $('.server__label').text(valServ);
    if (valServ > 0) {
        $('.setings-calc').css("opacity", "1");
    }
    else {
        $('.setings-calc').css("opacity", "0");
    }
    if (valServ >= 6) {
        $('.server__label').text('');
        $('.calc-max__users').css("border-bottom", "unset");
        // $('.max-users__body').css("opacity", "1");
        $('.calc-max__users').slideDown();
        $('.calc-list').css({ "opacity": "0", "position": "absolute" });
        $('.outstaffing').css({ "visibility": "unset", "opacity": "1", "position": "unset" });
        $("#users-comp").attr("value", "41");
        $('.contact-toggle').css("visibility", "hidden");
        $('.users-comp__label').text('>40');
        $("#users-comp").prop("disabled", true);
    }
    else {
        $('.calc-max__users').css("border-bottom", "2px solid #00ACCD");
        // $('.max-users__body').css("opacity", "0");
        $('.calc-max__users').slideUp();
        $('.outstaffing').css({ "position": "absolute", "visibility": "hidden", "opacity": "0" });
        $('.calc-list').css({ "opacity": "1", "position": "unset" });
        $('.contact-toggle').css("visibility", "visible");
        $("#users-comp").prop("disabled", false);
    }
    $('.param-subs__server').text(valServ);
    calcServ(servParam);
    sumCalc(check, srvTotal, compTotal);
});

function calcServ(servParam) {
    if (servParam === 6) {
        srvTotal = 50000;
    } else {
        srvTotal = servParam * 3500;
    }
};


$('#e').click(function () {
    var checkParam;
    if ($(this).is(':checked')) {
        checkParam = 2500;
        $('.param-subs__ip').text('да');
    }
    else {
        checkParam = 0;
        $('.param-subs__ip').text('нет');
    }
    check = checkParam;
    sumCalc(check, srvTotal, compTotal);
});

function sumCalc(check, srvTotal, compTotal) {
    var totalSum = 0,
        p1 = check,
        p2 = srvTotal,
        p3 = compTotal;
    if ((compTotal === 50000) || (srvTotal === 50000)) {
        totalSum = 50000
    } else {
        totalSum = p1 + p2 + p3;
    }
    $('.price').text(totalSum.toLocaleString('ru') + " ₽");
    $('.param-subs__price').text(totalSum.toLocaleString('ru') + " ₽/месяц");

}
