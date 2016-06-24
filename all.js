riot.tag2('auto-complete-input', '<p> <input type="text" oninput="{change}"> </p>', '', '', function(opts) {
  this.change = function(e){
    this.parent.trigger('inputChanged',e.target.value)
  }.bind(this)
});


riot.tag2('google', '<auto-complete-input></auto-complete-input> <results></results>', '', '', function(opts) {
});
riot.tag2('page', '<h1>{item.title}</h1> <h2>{item.link}</h2> <p>{item.desc}</p>', '', '', function(opts) {
	this.item = googleData[this.opts.index]
});
riot.tag2('result', '<div onclick="{goToDetails}"> <h2 class="title">{item.title}</h2> <span class="link"><a href="http://{item.link}">{item.link}</a></span> <p class="desc">{item.desc}</p> </div>', 'result .title,[riot-tag="result"] .title,[data-is="result"] .title{ color:blue; font-size: 20px; margin-bottom: 0; } result .link a,[riot-tag="result"] .link a,[data-is="result"] .link a{ color:green; font-size: 10px; display: block; text-decoration: none; } result .desc,[riot-tag="result"] .desc,[data-is="result"] .desc{ color:black; font-style:italic; font-size: 15px; }', '', function(opts) {
		this.item=this.opts.result;
		this.goToDetails = function(){
			riot.route('page/'+this.opts.index)
		}.bind(this)
});

riot.tag2('results', '<div each="{result, i in filteredResults}"> <result result="{result}" index="{i}"></result> </div>', '', '', function(opts) {
	this.filteredResults=[];
	var that = this
	String.prototype.contains=function(search){
		return this.toString().toLowerCase().indexOf(search.toLowerCase())!=-1
	}
	this.parent.on('inputChanged',function(value){
		if(value)
			that.filteredResults=googleData.filter(function(item){
				return item.title.contains(value)||item.desc.contains(value)|| item.link.contains(value)
			})
		else
			that.filteredResults=[]

		that.update();
	})
});
riot.tag2('timer', '<p>Second Elapsed: {time*2} </p>', '', '', function(opts) {
    this.time = opts.start || 0

    this.tick = function() {
      this.update({ time: ++this.time })
    }.bind(this)

    var timer = setInterval(this.tick, 1000)

    this.on('unmount', function() {
      clearInterval(timer)
    })
});

riot.tag2('todo', '<form action=""> <input type="text" oninput="{preventNonNumbers}" onblur="{notValid}"> <span show="{notValid}">I can see you writing non-numeric chars</span> <input type="text" value="{egp}" oninput="{phoneMask}">{consoleV} </form> <a href="#/apply" onclick="{prevent}">aaa</a>', 'todo form,[riot-tag="todo"] form,[data-is="todo"] form{ color:red; }', '', function(opts) {
Event.prototype.args=function(str){
  return this.target.dataset[str];
}

this.mixin(mixins)

});