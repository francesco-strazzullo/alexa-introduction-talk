const Alexa = require('ask-sdk-core')

const IncrementeCounterIntentHandler = {
  canHandle (handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'IncrementCounterIntent'
  },
  async handle (handlerInput) {
    const { counter } = handlerInput.state
    const value = parseInt(Alexa.getSlotValue(handlerInput.requestEnvelope, 'Value'))
    const newCounter = counter + value
    const speakOutput = handlerInput.t('INCREMENT_MSG', { value, counter: newCounter })

    handlerInput.state.counter = newCounter

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

module.exports = IncrementeCounterIntentHandler
