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

api.post('/dateSelected/', function* () {

    var days = this.request.body.days;

    var daysText = days.join(" and ");

    var response = {
        "questionResponse":  daysText + " work best for me.",
        "nextQuestionBubbleType": "AskToCall"
    }

    this.body = response;
});

api.get('/okayToCall/:trueValue', function* () {
    var response = {};

    var trueValue = this.params.trueValue;

    if(trueValue){
        response = {
            "questionResponse": "Yes, that would be fine.",
            "nextQuestionBubbleType": "AskForNameAndNumber"
        }
    } else {
        response = {
            "questionResponse": "No thanks.",
            "nextQuestionBubbleType": null
        }
    }

    this.body = response;
});

api.post('/nameAndNumber/', function* () {
    var name = this.request.body.name;
    var number = this.request.body.number;

    var response = {
        "questionResponse":  "I'm " + name + " and my number is " + number + ".",
        "nextQuestionBubbleType": "CheckList"
    }

    this.body = response;
});


module.exports = api;