/****************************************************************************
	jquery-screen-ratio.js, 

	(c) 2017, FCOO

	https://github.com/FCOO/jquery-screen-ratio
	https://github.com/FCOO

****************************************************************************/

(function ($, window/*, document, undefined*/) {
	"use strict";
	
    /********************************************
    Screen Ratio
    *********************************************/
	$.fn.screenRatio = function ( minDimension ) { 
		return this.each(function() {
            var $this = $(this);
            $this.data("screenRatio_minDimension", minDimension);
            $(window).on('resize.screenratio', $.proxy( $.fn._setScreenRatio, $this ) );
            $this._setScreenRatio();
		});
	};

    $.fn._setScreenRatio = function () { 
        var w = screen.availWidth, 
            h = screen.availHeight, 
            r = h/w,
            p = r > 1,
            minD = parseFloat( this.data('screenRatio_minDimension') ),
            maxD = minD*(p ? r : 1/r ); 

        this
            .height( p ? maxD : minD )
            .width( p ? minD : maxD );
    };
    

    /********************************************
    Window Ratio
    *********************************************/
	$.fn.windowRatio = function ( minDimension, maxDimension ) { 
		return this.each(function() {
            var $this = $(this);
            $this.data("windowRatio_minDimension", minDimension);
            $this.data("windowRatio_maxDimension", maxDimension);
            $(window).on('resize.windowratio', $.proxy( $.fn._setWindowRatio, $this ) );
            $this._setWindowRatio();
		});
	};


    $.fn._setWindowRatio = function () { 
        var w = window.innerWidth, 
            h = window.innerHeight,
            r = h/w,
            p = r > 1,
            minD = parseFloat( this.data('windowRatio_minDimension') ),
            maxD = minD*(p ? r : 1/r ),
            maxmaxD = parseFloat( this.data('windowRatio_maxDimension') );

            maxD = maxmaxD ? Math.min( maxD, maxmaxD ) : maxD;
        
        this
            .height( p ? maxD : minD )
            .width( p ? minD : maxD );
    };

}(jQuery, this, document));