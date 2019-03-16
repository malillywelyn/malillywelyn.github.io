 /* Click 1 */
 $(".line1").click(function() {
    var click = $(this).data("click");
    if (click) {
    $("nav").animate({ 
        top: "-=120vh"
    }, 900 );

    } else {

    $("nav").animate({ 
        top: "+=120vh"
    }, 900 ); }
    $(this).data("click", !click);
    });

