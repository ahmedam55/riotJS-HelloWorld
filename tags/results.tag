<results>	
	<div each={result in filteredResults}>
		<result result={result}/>
	</div>
	<script>
	this.filteredResults=[];
	var that = this
	String.prototype.contains=function(search){
		return this.toString().toLowerCase().indexOf(search.toLowerCase())!=-1
	}
	this.parent.on('inputChanged',function(value){
		if(value)
			that.filteredResults=that.parent.data.filter(function(item){
				return item.title.contains(value)||item.desc.contains(value)|| item.link.contains(value)
			})
		else
			that.filteredResults=[]
		
		that.update();
	})
</script>
</results>