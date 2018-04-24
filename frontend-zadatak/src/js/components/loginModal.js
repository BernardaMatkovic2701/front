var $ = require('jquery');
var View = require('jquery-simple-view');
require('simple-lightbox');
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
