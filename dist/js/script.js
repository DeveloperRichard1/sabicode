// custom javascript file written by developer richard for sabicode
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $('.navbar').addClass("bg-scrolling");
    } else {
      $('.navbar').removeClass("bg-scrolling");
    }
  });

  const primaryNav = document.querySelector(".nav-ul");
  const navToggle = document.querySelector(".mobile-toggle");

  navToggle.addEventListener("click", function () {
    const accf = primaryNav.getAttribute("data-visible");

    if (accf === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else if (accf === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 2,
        nav: false
      }
    }
  });

  //animate on scroll
  // AOS.init();

  //tabs in about page
  
});


