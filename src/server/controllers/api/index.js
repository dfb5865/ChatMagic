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
    console.log(this.params);

    var daysAvailable = "ASAP";

    var response = {
        "chatBubbleType" : "requestToCall",
        "questionResponse": daysAvailable + " works best for me."
    }

    this.body = response;
});


module.exports = api;