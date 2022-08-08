$(function () {
  feather.replace();
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 20,
        },
        1000
      );
    event.preventDefault();
  });
  $(".slick-about").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  });
  var scrollTop = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      if (scroll > scrollTop) {
        $(".smart-scroll").addClass("scrolling").removeClass("up");
      } else {
        $(".smart-scroll").addClass("up");
      }
    } else {
      $(".smart-scroll").removeClass("scrolling").removeClass("up");
    }
    scrollTop = scroll;
    if (scroll >= 600) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
    return false;
  });

  $(".scroll-top").click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
