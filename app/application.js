// Application bootstrapper.
Application = {
    initialize: function() {
        
        var HomeView = require('views/home_view')
        var OtherView = require('views/other_view')
          , Router   = require('lib/router')
        
        this.homeView = new HomeView()
        this.otherView = new OtherView()
        this.router   = new Router()
        
        if (typeof Object.freeze === 'function') Object.freeze(this)
        
    }
}

module.exports = Application
