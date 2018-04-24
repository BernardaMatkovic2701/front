var View = require('jquery-simple-view');
var $ = require('jquery');

module.exports = View.extend({

    initialize: function() {

        if (this.$('.query').val() !== ' ') {
            require('fastsearch');
        }

        if ($.fastsearch) {
            this.$('.query').fastsearch({
                onItemSelect: 'fillInput'
            });

        }
    }
});
