// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin:10,
//     responsiveClass:true,
//     nav: true,
//     dots: true,
//     center: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 2,
//       },
//       1000: {
//         items: 3,
//       },
//     },
//   });
// });

$(".owl-carousel").owlCarousel({
  loop: false,
  autoplay:true,
  margin: 20,
  nav: true,
  dots:false,
  responsiveClass:true,
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
