var application = require('application')

module.exports = Backbone.Router.extend({
    routes: {
        '': 'home'
        ,'other': 'other'
    },
    
    home: function() {
        $('body').html(application.homeView.render().el)
    },
    other: function() {
    	console.log('other');
        $('body').html(application.otherView.render().el)
    }
})
