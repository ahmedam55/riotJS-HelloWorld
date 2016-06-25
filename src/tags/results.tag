<results>	
	<div each={result in filteredResults}>
		<result result={result} index={result.index}/>
	</div>
	<script>
    this.filteredResults=[];
    var that = this

    String.prototype.contains=function(search){
        return this.toString().toLowerCase().indexOf(search.toLowerCase())!=-1
    }

    googleData=googleData.map(function(item,index){
        item.index=index
        return item
    })

    this.parent.on('inputChanged',function(value){
        if(value)
            that.filteredResults=googleData.filter(function(item){
                return item.title.contains(value)||item.desc.contains(value)|| item.link.contains(value)
            })
        else
            that.filteredResults=[]

        that.parent.trigger('resultsFiltered',value)
        that.update();
    })

</script>
</results>