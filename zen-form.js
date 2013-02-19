/** Zen Forms 1.0.1 | MIT License | git.io/zen-form */

(function($) {

    $.fn.zenForm = function(settings) {

        settings = $.extend({
            trigger: '.go-zen',
            theme: 'dark'
        }, settings);

        /**
         * Helper functions
         */
        var Utils = {

            watchEmpty: function($form) {

                $form.find('input, textarea, select').each(function() {

                   $(this).on('change', function() {

                        $(this)[ $(this).val() ? 'removeClass' : 'addClass' ]('empty');

                   }).trigger('change');

                });

            },

            customSelect: function($select, $customSelect) {

                var $selected;

                $customSelect.on('click', function(event) {

                    event.stopPropagation();

                    $selected = $customSelect.find('.selected');

                    $customSelect.toggleClass('is-open');

                    if ( $customSelect.hasClass('is-open') ) {
                        $customSelect.scrollTop(
                            $selected.position().top - $selected.outerHeight()
                        );
                    }


                }).find('a').on('click', function() {

                    $(this).addClass('selected').siblings().removeClass('selected');

                    $select.val($(this).data('value'));

                });

            }

        }, // Utils

        /**
         * Core functionality
         */
        App = {

            /**
             * Wrapper element
             */
            Environment: null,

            /**
             * Functions to create and manipulate environment
             */
            env: {


                /**
                 * Object where elements created with App.env.addObject are appended
                 */
                wrapper: null,

                create: function() {

                    return $('<div>', {
                        class: 'zen-forms' + (settings.theme == 'dark' ? '' : ' light-theme')
                    }).hide().appendTo('body').fadeIn(200);

                }, // create

                /**
                 * Update orginal inputs with new values and destroy Environment
                 */
                destroy: function($elements) {

                    // Update orginal inputs with new values
                    $elements.each(function(i) {

                        var $el = $('#zen-forms-input' + i);

                        if ( $el.length )
                            $(this).val($el.val());

                    });

                    // Hide and remove Environment
                    App.Environment.fadeOut(200, function() {

                        App.env.wrapper = null;

                        App.Environment.remove();

                    });

                }, // destroy

                /**
                 * Append inputs, textareas to Environment
                 */
                add: function($elements) {

                    var $el, $label, value, id, IE, label;

                    $elements.each(function(i) {

                        App.env.addWrapper('div', { class: 'zen-forms-input-wrap' });

                        $el = $(this);

                        value = $el.val();

                        id = $el.attr('id');

                        ID = 'zen-forms-input' + i;

                        label = $el.data('label') || $("label[for=" + id + "]").text() || $el.attr('placeholder') || '';

                        // Exclude specified elements
                        if ( $.inArray( $el.attr('type'), ['checkbox', 'radio', 'submit']) == -1) {

                            if ( $el.is('input') )
                                App.env.addInput($el, ID, value);
                            else if ( $el.is('select') )
                                App.env.addSelect($el, ID);
                            else
                                App.env.addTextarea($el, ID, value);

                            $label = App.env.addObject('label', {
                                for: ID,
                                text: label
                            });

                            if ( $el.is('select') )
                                $label.prependTo(App.env.wrapper);

                        }

                    });

                }, // add

                addInput: function($input, ID, value) {

                    return App.env.addObject('input', {
                        id: ID,
                        value: value,
                        class: 'input',
                        type: $input.attr('type')
                    });

                },

                addTextarea: function($textarea, ID, value) {

                    return App.env.addObject('textarea', {
                        id: ID,
                        text: value,
                        rows: 5,
                        class: 'input'
                    });

                },

                addSelect: function($orginalSelect, ID) {

                    var $select = App.env.addObject('select', {
                            id: ID,
                            class: 'select'
                        }),
                        $options = $orginalSelect.find('option'),
                        $customSelect = App.env.addObject('div', {
                            class: 'custom-select-wrap',
                            html: '<div class="custom-select"></div>'
                        }).children();

                    $select.append($options.clone());

                    $.each($options, function(i, option) {

                        App.env.createObject('a', {
                            href: '#',
                            html: '<span>' + $(option).text() + '</span>' ,
                            'data-value': $(option).attr('value'),
                            class: $(option).prop('selected') ? 'selected' : ''
                        }).appendTo($customSelect);

                    });

                    $select.val($orginalSelect.val());

                    Utils.customSelect($select, $customSelect);

                    return $customSelect;

                },

                /**
                 * Wrapper for creating jQuery objects
                 */
                createObject: function(type, params, fn, fnMethod) {

                    return $('<'+type+'>', params).on(fnMethod || 'click', fn);

                }, // addObject

                /**
                 * Wrapper for adding jQuery objects to wrapper
                 */
                addObject: function(type, params, fn, fnMethod) {

                    return App.env.createObject(type, params, fn, fnMethod).appendTo(App.env.wrapper || App.Environment);

                }, // addObject

                /**
                 * Wrapper for creating jQuery "wrapper" element
                 */
                addWrapper: function(type, params) {

                    return App.env.wrapper = App.env.createObject(type, params).appendTo(App.Environment);

                }, // addObject

                switchTheme: function() {

                    App.Environment.toggleClass('light-theme');

                } // switchTheme

            }, // env

            zen: function($elements) {

                // Create environment
                App.Environment = App.env.create();

                // Add close button
                App.env.addObject('a', {
                    class: 'zen-forms-close-button',
                    html: '<i class="zen-icon zen-icon--close"></i>'
                }, function() {
                    App.env.destroy($elements);
                });

                // Add theme switch button
                App.env.addObject('a', {
                    class: 'zen-forms-theme-switch',
                    html: '<i class="zen-icon zen-icon--theme"></i>'
                }, function() {
                    App.env.switchTheme();
                });
                
                App.Environment.keydown(function(e) {
                    // ESC to exit
                    if (e.which == 27) {
                        App.env.destroy($elements);
                    }
                });

                // Hide any elements(mostly selects) when clicked outside them
                $(document).on('click', function() {
                    $('.is-open').removeClass('is-open');
                });

                // Add inputs and textareas from form
                App.env.add($elements);

                // Watch inputs and add "empty" class if needed
                Utils.watchEmpty(App.Environment);

            }, // zen

        }; // App

        return this.each(function() {

            var $this = $(this);

            $(settings.trigger).on('click', function(event) {
                event.preventDefault();
                App.zen( $this.is('form') ? $this.find('input, textarea, select') : $this );
            });

        });

    };

})(jQuery);
