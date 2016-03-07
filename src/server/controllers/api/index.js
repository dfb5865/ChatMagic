/*******************
 * Modules
 *******************/
var Router = require('koa-router');
var api = Router();

/*******************
 * Controllers
 *******************/


/*******************
 * Routes
 *******************/
api

.get('/test', function* () {
  this.body = {
    hello: 'world'
  };
});


module.exports = api;