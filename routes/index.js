var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Just Moments In Time' });
});

 router.get('/:id', function(req, res) {

  var id = req.params.id;
  if( id == "home"){
    var Title = "Home Is Where Your Heart Is";
  };

  if (id == "about"){
    var Title ="A Little Bit About Me"
  };
 
  if (id == "schedule"){
    var Title ="College Degree Course Schedule"
  };
  if( id == "photos"){
    var Title = "Time Stands Still For Just a Moment -  My favorite Photos";
  };
  if (id == "reviews"){
    var Title ="Favorite Movie & Book Reviews"
  };
  
  res.render('index', {id, title: Title});
  
 });

module.exports = router;