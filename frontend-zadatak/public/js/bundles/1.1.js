webpackJsonp([1],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	var View = __webpack_require__(3);
	__webpack_require__(10);
	var dialog = $('.loginModal').load('/login-modal.html .loginModal');

	module.exports = View.extend({

	    initialize: function(options) {

	        if (dialog) {
	            $.simpleLightbox.open({
	                content: dialog,
	                elementClass: 'slbContentEl'
	            });
	        }

	    }

	});


/***/ })

});