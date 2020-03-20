const Alexa = require('ask-sdk-core')

const LaunchRequestHandler = require('./handlers/launch')
const HelloWorldIntentHandler = require('./handlers/hello')
const HelpIntentHandler = require('./handlers/help')
const CancelAndStopIntentHandler = require('./handlers/cancel')
const SessionEndedRequestHandler = require('./handlers/end')
const ErrorHandler = require('./handlers/error')
const LocalisationRequestInterceptor = require('./interceptors/localisation')

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(
    ErrorHandler
  )
  .addRequestInterceptors(
    LocalisationRequestInterceptor
  )
  .lambda()
