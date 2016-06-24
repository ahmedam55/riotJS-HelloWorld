riot.route.start(true)

var oldmount=riot.mount;
riot.mount=function(){
  return currentPage=oldmount.apply(this,arguments)[0]
}

riot.route('page/*',function(index) {
  riot.mount('main', 'page',{index:index})
  previousPage='page';
})  


riot.route(function(query) {
  if(previousPage!='google'){
    riot.mount('main', 'google',{query:query})
    previousPage='google';
  }
  currentPage.trigger('inputChanged',query)
  
})


  




