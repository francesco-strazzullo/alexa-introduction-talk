const Alexa = require('ask-sdk-core')

const HelloWorldIntentHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent'
  },
  handle (handlerInput) {
    const speakOutput = 'Ciao a te!'
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse()
  }
}

module.exports = HelloWorldIntentHandler
