$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#get_template" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [ '', ' ' ],
    autoplay: false,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
});

