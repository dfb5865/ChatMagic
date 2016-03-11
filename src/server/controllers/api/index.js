/*******************
 * Modules
 *******************/
var Router = require('koa-router');
var koaBody = require('koa-bodyparser');
var phoneFormatter = require('phone-formatter');
var storage = require('node-persist');
var uuid = require('node-uuid');
var request = require('request');
var api = Router();

/*******************
 * Controllers
 *******************/


/*******************
 * Routes
 *******************/
api.get('/initialResponse/:questionId', function* () {
    var newSessionId = uuid.v1();

    var response = {
        "sessionId": newSessionId,
        "questionResponse": "I'm interested in touring this home.",
        "nextQuestionBubbleType": "DatePicker"
    }

    this.body = response;
});

api.post('/dateSelected/', function* () {
    var days = this.request.body.days;
    var sessionId = this.request.body.sessionId;

    storage.initSync();
    storage.setItem(sessionId, {days: days});

    var daysText = days.join(" and ");

    var response = {
        "questionResponse":  "<b>" daysText + " work best for me.",
        "nextQuestionBubbleType": "AskToCall"
    }

    this.body = response;
});

api.post('/okayToCall/', function* () {
    var trueValue = this.request.body.trueValue;
    var sessionId = this.request.body.sessionId;

    storage.initSync();
    storage.setItem(sessionId, Object.assign({okayToCall: trueValue}, storage.getItem(sessionId)));

    var response = {};
    if(trueValue){
        response = {
            "questionResponse": "Yes, that would be fine.",
            "nextQuestionBubbleType": "AskForNameAndNumber"
        }
    } else {
        response = {
            "questionResponse": "No, I prefer email.",
            "nextQuestionBubbleType": "AskForEmail"
        }
    }

    this.body = response;
});

api.post('/nameAndNumber/', function* () {
    var name = this.request.body.name;
    var number = phoneFormatter.format(this.request.body.number, "(NNN) NNN-NNNN");
    var sessionId = this.request.body.sessionId;

    storage.initSync();
    storage.setItem(sessionId, Object.assign({name: name, number: number}, storage.getItem(sessionId)));

    var response = {
        "questionResponse":  "I'm " + name + " and my number is " + number + ".",
        "nextQuestionBubbleType": "CheckList"
    }

    this.body = response;
});

api.post('/nameAndEmail/', function* () {
    var name = this.request.body.name;
    var email = this.request.body.email;
    var sessionId = this.request.body.sessionId;

    storage.initSync();
    storage.setItem(sessionId, object.assign({name: name, email: email}, storage.getItem(sessionId)));

    var response = {
        "questionResponse":  "I'm " + name + " and my email is " + email + ".",
        "nextQuestionBubbleType": "CheckList"
    }

    this.body = response;
});

api.post('/checkList/', function* () {
    var preapproved = this.request.body.preapproved;
    var agent = this.request.body.workingWithAgent;
    var selling = this.request.body.selling;
    var sessionId = this.request.body.sessionId;

    storage.initSync();
    storage.setItem(sessionId, Object.assign({preapproved: preapproved, agent: agent, selling: selling}, storage.getItem(sessionId)));

    var userSessionValues = storage.getItem(sessionId);

    console.log(userSessionValues);

    var agentZuid = 17922703;
    var name = userSessionValues.name;
    var number = userSessionValues.number || "No Phone";
    var email = userSessionValues.email || "No Email";

    if(userSessionValues.agent == false) {
        var PAC_preapprovedText = userSessionValues.preapproved ? "pre-approved for a loan" : "not pre-approved for a loan";
        var PAC_agentText = userSessionValues.agent ? "already working with an agent" : "not working with an agent";
        var PAC_sellingText = userSessionValues.selling ? "selling a home." : "not selling a home.";

        var leadPayload = {
            "Source": "ChatMagic",
            "ContactInfo": {
                "zillowUserId": agentZuid,
                "crmContactId": 1,
                "contactLeadType": 248,
                "contactName": name,
                "contactPhone": number,
                "contactEmail": email,
                "contactMessage": "This lead came from ChatMagic! " + name + " said they were " + PAC_preapprovedText + " and " + PAC_agentText + " and " + PAC_sellingText + ".",
                "contactDateTimeWithSeconds": "2016-03-11T09:43:33.562-08:00"
            },
            "PropertyInfo": {
                "propertyId": 1,
                "streetAddress": "1234 Market St",
                "city": "San Francisco",
                "state": "CA",
                "zip": "94103",
                "listingPrice": "100000",
                "listingStatus": "For Sale"
            }
        }

        request.post(
            {url:'http://concierge-dev.oc-dev.zillow.net:16000/api/v1/leads/', body: leadPayload},  
            function (error, response, body) {
              if (!error && response) {
                console.log(body);
              }
            }
        );
    }

    var preapprovedText = preapproved ? "I'm pre-approved for a loan" : "I'm not pre-approved for a loan";
    var agentText = agent ? "I'm already working with an agent" : "I'm not working with an agent";
    var sellingText = selling ? "I'm selling a home." : "I'm not selling a home.";

    var response = {
        "questionResponse":  preapprovedText + ",  " + agentText + ", and " + sellingText,
        "nextQuestionBubbleType": "SimilarHome"
    }

    this.body = response;
});


module.exports = api;