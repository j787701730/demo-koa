var router = require('koa-router')();

router.get('/', function* (next) {
  yield this.render('index', {
    title: 'ctx.request.query'
  });
  // yield this.render(request.query);
  // yield this.render('index.html');
});

router.get('/foo', function* (next) {
  // yield this.render('foo.html');
  yield this.body = 'foo';
});

module.exports = router;