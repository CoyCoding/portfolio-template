'use strict';

define(function () {

    return {
        //cross browser support find screen width;
        getWindowWidth: function getWindowWidth() {
            var viewportwidth = void 0;

            // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

            if (typeof window.innerWidth != 'undefined') {
                viewportwidth = window.innerWidth;
            }

            // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

            else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
                    viewportwidth = document.documentElement.clientWidth;
                }
            return viewportwidth;
        }
    };
});