// Dependencies
var bodyParser  = require('body-parser');
var cloudinary  = require('cloudinary');
var express     = require('express');
var mongoose    = require('mongoose');
var multiparty  = require('connect-multiparty');

// My Dependencies
var configs   = require('./config.js');
var compareController = require('./server/api/compare-controller.js');
var displayController = require('./server/api/display-controller.js');
var displayFredy = require('./server/api/fredy-controller.js');

// Set up app
var app = express();
var multipartMiddleware = multiparty();

configs.setConfigs();
mongoose.connect(process.env.MONGO_CONNECT)

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// Endpoints
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

// // API
app.post('/compare', multipartMiddleware, compareController.submitPicture);
app.get('/getLosers', displayController.getLosers);
app.get('/getWinners', displayController.getWinners);
app.get('/getFredy', displayFredy.getFredy);

// Listener
app.listen(PORT, function() {
  console.log('Server running on port ' + PORT);
});
