var Fredy = require('../models/fredy.js');

module.exports.getFredy = function(req, res){
  // Count Fredy pixx in DB
  Fredy.count().exec(function(err, count){
    var random = Math.floor(Math.random() * count);

    // and return a random one
    Fredy.findOne({})
      .skip(random)
      .exec(function (err, photos) {
        if (err) {
          console.log('cant find him');
          res.send(500).end();
        } else {
          res.json(photos);
        }
    });
    
  });
}
