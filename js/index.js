(function($) {

  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
    .find(".carousel-item:first")
    .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
  // change navbar
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 600) {
        $('#mainNav').addClass("dark");
      } else {
        $('#mainNav').removeClass("dark");
      }
    });
  });
})(jQuery);
///////////////////////////////////////////////////////////////
function soci() {
  var l = $('#socialM');
  l.addClass('active');
  $('#brandM').removeClass('active');
  $('#videoM').removeClass('active');
  $('#all').removeClass('active');

  if (l.hasClass("active")) {
    $('.social-media').show(400);
    $('.social-media').css('margin-left', '7%');
    $('.brand').hide(400);
    $('.video').hide(400);

  } else {
    $('.social-media').hide(400);
  }
}

function brand() {
  var l = $('#brandM');
  l.addClass('active');
  $('#socialM').removeClass('active');
  $('#videoM').removeClass('active');
  $('#all').removeClass('active');
  if (l.hasClass("active")) {
    $('.brand').show(400);
    $('.brand').css('margin-left', '7%');
    $('.social-media').hide(400);
    $('.video').hide(400);
  } else {
    $('.brand').hide(400);
  }
}

function video() {
  var l = $('#videoM');
  l.addClass('active');
  $('#brandM').removeClass('active');
  $('#socialM').removeClass('active');
  $('#all').removeClass('active');
  if (l.hasClass("active")) {
    $('.video').show(400);
    $('.video').css('margin-left', '7%');
    $('.social-media').hide(400);
    $('.brand').hide(400);
  } else {
    $('.video').hide(400);
  }
}
////////////////////////////////////////////////////////////////////////
// process
var iconOne = $('#circOne'),
  iconTwo = $('#circTwo'),
  iconThree = $('#circThree'),
  circContent = $('#circContent'),
  circP = $('#circP');
iconOne.mouseover(function() {
  circContent.show(400);
  circP.text("we listen");
})
iconTwo.hover(function() {
  circContent.show(400);
  circP.text("we create");
})
iconThree.hover(function() {
  circContent.show(400);
  circP.text("we share");
})
