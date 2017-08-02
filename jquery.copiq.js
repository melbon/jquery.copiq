/*!
 * August 2017
 * copiq 1.0.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * MIT license
 */

(function($) {
    $.fn.copiq = function (options) {
        var settings = $.extend({
            parent: 'body',
            content: '',
            onSuccess: function () {},
            onError: function () {}
        }, options);

        return this.each(function () {
            var $element = $(this);
            $element.on('click', function () {
                var source = $element.parents(settings.parent).find(settings.content);
                var range = document.createRange();
                var selection = window.getSelection();

                range.selectNodeContents(source[0]);
                selection.removeAllRanges();
                selection.addRange(range);

                try {
                    var successful = document.execCommand('copy');
                    var callback = successful ? 'onSuccess' : 'onError';
                    settings[callback]($element, source, selection.toString());
                } catch (err) {}
                selection.removeAllRanges();
            });
        });
    };
})(jQuery);