/*******************
 * Modules
 *******************/
var Router = require('koa-router');
var koaBody = require('koa-bodyparser');
var api = Router();

/*******************
 * Controllers
 *******************/


/*******************
 * Routes
 *******************/
api.get('/property/:zpid', function* () {
    this.body = "Getting property data for zpid: " + this.params.zpid;
});

api.get('/initialResponse/:questionId', function* () {
    var response = {
        "questionId": this.params.questionId,
        "questionResponse": "I'm interested in touring this home.",
        "nextQuestionBubbleType": "DatePicker"
    }

    this.body = response;
});

api.get('/dateSelected/:dayText', function* () {

    var response = {
        "questionResponse": this.params.dayText + " work best for me.",
        "nextQuestionBubbleType": "AskToCall"
    }

    this.body = response;
});


module.exports = api;