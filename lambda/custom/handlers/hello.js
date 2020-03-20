const Alexa = require('ask-sdk-core')

const HelloWorldIntentHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent'
  },
  async handle (handlerInput) {
    const speakOutput = handlerInput.t('HELLO_MSG')

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse()
  }
}

module.exports = HelloWorldIntentHandler
