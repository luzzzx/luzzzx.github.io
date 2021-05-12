// get the country data from the plugin
var countryData = window.intlTelInputGlobals.getCountryData(),
  addressDropdown = document.querySelector("#address-country");

// init plugin
var input = document.querySelector("#phone");

var iti = window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "us";
            callback(countryCode);
            });
        },
        utilsScript: "../../build/js/utils.js?1613236686837" // just for formatting/placeholders etc
});

// populate the country dropdown
for (var i = 0; i < countryData.length; i++) {
  var country = countryData[i];
  var optionNode = document.createElement("option");
  optionNode.value = country.iso2;
  var textNode = document.createTextNode(country.name);
  optionNode.appendChild(textNode);
  addressDropdown.appendChild(optionNode);
}
// set it's initial value
addressDropdown.value = iti.getSelectedCountryData().iso2;

// listen to the telephone input for changes
input.addEventListener('countrychange', function(e) {
  addressDropdown.value = iti.getSelectedCountryData().iso2;
});

// listen to the address dropdown for changes
addressDropdown.addEventListener('change', function() {
  iti.setCountry(this.value);
});


$("#main-form").on( "submit", function( event ) {
    event.preventDefault();
    var sectionForm = $('#form-section');
    var sectionCards = $('#afterform-section');
    sectionForm.hide();
    sectionCards.show();
    var formData = $("#main-form").serializeJSON();
    console.log(formData);
});