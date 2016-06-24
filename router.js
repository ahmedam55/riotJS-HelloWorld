riot.route.start(true)
riot.route(function(view, index) {
    if (view == 'page') {
        riot.mount('main', 'page',{index:index})
    } else {
        riot.mount('main', 'google')
    }

})
