<auto-complete-input>
    <p>
      <input type="text" oninput={ change } value={ query }>
  </p>
  <script>
    var that=this
    this.parent.on('resultsFiltered',function(query){
        that.query=query
        that.update()
    })

    change(e){
        riot.route(e.target.value)
    }

</script>
</auto-complete-input>

