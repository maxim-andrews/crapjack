const Koa = require('koa');
const serve = require('koa-static');
const compress = require('koa-compress');
const rewrite = require('koa-rewrite');
const path = require('path');

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(compress());
app.use(rewrite(/^\/(rules|game)$/, '/index.html'));
app.use(serve(path.join(__dirname, '..', 'build')), { defer: true });

app.listen(port);

console.log(`Listening on port ${ port }`);
