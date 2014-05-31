var through = require('through2')
var File = require('vinyl')

// attempt to send another obj in the stream at the end
function trailer(file, fn) {
  return through({objectMode: true}, function (a, e, cb) {
    this.push(a)
    cb()
  }, function (cb) {
    var self = this
    fn(function (err, val) {
      if (err) { return cb(err) }
      if (val) {

        if (typeof val === 'string') {
          val = new Buffer(string)
        }
        
        var f = new File({
          path: file,
          contents: val
        })

        self.push(f)
      }
      cb()  
    })
    
  })
}

module.exports = trailer