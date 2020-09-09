// $(function () {
//   // Owl Carousel
//   var owl = $(".owl-carousel");
//   owl.owlCarousel({
//     items: 3,
//     margin: 10,
//     loop: true,
//     nav: true,
//   });
// });

$(document).ready(function () {
  $('.slider').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    easing: 'ease',
    variableWidth: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.menu-burger').click(function (event)) {
    $('.menu-burger,.nav').toggleClass('active');
  };
});
