// 
$(".owl-carousel").owlCarousel({
  loop: false,
  autoplay: false,
  margin: 20,
  nav: true,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
