<result>
	<div onclick={goToDetails}>
		<h2 class="title">{item.title}</h2>
		<span class="link"><a href="http://{item.link}">{item.link}</a></span>
		<p class="desc">{item.desc}</p>
	</div>



    <style scoped>
        .title{
          color:blue;
          font-size: 20px;
          margin-bottom: 0;
      }
      .link a{
          color:green;
          font-size: 10px;
          display: block;
          text-decoration: none;
      }
      .desc{
          color:black;
          font-style:italic;
          font-size: 15px;
      }
  </style>
  <script>
      this.item=this.opts.result;
      goToDetails(){
       riot.route('page/'+this.opts.index)
   }
</script>
</result>
