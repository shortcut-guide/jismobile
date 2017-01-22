(function( $ ) {
	jQuery.fn.jismobile = function(){
		var ua = navigator.userAgent;
		return this.each(function(){

			var self = this;

			if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
				self.addClass("sp");
			} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
				self.addClass('tablet');
			} else {
				self.addClass('pc');
			}
		});
	}
})( jQuery );