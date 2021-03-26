$(document).ready(function () {

  $(".phone-header a").click(function(e){
    e.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).next().toggleClass('active');
  });

  $(".lang a").click(function(e){
    e.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).next().toggleClass('active');
  });
  
  $('main').on("click", function () {
    $(".lang a").parent().removeClass('active');
    $(".phone-header a").parent().removeClass('active')
    $(".phone-header a").next().removeClass('active')
  });

    $(".burger-menu").click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().toggleClass('active');
      $(this).next().toggleClass('active');
    });

  $('.hero-body__img').each(function(i) {
      if ($(this).attr('data-img') === $('.lang ul li.active').attr('data-img') ) {
        $(this).show();
      } else {
        $(this).hide();
      }
  });

  $(".lang ul li a").click(function(e){
      e.preventDefault();
      let valLang = $(this).text();
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      $(".lang a span").text(valLang);
      $('.hero-body__img').each(function(i) {
        if ($(this).attr('data-img') === $('.lang ul li.active').attr('data-img') ) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
  });


    // Show the first tab and hide the rest
  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  // Click function
  $('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });  
});