(function($) {
  "use strict";

  function mobileMenuHide() {
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
      $('.site-nav').addClass('mobile-menu-hide');
    }
  }
  $(document).ready(function() {
    $('.site-main-menu').on("click", "a", function(e) {
      var $container = $(".blog-masonry");
      $container.masonry();
    });
  });
  $(window).on('load', function() {
    $(".preloader").fadeOut("slow");
  });
  $(window).on('resize', function() {
    mobileMenuHide();
  });
  $('.site-main-menu').on("click", "a", function(e) {
    mobileMenuHide();
  });
})(jQuery);
