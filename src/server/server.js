// Modules
var path = require('path')
var koa = require('koa');
var serve = require('koa-static');
var logger = require('koa-logger');
var koaBody = require('koa-bodyparser');
var mount = require('koa-mount');
var api = require('./controllers/api');
var ENV = process.env.NODE_ENV;
var PORT = 4000;
var app = koa();

app.use(logger());
app.use(koaBody());

app.use(mount('/public/assets', serve(path.join(__dirname, "public/assets"))));
app.use(mount('/api', api.routes()));

app.listen(PORT, function () {
  console.log("HTTP server listening on", PORT);
  console.log("Static files served on", path.join(__dirname, "public/assets"))
});