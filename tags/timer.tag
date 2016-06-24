<timer>

  <p>Second Elapsed: { time*2 } </p>

  <script>
    this.time = opts.start || 0

    tick() {
      this.update({ time: ++this.time })
    }

    var timer = setInterval(this.tick, 1000)

    this.on('unmount', function() {
      clearInterval(timer)
    })
  </script>

</timer>
