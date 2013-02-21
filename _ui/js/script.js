/* by @Idered */

var App = App || (function($) {

    var Utils   = {},
        Public  = {};

    Utils = {
        settings: {
            debug: true,
            init: function() {

                $('body').removeClass('no-js');

            }
        }, // settings

        /**
         * Custom log wrapper function
         */
        log: function(what) {

            Utils.settings.debug && window.console && console.log.apply(console, arguments);

        } // log
    };
    var _log = Utils.log;


    Public = {
        init: function() {

            _log('main.js initialized.');

            Utils.settings.init();

            prettyPrint();

            Public.preCopy();

        }, // init

        preCopy: function() {

            $('pre').delegate('code', 'click', function() {

                var $this  = $(this).parent(),
                    $code  = $this.children('code'),
                    $clone = $code.clone(),
                    text   = $code.text(),
                    height = $code.outerHeight();

                $code.replaceWith($('<textarea/>'));

                $this.children('textarea').one('blur', function() {
                    $(this).replaceWith($clone);
                }).height(height).val(text).select();

            });

        } // preCopy
    };

    return Public;

})(window.jQuery);

jQuery(document).ready(App.init);
