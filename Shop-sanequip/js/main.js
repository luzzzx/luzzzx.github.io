$(document).ready(function () {
    $(".main-slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true
    });
    $('.product-slider-body').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        nav: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });
    // plus minus
    // jQuery(function () {
    //     var j = jQuery; //Just a variable for using jQuery without conflicts
    //     var addInput = '#qty'; //This is the id of the input you are changing
    //     var n = 1; //n is equal to 1

    //     //Set default value to n (n = 1)
    //     j(addInput).val(n);

    //     //On click add 1 to n
    //     j('.plus').on('click', function () {
    //         j(addInput).val(++n);
    //     })

    //     j('.min').on('click', function () {
    //         //If n is bigger or equal to 1 subtract 1 from n
    //         if (n >= 1) {
    //             j(addInput).val(--n);
    //         } else {
    //             //Otherwise do nothing
    //         }
    //     });
    // });

    $('.min').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $(".tabs-item").on("click", function () {
        let $this = $(this),
            i = $this.data("id");
        $this.addClass("active").siblings().removeClass("active");
        $this
            .closest('.tabs')
            .find(".tab-main [data-id=" + i + "]")
            .addClass("active")
            .siblings()
            .removeClass("active");
    });
});

