'use strict';
var Alexa = require('alexa-sdk');
//var firebase = require('firebase');
var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');
const APP_ID = "amzn1.ask.skill.10bae565-71f1-4d06-ba85-1c531e6a07f4";  // Your app ID.
var slotType = '';
var nameValue = '';

/*
The way this code works is by making requests to firebase, updating the status of Icarus 
so that Icarus can execute the appropriate functions.
It does this by:

1) Identifying which request it needs to handle
2) Responds with a verbal queue
3) Updates the Database that Project Icarus reads
*/

// --------------- Helpers that build all of the responses -----------------------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: 'PlainText',
            text: output,
        },
        card: {
            type: 'Simple',
            title: `SessionSpeechlet - ${title}`,
            content: `SessionSpeechlet - ${output}`,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        },
        shouldEndSession,
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: '1.0',
        sessionAttributes,
        response: speechletResponse,
    };
}

// --------------- Functions that control the skill's behavior -----------------------

function getWelcomeResponse(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Welcome';
    const speechOutput = 'Arming Defenses... ';
    const repromptText = 'Arming Defenses... ';
    const shouldEndSession = false;
    // starts Project Icarus 
    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function lock(callback, db) {
    const cardTitle = 'lock';
    let repromptText = 'Resetting the lock';
    let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = 'Resetting the lock';

    var today = new Date();
    let time = today.toLocaleString();
    db.ref("status/").update({
        command: 'lock',
        timestamp: time
    },() => { 
        callback(sessionAttributes,
            buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
    });
}

function goHome(callback, db) {
    const cardTitle = 'Going Home';
    let repromptText = 'Disarmed and Returning to Home state';
    let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = 'Disarmed and returning to Home state';

    var today = new Date();
    let time = today.toLocaleString();
    db.ref("status/").update({
        command: 'goHome',
        timestamp: time
    },() => { 
        callback(sessionAttributes,
            buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
    });
}

function cleanUp(callback, db) {
    const cardTitle = 'Stop';
    let repromptText = 'Beginning the purge... ' +
    'May god help us all';
    let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = 'Beginning the purge... ' +
    'May god help us all';

    var today = new Date();
    let time = today.toLocaleString();
    db.ref("status/").update({
        command: 'cleanUp',
        timestamp: time
    },() => { 
        callback(sessionAttributes,
            buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
    });
}

function stop(callback, db) {
    const cardTitle = 'Stop';
    let repromptText = 'Haulting';
    let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = 'Haulting';

    var today = new Date();
    let time = today.toLocaleString();
    db.ref("status/").update({
        command: 'stop',
        timestamp: time
    },() => { 
        callback(sessionAttributes,
            buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
    });
}

function handleSessionEndRequest(callback) {
    //Saying Goodbye once a session ends
    const cardTitle = 'Session Ended';
    const speechOutput = '';
    // Setting this to true ends the session and exits the skill.
    const shouldEndSession = true;

    callback({}, buildSpeechletResponse(cardTitle, speechOutput, null, shouldEndSession));
}

// --------------- Events -----------------------
/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log(`onSessionStarted requestId=${sessionStartedRequest.requestId}, sessionId=${session.sessionId}`);
}

/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log(`onLaunch requestId=${launchRequest.requestId}, sessionId=${session.sessionId}`);

    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, db, callback) {
    console.log(`onIntent requestId=${intentRequest.requestId}, sessionId=${session.sessionId}`);

    const intent = intentRequest.intent;
    const intentName = intentRequest.intent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'AMAZON.HelpIntent') {
        getWelcomeResponse(callback);
    } else if (intentName === 'Lock') {
        lock(callback, db);
    } else if (intentName === 'GoHome') {
        goHome(callback, db);
    } else if (intentName === 'CleanUp') {
        cleanUp(callback, db);
    } else if (intentName === 'Stop') {
        stop(callback, db);
    } else if (intentName === 'AMAZON.StopIntent' || intentName === 'AMAZON.CancelIntent') {
        handleSessionEndRequest(callback);
    } else {
        throw new Error('Invalid intent');
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log(`onSessionEnded requestId=${sessionEndedRequest.requestId}, sessionId=${session.sessionId}`);
    // Add cleanup logic here, just incase anything is still open
}

// --------------- Main handler -----------------------

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = (event, context, callback) => {
    try {
        console.log(`event.session.application.applicationId=${event.session.application.applicationId}`);

        context.callbackWaitsForEmptyEventLoop = false;  //<---Important
        // var config = require('./config.json');     

        // if(firebase.apps.length == 0) {   // <---Important!!! In lambda, it will cause double initialization.
        //      firebase.initializeApp(config);
        // }


        if(admin.apps.length == 0) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: "https://proj-icarus.firebaseio.com"
            });
        }

        //var db = firebase.database();
        var da = admin.auth();
        var db = admin.database();
        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === 'LaunchRequest') {
            onLaunch(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'IntentRequest') {
            onIntent(event.request,
                event.session, db,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            callback();
        }
    } catch (err) {
        callback(err);
    }
};
