<auto-complete-input>

<p>
  <input type="text" oninput={ change } >
</p>
<script>
  change(e){
    this.parent.trigger('inputChanged',e.target.value)
  }
</script>
</auto-complete-input>

