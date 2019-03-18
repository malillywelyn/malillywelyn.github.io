

  $(function() {
    $('.main-title').animate({ 
        left: "+=100vw",
    }, 1200 );
    $('.main-subtitle').animate({ 
      left: "+=100vw",
  }, 1200 );
    $('.main-img img').animate({ 
      left: "-=100vw",
  }, 1200 );
});

  /*Arrow 1 - Video*/
  $(".video1").click(function() {
    var click = $(this).data("click");
    if (click) {
    $(".vid1").animate({ 
        opacity: 0,
    }, 900 );

    } else {

    $(".vid1").animate({ 
        opacity: 1,
    }, 900 ); }
    $(this).data("click", !click);
    });

         /*Arrow 2 - Video*/
 $(".video2").click(function() {
    var click = $(this).data("click");
    if (click) {
    $(".vid2").animate({ 
        opacity: 0,
    }, 900 );

    } else {

    $(".vid2").animate({ 
        opacity: 1,
    }, 900 ); }
    $(this).data("click", !click);
    });

         /*Arrow 1 - Video*/
 $(".video3").click(function() {
    var click = $(this).data("click");
    if (click) {
    $(".vid3").animate({ 
        opacity: 0,
    }, 900 );

    } else {

    $(".vid3").animate({ 
        opacity: 1,
    }, 900 ); }
    $(this).data("click", !click);
    });

         /*Arrow 1 - Video*/
 $(".video4").click(function() {
    var click = $(this).data("click");
    if (click) {
    $(".vid4").animate({ 
        opacity: 0,
    }, 900 );

    } else {

    $(".vid4").animate({ 
        opacity: 1,
    }, 900 ); }
    $(this).data("click", !click);
    });

         /*Arrow 5 - Video*/
 $(".video5").click(function() {
    var click = $(this).data("click");
    if (click) {
    $(".vid5").animate({ 
        opacity: 0,
    }, 900 );

    } else {

    $(".vid5").animate({ 
        opacity: 1,
    }, 900 ); }
    $(this).data("click", !click);
    });