$(document).ready(function () {
  $(".main-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear"
  });
});

$(document).ready(function () {
  $(".news-slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    useTransform: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".burger-menu").on("click", function (e) {
    $(this).toggleClass("active");
    $(".nav-body__list").toggleClass("active");
  });
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $(".news-slider__card-img");
var main = $(".img-full");
var modalImg = document.getElementById("img01");
main.on("click", function () {
  modal.style.display = "block";
  modalImg.src = this.parentElement.childNodes[3].src;
  captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// google maps
var map,
  marker,
  coord = { lat: 48.73759, lng: 37.581626 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: coord,
    zoom: 20
  });
  marker = new google.maps.Marker({
    position: coord,
    map: map,
    icon: "./src/img/marker.png"
  });
}
