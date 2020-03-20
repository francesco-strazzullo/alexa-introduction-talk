const Alexa = require('ask-sdk-core')

const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
  },
  handle (handlerInput) {
    const speakOutput = 'Benvenuto, puoi salutarmi o chiedere aiuto. Cosa vorresti fare?'
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

module.exports = LaunchRequestHandler
