(function ($) {
  "use strict";

  const $WIN = $(window);

  var doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

  /* Preloader
   * -------------------------------------------------- */
  var ssPreloader = function () {
    $("html").addClass("ss-preload");

    $WIN.on("load", function () {
      //force page scroll position to top at page refresh
      $("html, body").animate({ scrollTop: 0 }, "normal");

      // will first fade out the loading animation
      $("#loader").fadeOut("slow", function () {
        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");
      });

      $("html").removeClass("ss-preload");
      $("html").addClass("ss-loaded");
    });
  };

  /* Highlight the current section in the navigation bar
   * ------------------------------------------------------ */
  var ssWaypoints = function () {
    var sections = $(".target-section"),
      navigation_links = $(".header-main-nav li a");

    sections.waypoint({
      handler: function (direction) {
        var active_section;

        active_section = $("section#" + this.element.id);

        if (direction === "up")
          active_section = active_section.prevAll(".target-section").first();

        var active_link = $(
          '.header-main-nav li a[href="#' + active_section.attr("id") + '"]'
        );

        navigation_links.parent().removeClass("current");
        active_link.parent().addClass("current");

        console.log(active_link, active_link.parent());
      },

      offset: "25%",
    });
  };

  /* Initialize
   * ------------------------------------------------------ */
  (function clInit() {
    ssPreloader();
    ssWaypoints();
  })();
})(jQuery);
