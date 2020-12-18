// $("#phone").intlTelInput();

$(document).ready(function(){
    var options = {
          initialCountry: 'us',
          utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
          nationalMode: true,
          autoPlaceholder: 'aggressive',
          separateDialCode: true
    };
    
    $("#phone").intlTelInput(options);
    $("#hidden-phone").intlTelInput(options);
  });