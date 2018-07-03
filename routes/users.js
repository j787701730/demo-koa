var router = require('koa-router')();

router.prefix('/users');

router.get('/:id/:sss', function* (next) {
  console.log(this.params);
  this.body = 123123;
});

router.get('/bar', function* (next) {
  this.body = 'this is a users/bar response!';
});

module.exports = router;