riot.route.start(true)

var currentPage = null;

var riotMount=riot.mount;
riot.mount=function(){
	var tags = riotMount.apply(this,arguments);
	currentPage = tags[0]
	return tags
}

riot.route('page/*',function(index) {
	riot.mount('main', 'page',{index:index})
})  

riot.route('todo',function(){
	riot.mount('main','todo')
})

riot.route(function(query) {
	if(!currentPage || currentPage.opts.riotTag!='google'){
		riot.mount('main', 'google',{query:query})    
	}
	currentPage.trigger('inputChanged',query)

})







