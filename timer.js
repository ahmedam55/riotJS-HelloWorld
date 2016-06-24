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
