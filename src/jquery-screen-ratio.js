/****************************************************************************
	jquery-screen-ratio.js, 

	(c) 2017, FCOO

	https://github.com/FCOO/jquery-screen-ratio
	https://github.com/FCOO

****************************************************************************/

(function ($, window/*, document, undefined*/) {
	"use strict";
	
    $.fn._setScreenRatio = function () {
        var w = screen.availWidth, 
            h = screen.availHeight, 
            r = h/w,
            p = r > 1,
            minD = parseFloat( this.data('screenRatio_minDimention') ),
            maxD = minD*(p ? r : 1/r ); 

        this
            .height( p ? maxD : minD )
            .width( p ? minD : maxD );

        //console.log('screen=',w+'x'+h, 'this=',minD+'x'+maxD, 'test=',w/h == (p? minD/maxD : maxD/minD));
    };
    
    
    //screenRatio
	$.fn.screenRatio = function ( minDimetion ) { 
		return this.each(function() {
            var $this = $(this);
            $this.data("screenRatio_minDimention", minDimetion);
            $(window).on('resize.screenratio', $.proxy( $.fn._setScreenRatio, $this ) );
            $this._setScreenRatio();
		});
	};



}(jQuery, this, document));