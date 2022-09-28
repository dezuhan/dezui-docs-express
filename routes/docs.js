var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('docs/index');
// });

router.get('/:version', function(req, res, next) {
  let vers = 'docs/' + req.params.version
  let ver = vers.replace(/\./gi, '-')
  
  res.render(vers, {
    title: 'Docs',
    position: 'fixed'
  });
});

router.get('/changelog', function(req, res, next) {
  res.render('docs/changelog', {
    title: 'Changelog'
  });
});

module.exports = router;
