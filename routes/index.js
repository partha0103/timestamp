var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/:id',function(req, res){
  var date = req.params.id;
  var unix = 0;
  var natural = 0;
  if(isNaN(date) && moment(date, "MMMM D, YYYY").isValid()){
    unix = moment(date, "MMMM D, YYYY").format("X");
    natural = moment.unix(unix).format("MMMM D, YYYY");
  }
  else if(date > 0){
    unix+= date;
    natural = moment.unix(unix).format("MMMM D, YYYY");
  }
  var jsonObject = {
    "unix" : unix,
    "natural" : natural
  }
  res.send(JSON.stringify(jsonObject));
})
module.exports = router;
