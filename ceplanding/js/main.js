$(document).ready(function () {
    // AOS.init();
    AOS.init({
        disable: function() {
          var maxWidth = 705;
          return window.innerWidth < maxWidth;
        }
      });
    // var $nav = $(".fixed-top");
    // $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $(".fixed-top").addClass('scrolled')
        }
        else{
            $(".fixed-top").removeClass('scrolled')
        }
    })

    $('.burger-btn').on("click", function () {
        $('.burger-btn').toggleClass('active');
        $('.main-menu').toggleClass('active');
        $(".fixed-top").toggleClass('active')
        $('main').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $('.close-menu').on("click", function () {
        $('.burger-btn').toggleClass('active');
        $('.main-menu').toggleClass('active');
        $(".fixed-top").toggleClass('active')
        $('main').toggleClass('active');
        $('body').toggleClass('lock');
    });
    

    $('input[type="tel"]').inputmask({
        "mask": "+7(999) 999-99-99",
        showMaskOnHover: false
    })
    // anim
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6b6b6b"
            },
            "shape": {
                "type": "triangle",
                "stroke": {
                    "width": 0,
                    "color": "#6b6b6b"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6b6b6b",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);;

    // anim

    // mask


});