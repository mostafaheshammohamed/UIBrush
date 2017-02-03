$(function () {
    var wheight = $(window).height();// window height
    $("#home").height(wheight); // change height to max window height
    $(window).resize(function () {
        wheight = $(window).height();
        $("#home").height(wheight);
    })
    $(window).scroll(function () {
        if ($("body").scrollTop() > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        }
        else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            } // End inner if
        } // End if 
    }); // on click scroll
    // wow js
    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
 
 document.querySelector("#aboutus").dataset.wowOffset = $(window).height()-100;
$("html").niceScroll({cursorcolor:"#00f",cursorwidth:7,zindex:9999})    



}) // function