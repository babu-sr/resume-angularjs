(function($) {
    'use strict';


    // mixItUp
    $( ".filters-menu li a" ).on('click' , function( event ) {
		console.log('click');
        event.preventDefault();
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(this).attr('href');
        var container = $('#container')
        if (target === "#portfo") {
          if (!container.mixItUp('isLoaded')) {
            container.mixItUp();
          }
        }
    });

})(jQuery); 
