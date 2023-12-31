// FOR FAQ SECTION ACCORDION
$(function ($) {
  var panels = $(".faq__ans").hide();
  panels.first().show();

  $(".faq__que").click(function () {
    var $this = $(this);
    panels.slideUp();
    $this.next().slideDown();
  });
});

$(".faq__que").click(function () {
  $(".faq__que i").addClass("bxs-chevron-right-circle");
  $(this.children[1]).removeClass("bxs-chevron-right-circle");
  $(this.children[1]).addClass("bxs-chevron-down-circle");
});

// ============Blog=============

var swiper = new Swiper(".blogSlider", {
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".blogSliderMobile", {
  spaceBetween: 30,
  slidesPerView: 1.2,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
  },
});

$(document).ready(function () {
  var swiper = new Swiper(".companySlider", {
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    //   draggable: true,
    //   autoplayDisableOnInteraction: false,
    // },
    freeMode: true,
    speed: 1000,
    freeModeMomentum: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      speed: 1000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },

      1250: {
        slidesPerView: 3.9,
        spaceBetween: 30,
      },
    },
  });
});

// =====================mobile toggle =========
$("#openMenu").click(function () {
  $(".side-menu").addClass("active");
});

$("#closeMenu").click(function () {
  $(".side-menu").removeClass("active");
});

// =========================preloader===============
function loader() {
  $(window).on("load", function () {
    $("#preloader").addClass("loaded");
    $("#loading").fadeOut(500);
  });
}
loader();
