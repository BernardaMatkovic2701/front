var $ = require('jquery');
var View = require('jquery-simple-view');
var MainNav = require('js/components/mainNav');
var MainSearch = require('js/components/mainSearch');
var Gallery = require('js/components/gallery');

module.exports = View.extend({

    delegatedEvents: false,

    initialize: function() {

        this.setupBaseComponents();

    },

    events: {
        'click .mainHeader .signIn': function(e) {

            e.preventDefault();
            this.showLoginModal();

        }
    },

    setupBaseComponents: function() {

        this.mainNav = this.addView(new MainNav({ $el: $('.mainNav') }));
        this.mainSearch = this.addView(new MainSearch({ $el: $('.mainSearch') }));
        this.gallery = this.addView(new Gallery({ $el: $('.gallery') }));

        return this;

    },

    showLoginModal: function(e) {

        require.ensure([], function() {

            var LoginModal = require('js/components/loginModal');
            new LoginModal();

        });
    }
});
