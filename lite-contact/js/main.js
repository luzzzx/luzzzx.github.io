$(document).ready(function () {

    $('.burger-btn').click(function(e) {
        e.preventDefault();
        $('.main-menu').toggleClass('active');
        $('body').toggleClass('locked');
        $('html').toggleClass('locked');
        $('header').toggleClass('active');
    });


    function contractCheck() {
        $('#contractCheck').change(function() {
            if ($(this).is(':checked')){
                console.log('hi')
                $('.hidden-block').removeClass('blocked');
                $('.contract-btn').removeClass('disabled');
            } else {
                $('.hidden-block').addClass('blocked');
                $('.contract-btn').addClass('disabled');
            }
        });
    }

    contractCheck();

    
    // file upload 


    $('.input-file').each(function() {
          var $input = $(this),
              $label = $input.next('.btn-upload'),
              labelVal = $label.html();
          
        $input.on('change', function(element) {
            console.log(element.target.value);
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file') : $label.removeClass('has-file').html(labelVal);
         });
    });

    $('.contract-text').each(element, new SimpleBar());
});
