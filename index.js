var fs = require('fs')
var Canvas = require('canvas')
var shared = require('./shared')

module.exports = function(path, callback) { 
  fs.readFile(path, function(error, file) {
    if (error) {
      callback(error)
      return
    }

    var image = new Canvas.Image
    image.src = file

    var canvas = new Canvas(
      image.width, image.height
    )

    callback(null, shared(canvas)(image))
  })  
}
