(function( $ ) {
	jQuery.fn.jismobile = function(){
		var ua = navigator.userAgent;
		return this.each(function(){
			if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
				return 'sp';
			} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
				return 'tablet';
			} else {
				return 'pc';
			}
		});
	}
})( jQuery );