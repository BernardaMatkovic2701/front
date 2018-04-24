var $ = require('jquery');
var View = require('jquery-simple-view');
require('simple-lightbox');
var $items = $('.gallery a');

module.exports = View.extend({

    events: {
        'click .galleryItem ': function(e) {

            e.preventDefault();
            this.openItem(e);
        }
    },

    openItem: function(e) {

        if ($.SimpleLightbox) {
            require('simple-lightbox');

            $.SimpleLightbox.open({
                $items: $items,
                bindToItems: false
            });
        }
    }
});
