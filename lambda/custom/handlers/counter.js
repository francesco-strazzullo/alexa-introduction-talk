const Alexa = require('ask-sdk-core')

const CounterIntentHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'CounterIntent'
  },
  async handle (handlerInput) {
    const { counter } = handlerInput.state
    const speakOutput = handlerInput.t('COUNTER_MSG', { counter })
    handlerInput.state.counter++

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

module.exports = CounterIntentHandler
