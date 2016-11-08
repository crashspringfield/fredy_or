var Pics = require('../models/pics.js');
var Fredy = require('../models/fredy.js');

// Get pictures for Honorable Mention page
module.exports.getLosers = function(req, res){
  Pics.find({})
    .exec(function(err, photos){
      if (err) {
        res.send(500).end();
      } else {
        res.json(photos);
      }
    })
}

// Get pictures for Winners page
module.exports.getWinners = function(req, res) {
  Fredy.find({})
    .exec(function(err, photos) {
      if (err) {
        res.send(500).end();
      } else {
        res.json(photos);
      }
    })
};
