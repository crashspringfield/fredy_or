var cloudinary = require('cloudinary');
var Pic = require('../models/pics.js');
var Fredy = require('../models/fredy.js');

module.exports.submitPicture = function(req, res) {
  var fileName = req.files.file.path;
  var fileData = req.body.data;

  cloudinary.uploader.upload(fileName, function(response) {
    // var picture = new Fredy(); // turn on when uploading fredy pix
    var picture = new Pic(); // turn off when uploading Fredy pix
    picture.url = response.secure_url;
    picture.save();
    res.status(200).end();
  });

}
