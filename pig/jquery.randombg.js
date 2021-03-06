// closure
(function($){
  $.fn.randombg = function (options) {

    var base = $(this);
    base.options = options;

    base.init = function (options) {

      base.options = $.extend({}, $.fn.randombg.defaults, options);

      var hexa = Math.floor(Math.random() * 16777215).toString(16);
      var colorHexa = '#' + (hexa.length !== 6 ? base.options.color : hexa);

      base.changeBackground(colorHexa);
    }

    base.changeBackground = function (e) {
      this.css("background", e);
    }

    base.init(base.options);

  }

  $.fn.randombg.defaults = {
    color: '0c5672'
  }

}(jQuery));
